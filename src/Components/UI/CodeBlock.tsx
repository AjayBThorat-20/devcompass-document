import React from "react";

interface CodeBlockProps {
  lines: string[];
  className?: string;
}

// Terminal-style code block for CLI examples: each line prefixed with a
// muted "$" unless it's a comment (starts with "#"), which renders dimmed
// instead - so multi-line examples read like a real shell transcript
// rather than an unbroken block of commands.
export default function CodeBlock({ lines, className = "" }: CodeBlockProps) {
  return (
    <pre
      className={`overflow-x-auto rounded-2xl border border-border bg-muted/40 px-5 py-4 font-mono text-sm leading-relaxed ${className}`}
    >
      <code>
        {lines.map((line, i) => {
          if (line.trim() === "") {
            return <div key={i}>&nbsp;</div>;
          }
          const isComment = line.trimStart().startsWith("#");
          return (
            <div key={i} className={isComment ? "text-muted-foreground" : "text-foreground"}>
              {!isComment && <span className="text-muted-foreground select-none">$ </span>}
              {line}
            </div>
          );
        })}
      </code>
    </pre>
  );
}
