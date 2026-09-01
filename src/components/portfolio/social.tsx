import { Github, Linkedin, Mail, Flame } from "lucide-react";
import type { SVGProps } from "react";
import { links } from "@/config/portfolio";
import { cn } from "@/lib/utils";

export function LeetCodeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

export function CodeforcesIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4.5 7.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 3 0v-9a1.5 1.5 0 0 0-1.5-1.5zM12 3a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 3 0V4.5A1.5 1.5 0 0 0 12 3zm7.5 9a1.5 1.5 0 0 0-1.5 1.5v4.5a1.5 1.5 0 0 0 3 0v-4.5a1.5 1.5 0 0 0-1.5-1.5z" />
    </svg>
  );
}

export function FreeCodeCampIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <Flame className={className} {...props} />
  );
}

export const socials = [
  { key: "linkedin", label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { key: "github", label: "GitHub", href: links.github, Icon: Github },
  { key: "leetcode", label: "LeetCode", href: links.leetcode, Icon: LeetCodeIcon },
  { key: "codeforces", label: "Codeforces", href: links.codeforces, Icon: CodeforcesIcon },
  { key: "freecodecamp", label: "freeCodeCamp", href: links.freecodecamp, Icon: FreeCodeCampIcon },
  { key: "email", label: "Email", href: links.email, Icon: Mail },
] as const;

export function SocialRow({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {socials.map(({ key, label, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noreferrer noopener" })}
            className={cn(
              "grid place-items-center rounded-xl border border-border bg-surface text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
              size === "lg" ? "h-11 w-11" : "h-10 w-10",
            )}
          >
            <Icon className={size === "lg" ? "h-5 w-5" : "h-[1.05rem] w-[1.05rem]"} />
          </a>
        </li>
      ))}
    </ul>
  );
}
