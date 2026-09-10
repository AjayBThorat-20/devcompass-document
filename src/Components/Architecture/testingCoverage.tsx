import React from "react";

export default function TestingCoverage() {
  return (
    <section id="testing" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">Testing &amp; Coverage</h2>
      <p className="mt-2 text-muted-foreground leading-relaxed">
        <code className="font-mono text-foreground">npm test</code> runs the unit suite
        (<code className="font-mono text-foreground">test/unit/</code>, Node&apos;s built-in
        test runner). <code className="font-mono text-foreground">npm run test:coverage</code>{" "}
        runs the same suite under{" "}
        <a href="https://github.com/bcoe/c8" target="_blank" rel="noopener noreferrer" className="link-underline text-primary">
          c8
        </a>{" "}
        with a 60% line-coverage floor enforced in CI on every push/PR.{" "}
        <code className="font-mono text-foreground">npm run test:integration</code> runs the
        broader CLI smoke/scenario scripts under{" "}
        <code className="font-mono text-foreground">test/integration/</code> against fixture
        projects.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        There&apos;s no public coverage badge yet — that needs a Codecov/Coveralls account —
        so <code className="font-mono text-foreground">npm run test:coverage</code> locally,
        or the CI run itself, is the source of truth for now.
      </p>
    </section>
  );
}
