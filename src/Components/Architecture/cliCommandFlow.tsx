import React from "react";
import CodeBlock from "@/Components/UI/CodeBlock";
import { FlowChain } from "@/Components/UI/FlowDiagram";

export default function CliCommandFlow() {
  return (
    <section id="cli-commands" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">CLI Command Pattern</h2>
      <p className="mt-2 text-muted-foreground">Every one of the 13 registered commands follows the same dispatch shape.</p>

      <div className="mt-6">
        <FlowChain
          nodes={[
            { label: "You run a command", meta: "$ devcompass history stats" },
            { label: "commander matches it", meta: "program.command('history <subcommand>')" },
            { label: ".action() fires", meta: "src/cli/commands/history.cmd.js" },
            { label: "Feature required lazily", meta: "require('../../features/history/history.command')" },
          ]}
        />
      </div>

      <div className="mt-6">
        <CodeBlock
          lines={[
            "// src/cli/commands/<name>.cmd.js",
            "module.exports = function registerXCommand(program) {",
            "  program",
            "    .command('x <subcommand>')",
            "    .option('--limit <number>', '...', parseIntOption, 30)",
            "    .action(async (subcommand, options) => {",
            "      // lazy require — keeps command registration cheap",
            "      const xCommand = require('../../features/x/x.command');",
            "      await xCommand({ ...options, _: ['x', subcommand] });",
            "    });",
            "};",
          ]}
        />
      </div>

      <div className="panel mt-6 rounded-2xl border-l-4 border-l-primary p-5 md:p-6">
        <p className="text-sm font-semibold text-foreground">Commander numeric-option gotcha</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          commander calls an option parser as <code className="font-mono text-foreground">parseArg(value, previousValue)</code>.
          Passing the bare <code className="font-mono text-foreground">parseInt</code> breaks, because{" "}
          <code className="font-mono text-foreground">previousValue</code> becomes the radix argument. Every command with a
          numeric flag defines a local wrapper instead — <code className="font-mono text-foreground">const parseIntOption =
          (value) =&gt; parseInt(value, 10)</code> — see{" "}
          <code className="font-mono text-foreground">history.cmd.js</code> and{" "}
          <code className="font-mono text-foreground">graph.cmd.js</code>.
        </p>
      </div>
    </section>
  );
}
