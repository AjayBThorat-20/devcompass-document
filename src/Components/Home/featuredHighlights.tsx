import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import IconTile from "@/Components/UI/IconTile";
import { getAccent } from "@/Components/UI/accentColor";
import { featureGroups } from "@/constants/features";

export default function FeaturedHighlights() {
  return (
    <div id="features" className="container-custom section scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl">
        Five feature areas, one CLI.
      </h2>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featureGroups.map((group, index) => (
          <Link key={group.id} href={`/features#${group.id}`} className="entry-card p-6 space-y-3 block">
            <IconTile icon={group.icon} accent={getAccent(index)} />
            <h3 className="text-base font-bold text-foreground">{group.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{group.points[0]}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/features"
          className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          See the full feature list
          <FaArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
