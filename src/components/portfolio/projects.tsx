import { useMemo, useState } from "react";
import {
  Code2,
  ExternalLink,
  FileSearch,
  Github,
  Grid,
  Pause,
  Play,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { links, projects, type Project } from "@/config/portfolio";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./sections";

const filters = ["All", "Full-Stack", "AI/ML", "Concept"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  // Duplicate items for continuous marquee loop in 3D Flow mode
  const marqueeItems = useMemo(
    () => (visible.length > 0 ? [...visible, ...visible] : []),
    [visible],
  );

  const renderProjectCard = (p: Project, indexKey: string) => (
    <article
      key={indexKey}
      className={cn(
        "group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/95 p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-xl",
        viewMode === "marquee" ? "project-card-3d shrink-0" : "card-premium",
      )}
    >
      <div>
        {/* Card Header: Category & Status */}
        <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[0.7rem] font-medium text-primary">
            <Code2 className="h-3.5 w-3.5" />
            {p.category}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.68rem]",
              p.status.toLowerCase() === "completed"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border-amber-500/30 bg-amber-500/10 text-amber-400",
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full animate-pulse",
                p.status.toLowerCase() === "completed" ? "bg-emerald-400" : "bg-amber-400",
              )}
            />
            {p.status}
          </span>
        </div>

        {/* Title & Role */}
        <h3 className="mt-3.5 font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {p.name}
        </h3>
        <p className="mt-1 font-mono text-xs font-medium text-primary/90">{p.role}</p>

        {/* Summary */}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

        {/* Highlights */}
        {p.highlights && p.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-xs text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Stack Tags */}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <li key={s}>
              <span className="rounded-md border border-border/60 bg-secondary/50 px-2 py-0.5 font-mono text-[0.68rem] text-secondary-foreground">
                {s}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Links */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border/40 pt-4">
          {p.demoUrl && (
            <a
              href={p.demoUrl}
              onClick={(e) => {
                if (p.demoUrl === "#reload" || p.demoUrl === "#refresh" || p.demoUrl === "#") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
              {...(p.demoUrl.startsWith("#") ? {} : { target: "_blank", rel: "noreferrer noopener" })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              Live Demo{" "}
              {p.demoUrl.startsWith("#") ? (
                <RefreshCw className="h-3.5 w-3.5" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" />
              )}
            </a>
          )}
          {p.repoUrl && (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
          {p.caseStudyUrl && (
            <a
              href={p.caseStudyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
            >
              <FileSearch className="h-3.5 w-3.5" /> Case Study
            </a>
          )}
          {!p.demoUrl && !p.repoUrl && !p.caseStudyUrl && (
            <p className="text-[0.7rem] text-muted-foreground">
              Links coming soon — happy to walk through the code on request.
            </p>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section id="projects" className="section-shell relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[130px]"
      />

      {/* Header & Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I'm building"
          description="Interactive 3D showcase of my full-stack web applications, AI/ML platforms, and product designs."
        />

        <div className="flex flex-wrap items-center gap-3 self-start sm:self-end shrink-0">
          {/* Category Filter Pills */}
          <ul className="flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <li key={f}>
                <button
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={cn(
                    "rounded-xl border px-3 py-1.5 font-mono text-xs transition-colors",
                    filter === f
                      ? "border-primary/60 bg-primary/10 text-primary font-medium"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {f}
                </button>
              </li>
            ))}
          </ul>

          {/* View Mode & Marquee Play/Pause */}
          <div className="flex items-center gap-2">
            {viewMode === "marquee" && (
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                title={isPaused ? "Play 3D Marquee" : "Pause 3D Marquee"}
              >
                {isPaused ? (
                  <Play className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <Pause className="h-3.5 w-3.5" />
                )}
                <span>{isPaused ? "Play 3D" : "Pause 3D"}</span>
              </button>
            )}

            <div className="inline-flex rounded-xl border border-border bg-surface p-1">
              <button
                type="button"
                onClick={() => setViewMode("marquee")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-medium transition-all",
                  viewMode === "marquee"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Sparkles className="h-3.5 w-3.5" /> 3D Flow
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-medium transition-all",
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Grid className="h-3.5 w-3.5" /> Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-8">
        {viewMode === "marquee" ? (
          <div className="relative rounded-2xl border border-border/60 bg-gradient-to-b from-surface/80 to-surface py-6 shadow-inner overflow-hidden">
            {/* Edge Blurs */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="overflow-hidden">
              <div
                className="projects-3d-track px-4"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              >
                {marqueeItems.map((p, i) => renderProjectCard(p, `${p.name}-${i}`))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((p, i) => renderProjectCard(p, `grid-${p.name}-${i}`))}
          </div>
        )}
      </div>

      {/* GitHub Callout */}
      <div className="mt-8">
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50"
        >
          <Github className="h-4 w-4" /> See all public repositories
        </a>
      </div>
    </section>
  );
}
