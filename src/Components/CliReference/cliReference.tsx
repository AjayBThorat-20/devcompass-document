import React from "react";
import CodeBlock from "@/Components/UI/CodeBlock";
import { commandGroups } from "@/constants/commands";

const categories = Array.from(new Set(commandGroups.map((c) => c.category)));

export default function CliReference() {
  return (
    <>
      {categories.map((category) => (
        <CategorySection key={category} category={category} />
      ))}
    </>
  );
}

function CategorySection({ category }: { category: string }) {
  const commands = commandGroups.filter((c) => c.category === category);

  return (
    <section
      id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
      className="scroll-mt-20"
    >
      <h2 className="text-xl font-bold text-foreground md:text-2xl">{category}</h2>

      <div className="mt-6 space-y-10">
        {commands.map((cmd) => (
          <div key={cmd.id} id={cmd.id} className="scroll-mt-20">
            <h3 className="text-lg font-bold text-foreground">
              <code className="text-primary">{cmd.name}</code> — {cmd.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{cmd.description}</p>
            <div className="mt-4">
              <CodeBlock lines={cmd.examples} />
            </div>
            {cmd.notes && (
              <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                {cmd.notes.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span className="text-muted-foreground select-none">—</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            )}
            {cmd.gif && (
              <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted/40">
                {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF, next/image would strip the animation */}
                <img
                  src={cmd.gif}
                  alt={cmd.gifAlt ?? `${cmd.name} command demo`}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
