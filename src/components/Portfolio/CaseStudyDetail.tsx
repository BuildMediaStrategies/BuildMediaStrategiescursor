import React from 'react';

type Props = { title: string; results?: string; children?: React.ReactNode };

export default function CaseStudyDetail({ title, results, children }: Props) {
  return (
    <article className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">{title}</h1>
        {results ? <p className="text-sm text-gray-500">Results: {results}</p> : null}
      </header>
      <div>{children}</div>
    </article>
  );
}

