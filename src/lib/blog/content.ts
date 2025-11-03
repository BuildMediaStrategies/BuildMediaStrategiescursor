// Lightweight blog content loader using Vite import.meta.glob
// - Supports frontmatter (--- yaml) for title, excerpt, date, categories, author
// - Returns raw markdown and a naive HTML render for display

export type BlogFrontmatter = {
  title?: string;
  excerpt?: string;
  date?: string;
  categories?: string[];
  author?: string;
  slug?: string;
};

export type BlogPostData = {
  slug: string;
  md: string;
  frontmatter: BlogFrontmatter;
};

const files = import.meta.glob('/src/content/blog/**/*.md', { as: 'raw', eager: true }) as Record<string, string>;

function parseFrontmatter(md: string): { data: BlogFrontmatter; body: string } {
  const fmMatch = md.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fmMatch) return { data: {}, body: md };
  const yaml = fmMatch[1];
  const body = md.slice(fmMatch[0].length);
  const data: BlogFrontmatter = {};
  yaml.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^([A-Za-z0-9_\-]+):\s*(.*)$/);
    if (!m) return;
    const key = m[1].trim();
    let val = m[2].trim();
    if ((val.startsWith('[') && val.endsWith(']')) || (val.startsWith('-') && val.includes('- '))) {
      // very naive array support: categories: [A, B]
      const arr = val
        .replace(/^\[|\]$/g, '')
        .split(',')
        .map((s) => s.replace(/^['"]|['"]$/g, '').trim())
        .filter(Boolean);
      (data as any)[key] = arr;
    } else {
      val = val.replace(/^['"]|['"]$/g, '');
      (data as any)[key] = val;
    }
  });
  return { data, body };
}

export function loadAllPosts(): BlogPostData[] {
  const out: BlogPostData[] = [];
  for (const [path, raw] of Object.entries(files)) {
    const slug = path
      .replace(/^.*\/content\/blog\//, '')
      .replace(/\.md$/, '')
      .replace(/\s+/g, '-');
    const { data, body } = parseFrontmatter(raw);
    data.slug = data.slug || slug;
    out.push({ slug: data.slug!, md: body, frontmatter: data });
  }
  // newest first if date present
  out.sort((a, b) => (b.frontmatter.date || '').localeCompare(a.frontmatter.date || ''));
  return out;
}

export function loadPost(slug: string): BlogPostData | undefined {
  return loadAllPosts().find((p) => p.slug === slug);
}

export type TOCItem = { id: string; text: string; level: number };

export function renderMarkdown(md: string): { html: string; toc: TOCItem[] } {
  const lines = md.split(/\r?\n/);
  const toc: TOCItem[] = [];
  let html = '';
  let inList = false;

  function esc(s: string) {
    return s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]!));
  }
  function closeList() {
    if (inList) {
      html += '</ul>';
      inList = false;
    }
  }
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line) {
      closeList();
      html += '\n';
      continue;
    }
    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      closeList();
      const level = h[1].length;
      const text = h[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      toc.push({ id, text, level });
      html += `<h${level} id="${id}">${esc(text)}</h${level}>`;
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      if (!inList) {
        html += '<ul class="list-disc pl-6">';
        inList = true;
      }
      const item = line.replace(/^[-*]\s+/, '');
      html += `<li>${inline(item)}</li>`;
      continue;
    }
    // paragraph
    closeList();
    html += `<p>${inline(line)}</p>`;
  }
  closeList();
  return { html, toc };

  function inline(s: string) {
    // bold **text** and italic *text*
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    // links [text](url)
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline">$1</a>');
    return s;
  }
}

