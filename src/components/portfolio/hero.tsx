import { ArrowDown, ArrowRight, Download, Linkedin, Trophy } from "lucide-react";
import { links, profile, resumeUrl } from "@/config/portfolio";
import { socials } from "./social";
import { assetUrl } from "@/lib/utils";

const stats = [
  { v: profile.cgpa, l: ["CGPA", "B.TECH CSE"] },
  { v: "2", l: ["PROJECTS", "IN PROGRESS"] },
  { v: "3", l: ["FOCUS", "AREAS"] },
  { icon: true, l: ["HACKATHON", "WINNER"] },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* top meta bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 border-b border-border/60 px-4 pb-3 pt-18 sm:px-8 lg:pt-24">
        <div>
          <p className="eyebrow text-primary">Web Developer</p>
          <p className="eyebrow mt-0.5 text-muted-foreground">Full-Stack Developer</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="eyebrow text-foreground/80">Open to Internships</p>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
        </div>
      </div>

      <div className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[860px]">
        {/* oversized backdrop word */}
        <span
          aria-hidden="true"
          className="display-mega pointer-events-none absolute inset-x-0 top-2 z-0 hidden select-none overflow-hidden text-ellipsis opacity-90 sm:block sm:top-4 sm:text-[22vw] sm:leading-[0.74]"
        >
          Portfolio
        </span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(120%_80%_at_70%_20%,transparent,color-mix(in_oklab,var(--background)_82%,transparent)_70%,var(--background))]"
        />

        {/* portrait — anchored bottom right */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[45%] w-[60%] sm:z-[2] sm:h-[84%] sm:w-[52%] lg:right-[8%] lg:h-[90%] lg:w-[40%]">
          <img
            src={assetUrl("/hero-figure.png")}
            alt={`Portrait of ${profile.name}, full-stack developer`}
            width={705}
            height={1519}
            loading="eager"
            className="h-full w-full select-none object-contain object-bottom opacity-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 sm:opacity-100"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/70 to-transparent"
          />
        </div>

        {/* scroll cue */}
        <a
          href="#about"
          className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary lg:flex"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full border border-primary/70 text-primary">
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </span>
          <span className="eyebrow text-center leading-4">
            Scroll
            <br />
            Down
          </span>
        </a>

        {/* content */}
        <div className="relative z-10 px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-[15vw] lg:max-w-[48%] lg:pb-24 lg:pt-[12vw]">
          <p className="reveal font-display text-2xl italic text-primary sm:text-4xl">
            Hello, I&apos;m
          </p>
          <h1 className="reveal mt-1 font-display text-4xl font-bold uppercase leading-[0.9] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Kumar
            <br />
            Shubham
          </h1>
          <p className="reveal mt-4 text-base font-semibold uppercase tracking-[0.08em] text-primary sm:text-2xl">
            Full-Stack Developer
          </p>
          <p className="reveal mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground sm:text-lg">
            CSE Student | Problem Solver
          </p>

          <p className="reveal mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.intro}
          </p>

          <div className="reveal mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-3 border border-primary bg-primary px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary sm:w-auto sm:px-6 sm:py-4"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full items-center justify-center gap-3 border border-primary/70 bg-primary/10 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground sm:w-auto sm:px-6 sm:py-4"
            >
              Connect on LinkedIn
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={resumeUrl ? assetUrl(resumeUrl) : "#resume"}
              {...(resumeUrl ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="inline-flex w-full items-center justify-center gap-3 border border-border bg-background/60 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary sm:w-auto sm:px-6 sm:py-4"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>

          {/* socials */}
          <div className="reveal mt-8">
            <div className="flex items-center gap-4">
              <p className="eyebrow text-muted-foreground">Let&apos;s Connect</p>
              <span className="h-px w-12 bg-primary" />
            </div>
            <ul className="mt-4 flex flex-wrap items-start gap-4 sm:gap-5">
              {socials.map(({ key, label, href, Icon }) => (
                <li key={key} className="flex flex-col items-center gap-1.5">
                  <a
                    href={href}
                    aria-label={label}
                    {...(href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noreferrer noopener" })}
                    className="grid h-11 w-11 place-items-center rounded-full border border-primary/70 text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12"
                  >
                    <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </a>
                  <span className="text-[0.65rem] text-muted-foreground sm:text-[0.68rem]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative z-20 border-y border-border bg-background/80 backdrop-blur">
        <dl className="mx-auto grid max-w-[92rem] grid-cols-2 divide-y divide-border px-4 sm:grid-cols-4 sm:divide-y-0 sm:divide-x sm:px-10">
          {stats.map((s) => (
            <div key={s.l[0]} className="px-3 py-6 text-center sm:px-4 sm:py-8">
              <dd className="flex h-9 items-center justify-center font-display text-3xl font-bold text-primary sm:h-10 sm:text-4xl">
                {s.icon ? <Trophy className="h-7 w-7 sm:h-8 sm:w-8" /> : <>{s.v}</>}
              </dd>
              <dt className="mt-1.5 text-[0.68rem] uppercase leading-3.5 tracking-[0.1em] text-muted-foreground sm:mt-2 sm:text-xs sm:leading-4 sm:tracking-[0.12em]">
                {s.l[0]}
                <br />
                {s.l[1]}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
