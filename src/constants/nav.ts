export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/getting-started", label: "Getting Started" },
  { href: "/features", label: "Features" },
  { href: "/cli-reference", label: "CLI Reference" },
  { href: "/configuration", label: "Configuration" },
  { href: "/faq", label: "FAQ" },
];

export const githubLink: NavLink = {
  href: "https://github.com/AjayBThorat-20/devcompass",
  label: "GitHub",
};

export const npmLink: NavLink = {
  href: "https://www.npmjs.com/package/devcompass",
  label: "npm",
};
