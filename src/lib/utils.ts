// src/lib/utils.ts
// Tiny, dependency-free class joiner to replace clsx/tailwind-merge.

export type ClassValue = string | false | null | undefined;

/**
 * Joins truthy class names with a single space.
 * Usage: cn('a', cond && 'b', 'c') -> 'a b c'
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (let i = 0; i < inputs.length; i++) {
    const v = inputs[i];
    if (typeof v === 'string' && v) out.push(v);
    // ignore false | null | undefined
  }
  return out.join(' ');
}
