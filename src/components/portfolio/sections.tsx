import { useState, type ReactNode } from "react";
import {
  Award,
  BadgeCheck,
  Binary,
  BookOpen,
  Boxes,
  Brain,
  Braces,
  Briefcase,
  Calendar,
  Camera,
  Check,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Eye,
  Globe,
  GraduationCap,
  Grid,
  HardDrive,
  Layers,
  Lightbulb,
  MessageCircle,
  Pause,
  Play,
  Puzzle,
  RefreshCw,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
  ZoomIn,
} from "lucide-react";
import {
  achievements,
  certifications,
  dsaTopics,
  education,
  experience,
  links,
  profile,
  resumeUrl,
  skillBubbles,
  skillIcons,
} from "@/config/portfolio";
import { assetUrl, cn } from "@/lib/utils";
import { CodeforcesIcon, FreeCodeCampIcon, LeetCodeIcon } from "./social";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="A CSE student building real, usable software."
        description={`I'm a B.Tech Computer Science Engineering student at ${profile.university}, currently at a CGPA of ${profile.cgpa}. I spend my time building full-stack web apps, sharpening C++ and data structures, and experimenting with applied AI/ML.`}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Full-Stack Web Development",
            body: "React on the frontend, Node.js and Express with REST APIs on the backend, MongoDB and PostgreSQL for data.",
          },
          {
            title: "C++ & DSA",
            body: "C++ is my primary language for problem solving — arrays, sorting, divide and conquer and dynamic programming.",
          },
          {
            title: "AI / ML Exploration",
            body: "Python-based machine learning and computer vision, including YOLO-based detection used in SmartParkingAI.",
          },
        ].map((c) => (
          <article key={c.title} className="card-premium p-6">
            <h3 className="font-display text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SafeSkillIcon({
  icon,
  className,
}: {
  icon: ReturnType<typeof findSkillIcon>;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!icon) {
    return <Code2 className={cn("text-[#6366F1] drop-shadow-[0_0_8px_rgba(99,102,241,0.75)]", className)} />;
  }

  if (icon.type === "lucide") {
    const IconComp = icon.data.icon;
    return <IconComp className={cn("transition-transform duration-300 hover:scale-125", icon.data.colorClass, className)} />;
  }

  if (failed) {
    return <Code2 className={cn("text-primary drop-shadow-[0_0_8px_rgba(99,102,241,0.75)]", className)} />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon.data.slug}/${icon.data.color}`}
      alt={icon.data.name}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{ filter: `drop-shadow(0 0 8px #${icon.data.color}aa)` }}
      className={cn("object-contain transition-transform duration-300 hover:scale-125", className)}
    />
  );
}

function SkillOrb({ icon }: { icon: (typeof skillIcons)[number] }) {
  return (
    <div
      className="marquee-item group relative flex items-center justify-center rounded-xl border border-border/50 bg-surface/90 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary/60"
      title={icon.name}
    >
      <SafeSkillIcon icon={{ type: "simple", data: icon }} className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-background/95 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wider text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
        {icon.name}
      </span>
    </div>
  );
}

const titleGradients = [
  "from-[#ff4d4d] to-[#ff9f43]",
  "from-[#43e97b] to-[#38f9d7]",
  "from-[#4facfe] to-[#00f2fe]",
  "from-[#fa709a] to-[#fee140]",
  "from-[#a18cd1] to-[#fbc2eb]",
  "from-[#ff9a9e] to-[#fecfef]",
];

const categoryConfig: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    glowColor: string;
    borderColor: string;
  }
> = {
  "Programming Languages": {
    icon: Code2,
    gradient: "from-[#FF4D4D] to-[#FF9F43]",
    glowColor: "rgba(255, 77, 77, 0.18)",
    borderColor: "hover:border-[#FF4D4D]/50",
  },
  "Web Technologies": {
    icon: Layers,
    gradient: "from-[#43E97B] to-[#38F9D7]",
    glowColor: "rgba(67, 233, 123, 0.18)",
    borderColor: "hover:border-[#43E97B]/50",
  },
  "Databases & Tools": {
    icon: Database,
    gradient: "from-[#4FACFE] to-[#00F2FE]",
    glowColor: "rgba(79, 172, 254, 0.18)",
    borderColor: "hover:border-[#4FACFE]/50",
  },
  "Frameworks & Libraries": {
    icon: Boxes,
    gradient: "from-[#FA709A] to-[#FEE140]",
    glowColor: "rgba(250, 112, 154, 0.18)",
    borderColor: "hover:border-[#FA709A]/50",
  },
  "Core Concepts": {
    icon: Cpu,
    gradient: "from-[#A18CD1] to-[#FBC2EB]",
    glowColor: "rgba(161, 140, 209, 0.18)",
    borderColor: "hover:border-[#A18CD1]/50",
  },
  "Soft Skills": {
    icon: Sparkles,
    gradient: "from-[#FF9A9E] to-[#FECFEF]",
    glowColor: "rgba(255, 154, 158, 0.18)",
    borderColor: "hover:border-[#FF9A9E]/50",
  },
};

const fallbackIconMap: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; colorClass: string }
> = {
  "Data Structures & Algorithms": {
    icon: Binary,
    colorClass: "text-[#38BDF8] drop-shadow-[0_0_8px_rgba(56,189,248,0.75)]",
  },
  "Operating Systems": {
    icon: HardDrive,
    colorClass: "text-[#A855F7] drop-shadow-[0_0_8px_rgba(168,85,247,0.75)]",
  },
  "Computer Architecture": {
    icon: Cpu,
    colorClass: "text-[#F59E0B] drop-shadow-[0_0_8px_rgba(245,158,11,0.75)]",
  },
  "Oracle Database": {
    icon: Database,
    colorClass: "text-[#EF4444] drop-shadow-[0_0_8px_rgba(239,68,68,0.75)]",
  },
  Oracle: {
    icon: Database,
    colorClass: "text-[#EF4444] drop-shadow-[0_0_8px_rgba(239,68,68,0.75)]",
  },
  DBMS: {
    icon: Database,
    colorClass: "text-[#06B6D4] drop-shadow-[0_0_8px_rgba(6,182,212,0.75)]",
  },
  "JWT Auth": {
    icon: ShieldCheck,
    colorClass: "text-[#F43F5E] drop-shadow-[0_0_8px_rgba(244,63,94,0.75)]",
  },
  "Machine Learning": {
    icon: Brain,
    colorClass: "text-[#C084FC] drop-shadow-[0_0_8px_rgba(192,132,252,0.75)]",
  },
  "Computer Vision": {
    icon: Eye,
    colorClass: "text-[#22D3EE] drop-shadow-[0_0_8px_rgba(34,211,238,0.75)]",
  },
  "YOLO Object Detection": {
    icon: ScanEye,
    colorClass: "text-[#FB7185] drop-shadow-[0_0_8px_rgba(251,113,133,0.75)]",
  },
  OpenCV: {
    icon: Camera,
    colorClass: "text-[#818CF8] drop-shadow-[0_0_8px_rgba(129,140,248,0.75)]",
  },
  Teamwork: {
    icon: Users,
    colorClass: "text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.75)]",
  },
  "Problem Solving": {
    icon: Puzzle,
    colorClass: "text-[#FBBF24] drop-shadow-[0_0_8px_rgba(251,191,36,0.75)]",
  },
  Creativity: {
    icon: Sparkles,
    colorClass: "text-[#F472B6] drop-shadow-[0_0_8px_rgba(244,114,182,0.75)]",
  },
  Adaptability: {
    icon: RefreshCw,
    colorClass: "text-[#34D399] drop-shadow-[0_0_8px_rgba(52,211,153,0.75)]",
  },
  Communication: {
    icon: MessageCircle,
    colorClass: "text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.75)]",
  },
  "REST APIs": {
    icon: Braces,
    colorClass: "text-[#FB923C] drop-shadow-[0_0_8px_rgba(251,146,60,0.75)]",
  },
};

function findSkillIcon(name: string) {
  // 1. Exact match with simple icons
  const exact = skillIcons.find((i) => i.name.toLowerCase() === name.toLowerCase());
  if (exact) return { type: "simple" as const, data: exact };

  // 2. Specific Lucide fallback icon map
  const Fallback = fallbackIconMap[name];
  if (Fallback) return { type: "lucide" as const, data: Fallback };

  // 3. Aliases for HTML and CSS
  if (name.toLowerCase() === "html")
    return { type: "simple" as const, data: { name: "HTML5", slug: "html5", color: "E34F26" } };
  if (name.toLowerCase() === "css")
    return { type: "simple" as const, data: { name: "CSS3", slug: "css", color: "1572B6" } };

  // 4. Substring match for icons with names longer than 1 char (avoids single-letter 'C' false matches)
  const contains = skillIcons.find(
    (i) => i.name.length > 1 && name.toLowerCase().includes(i.name.toLowerCase()),
  );
  if (contains) return { type: "simple" as const, data: contains };

  return null;
}

function SkillCard({ group, index }: { group: (typeof skillBubbles)[number]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 10, y: px * 10 });
  };

  const config = categoryConfig[group.title] || {
    icon: Terminal,
    gradient: titleGradients[index % titleGradients.length],
    glowColor: "rgba(99, 102, 241, 0.15)",
    borderColor: "hover:border-primary/50",
  };

  const CategoryIcon = config.icon;

  return (
    <div
      role="region"
      aria-label={group.title}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setActive(false);
      }}
      onMouseEnter={() => setActive(true)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-b from-surface/90 via-surface/75 to-surface/90 p-6 backdrop-blur-xl transition-all duration-300 shadow-lg hover:shadow-2xl",
        config.borderColor,
      )}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${active ? 1.02 : 1})`,
        boxShadow: active ? `0 20px 40px -15px ${config.glowColor}` : undefined,
      }}
    >
      {/* Background Soft Glow */}
      <div
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40",
          config.gradient,
        )}
        aria-hidden="true"
      />

      {/* Card Header */}
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110",
              config.gradient,
            )}
          >
            <CategoryIcon className="h-4.5 w-4.5 shrink-0 text-background font-bold" />
          </div>
          <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
            {group.title}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/50 px-2.5 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {group.items.length} items
        </span>
      </div>

      {/* Skills Pill Grid */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item}>
            <span className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/40 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-surface hover:text-foreground hover:shadow-md hover:-translate-y-0.5">
              <SafeSkillIcon
                icon={findSkillIcon(item)}
                className="h-4 w-4 shrink-0"
              />
              <span className="font-medium">{item}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const trackItems = [...skillIcons, ...skillIcons];

  return (
    <section id="skills" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="section-shell relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Technical Skills"
            title="Tech Stack & Core Competencies"
            description="Interactive showcase of programming languages, web technologies, databases, computer science fundamentals, and soft skills."
          />
          <p className="eyebrow text-muted-foreground">
            {skillIcons.length.toString().padStart(2, "0")} / tools
          </p>
        </div>

        {/* Marquee Bar */}
        <div className="relative mt-8 rounded-2xl border border-border/60 bg-gradient-to-b from-surface/80 to-surface py-6 shadow-inner">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="overflow-hidden">
            <div className="marquee-track gap-4 px-4">
              {trackItems.map((icon, i) => (
                <SkillOrb key={`${icon.name}-${i}`} icon={icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Bento Glass Matrix */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillBubbles.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const [selectedImage, setSelectedImage] = useState<{
    name: string;
    image: string;
    credentialId?: string | undefined;
  } | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getRoleMeta = (title: string) => {
    if (title.includes("Thiranex")) {
      return {
        icon: Briefcase,
        gradient: "from-[#FF416C] to-[#FF4B2B]",
        borderHover: "hover:border-[#FF416C]/60",
      };
    }
    if (title.includes("CivicAI")) {
      return {
        icon: Globe,
        gradient: "from-[#00c6ff] to-[#0072ff]",
        borderHover: "hover:border-[#00c6ff]/60",
      };
    }
    if (title.includes("SmartParkingAI")) {
      return {
        icon: Zap,
        gradient: "from-[#f857a6] to-[#ff5858]",
        borderHover: "hover:border-[#f857a6]/60",
      };
    }
    return {
      icon: Trophy,
      gradient: "from-[#F7971E] to-[#FFD200]",
      borderHover: "hover:border-[#F7971E]/60",
    };
  };

  return (
    <section id="experience" className="section-shell relative">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[130px]"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Experience & Roles
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {experience.map((item) => {
          const meta = getRoleMeta(item.title);
          const IconComp = meta.icon;

          return (
            <article
              key={item.title}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/95 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                meta.borderHover,
              )}
            >
              <div>
                {/* Header with Icon Badge & Period Pill */}
                <div className="flex items-center justify-between gap-3 border-b border-border/40 pb-3.5">
                  <div className="flex items-center gap-3 min-w-0">
                    {item.logo ? (
                      item.logo.includes("thiranex") ? (
                        <img
                          src={assetUrl(item.logo)}
                          alt={`${item.org} Logo`}
                          className="h-5.5 w-auto shrink-0 max-w-[4.2rem] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <img
                          src={assetUrl(item.logo)}
                          alt={`${item.org} Logo`}
                          className="h-7 w-7 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      )
                    ) : (
                      <div
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110",
                          meta.gradient,
                        )}
                      >
                        <IconComp className="h-4.5 w-4.5 font-bold" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-[0.72rem] font-medium text-primary">
                        {item.org}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border/80 bg-secondary/50 px-2.5 py-1 font-mono text-[0.68rem] font-medium text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                {/* Inline Certificate Proof */}
                {item.image && (
                  <div className="mt-3.5 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-2.5 backdrop-blur-sm">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          setSelectedImage({
                            name: item.title,
                            image: item.image!,
                            credentialId: item.credentialId,
                          })
                        }
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          setSelectedImage({
                            name: item.title,
                            image: item.image!,
                            credentialId: item.credentialId,
                          })
                        }
                        className="group/img relative aspect-[16/10] w-14 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-border/80 bg-black/40 shadow-sm"
                      >
                        <img
                          src={assetUrl(item.image)}
                          alt={`${item.title} Proof`}
                          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 transition-opacity group-hover/img:opacity-100">
                          <ZoomIn className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-xs font-semibold text-foreground truncate">
                          Verified Internship Certificate
                        </p>
                        {item.credentialId && (
                          <div className="flex items-center gap-1.5 font-mono text-[0.65rem] text-muted-foreground">
                            <span className="truncate">
                              ID: <code className="text-foreground font-semibold">{item.credentialId}</code>
                            </span>
                            <button
                              type="button"
                              onClick={(e) => handleCopy(item.credentialId!, e)}
                              title="Copy Credential ID"
                              className="p-0.5 text-muted-foreground transition-colors hover:text-primary"
                            >
                              {copiedId === item.credentialId ? (
                                <Check className="h-3 w-3 text-emerald-400" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedImage({
                          name: item.title,
                          image: item.image!,
                          credentialId: item.credentialId,
                        })
                      }
                      className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[0.68rem] font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                    >
                      <Eye className="h-3 w-3" /> View Proof
                    </button>
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="mt-3.5 space-y-1.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                      <Sparkles className="mt-1 h-3 w-3 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Pills */}
              {item.skills && item.skills.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-border/40 pt-3">
                  {item.skills.map((s) => (
                    <li key={s}>
                      <span className="rounded-lg border border-border/60 bg-secondary/50 px-2 py-0.5 font-mono text-[0.65rem] text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>

      {/* Lightbox Modal for Certificate Proof */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-semibold">{selectedImage.name}</h3>
                {selectedImage.credentialId && (
                  <p className="font-mono text-xs text-muted-foreground">
                    Credential ID: {selectedImage.credentialId}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="flex items-center justify-center bg-black/40 p-4 max-h-[75vh] overflow-auto">
              <img
                src={assetUrl(selectedImage.image)}
                alt={selectedImage.name}
                className="max-h-[70vh] w-auto rounded-lg object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading eyebrow="Achievements" title="Highlights" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <article key={a.title} className="card-premium overflow-hidden p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent2/20 text-primary">
                {i === 0 ? <Trophy className="h-5 w-5" /> : <Award className="h-5 w-5" />}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DSA() {
  const codingProfiles = [
    {
      name: "LeetCode",
      href: links.leetcode,
      Icon: LeetCodeIcon,
      color: "text-[#FFA116]",
      hoverBorder: "hover:border-[#FFA116]/60",
      hoverBg: "hover:bg-[#FFA116]/10",
    },
    {
      name: "Codeforces",
      href: links.codeforces,
      Icon: CodeforcesIcon,
      color: "text-[#1F8ACB]",
      hoverBorder: "hover:border-[#1F8ACB]/60",
      hoverBg: "hover:bg-[#1F8ACB]/10",
    },
    {
      name: "freeCodeCamp",
      href: links.freecodecamp,
      Icon: FreeCodeCampIcon,
      color: "text-emerald-400",
      hoverBorder: "hover:border-emerald-500/60",
      hoverBg: "hover:bg-emerald-500/10",
    },
  ];

  return (
    <section id="dsa" className="section-shell">
      <div className="card-premium grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="DSA & Coding"
            title="Problem solving in C++ & CS Fundamentals"
            description="I practice data structures, competitive programming, and algorithms regularly across LeetCode, Codeforces, and freeCodeCamp. Rather than quoting numbers here, the live profiles are the sources of truth."
          />
          <ul className="mt-6 flex flex-wrap gap-2">
            {dsaTopics.map((t) => (
              <li key={t}>
                <Chip>{t}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start lg:flex-col lg:items-stretch lg:self-center">
          {codingProfiles.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                "inline-flex items-center justify-between gap-3 rounded-xl border border-border/80 bg-surface/80 px-4 py-2.5 text-xs font-medium backdrop-blur transition-all sm:text-sm",
                p.hoverBorder,
                p.hoverBg,
              )}
            >
              <span className="inline-flex items-center gap-2">
                <p.Icon className={cn("h-4 w-4 shrink-0", p.color)} />
                <span>{p.name}</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[number] | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");

  const handleCopy = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Duplicate items for continuous loop
  const marqueeItems = [...certifications, ...certifications];

  const renderCertCard = (c: (typeof certifications)[number], indexKey: string) => (
    <article
      key={indexKey}
      className={`${
        viewMode === "marquee" ? "cert-card-3d shrink-0" : "card-premium flex flex-col overflow-hidden"
      } group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-surface/95 transition-all duration-300 hover:border-primary/60`}
    >
      {/* Compact Image Header */}
      {c.image && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSelectedCert(c)}
          onKeyDown={(e) => e.key === "Enter" && setSelectedCert(c)}
          className="relative aspect-[16/9] w-full overflow-hidden bg-muted/40 cursor-pointer"
        >
          <img
            src={assetUrl(c.image!)}
            alt={c.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-50 transition-opacity group-hover:opacity-30" />
          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/75 px-2 py-0.5 font-mono text-[0.65rem] text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-md">
            <ZoomIn className="h-3 w-3 text-primary" /> Zoom
          </div>
        </div>
      )}

      {/* Compact Content Body */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[0.68rem] font-medium text-primary truncate max-w-[150px]">
            <ShieldCheck className="h-3 w-3 shrink-0" /> {c.issuer}
          </span>
          {c.date && (
            <span className="flex items-center gap-1 font-mono text-[0.65rem] text-muted-foreground shrink-0">
              <Calendar className="h-2.5 w-2.5" /> {c.date}
            </span>
          )}
        </div>

        <h3 className="mt-2.5 font-display text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
          {c.name}
        </h3>

        {c.credentialId && (
          <div className="mt-2 flex items-center justify-between rounded-md border border-border/50 bg-secondary/50 px-2 py-1 font-mono text-[0.65rem]">
            <span className="text-muted-foreground truncate mr-1">ID: <code className="text-foreground">{c.credentialId}</code></span>
            <button
              onClick={(e) => handleCopy(c.credentialId!, e)}
              title="Copy Credential ID"
              className="shrink-0 p-0.5 text-muted-foreground hover:text-primary transition-colors"
            >
              {copiedId === c.credentialId ? (
                <Check className="h-3 w-3 text-emerald-400" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </button>
          </div>
        )}

        <ul className="mt-3 flex flex-wrap gap-1">
          {c.skills.slice(0, 3).map((s) => (
            <li key={s}>
              <span className="rounded-md border border-border/60 bg-secondary/40 px-1.5 py-0.5 font-mono text-[0.62rem] text-muted-foreground">
                {s}
              </span>
            </li>
          ))}
          {c.skills.length > 3 && (
            <span className="font-mono text-[0.62rem] text-muted-foreground/70 self-center">
              +{c.skills.length - 3}
            </span>
          )}
        </ul>

        <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between gap-2">
          {c.image && (
            <button
              onClick={() => setSelectedCert(c)}
              className="inline-flex items-center gap-1 text-[0.7rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Eye className="h-3 w-3" /> View
            </button>
          )}
          {c.verifyUrl ? (
            <a
              href={c.verifyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="ml-auto inline-flex items-center gap-1 text-[0.7rem] font-medium text-primary hover:underline"
            >
              Verify <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <span className="ml-auto text-[0.65rem] font-mono text-muted-foreground/70">Verified</span>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section id="certifications" className="section-shell relative overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent2/10 blur-[130px]"
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Certifications & Credentials"
          title="Verified Skill Certifications"
          description="Interactive 3D showcase of certificates across web development, AI/ML, and mobile engineering."
        />

        {/* View Mode & Animation Controls */}
        <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
          {viewMode === "marquee" && (
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              title={isPaused ? "Play 3D Marquee" : "Pause 3D Marquee"}
            >
              {isPaused ? <Play className="h-3.5 w-3.5 text-primary" /> : <Pause className="h-3.5 w-3.5" />}
              <span>{isPaused ? "Play 3D" : "Pause 3D"}</span>
            </button>
          )}

          <div className="inline-flex rounded-xl border border-border bg-surface p-1">
            <button
              onClick={() => setViewMode("marquee")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-medium transition-all ${
                viewMode === "marquee"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" /> 3D Flow
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid className="h-3.5 w-3.5" /> Grid
            </button>
          </div>
        </div>
      </div>

      {/* Content View */}
      <div className="mt-8">
        {viewMode === "marquee" ? (
          <div className="relative rounded-2xl border border-border/60 bg-gradient-to-b from-surface/80 to-surface py-6 shadow-inner overflow-hidden">
            {/* Soft Edge Blurs */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="overflow-hidden">
              <div
                className="certs-3d-track px-4"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              >
                {marqueeItems.map((c, i) => renderCertCard(c, `${c.name}-${i}`))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => renderCertCard(c, `grid-${c.name}-${i}`))}
          </div>
        )}
      </div>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-opacity"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-2xl border border-border/80 bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <h4 className="font-display text-base font-semibold">{selectedCert.name}</h4>
                <p className="text-xs text-muted-foreground">{selectedCert.issuer} {selectedCert.date ? `• ${selectedCert.date}` : ""}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="p-4 max-h-[75vh] overflow-auto flex items-center justify-center bg-black/40">
              <img
                src={assetUrl(selectedCert.image!)}
                alt={selectedCert.name}
                className="max-h-[70vh] w-auto rounded-lg object-contain shadow-2xl"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border px-6 py-3 bg-secondary/30">
              {selectedCert.credentialId && (
                <span className="font-mono text-xs text-muted-foreground">
                  Credential ID: <span className="text-foreground font-semibold">{selectedCert.credentialId}</span>
                </span>
              )}
              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  Verify Online <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function Education() {
  const primaryItem = education[0]; // University
  const schoolingItems = education.slice(1); // 12th & 10th

  return (
    <section id="education" className="section-shell relative">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[130px]"
      />

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Academic Qualifications
        </p>
      </div>

      <div className="mt-5 space-y-4">
        {/* Featured Card - University Degree */}
        {primaryItem && (
          <article className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-surface/95 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4 min-w-0">
                {primaryItem.logo ? (
                  <img
                    src={assetUrl(primaryItem.logo)}
                    alt={`${primaryItem.institution} Crest`}
                    className="h-11 w-auto shrink-0 max-w-[3.5rem] object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] text-white shadow-lg shadow-[#FF416C]/25 transition-transform duration-300 group-hover:scale-110">
                    <GraduationCap className="h-6 w-6 font-bold" />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {primaryItem.institution}
                    </h3>
                    <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs font-bold text-emerald-400">
                      {primaryItem.grade}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs font-semibold text-primary">
                    {primaryItem.degree}
                  </p>
                  {primaryItem.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {primaryItem.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-between border-t border-border/40 pt-3 sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
                <span className="rounded-full border border-border/80 bg-secondary/60 px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
                  {primaryItem.period}
                </span>
              </div>
            </div>
          </article>
        )}

        {/* 2-Column Grid for Schooling Qualifications */}
        <div className="grid gap-4 md:grid-cols-2">
          {schoolingItems.map((item, idx) => {
            const IconComp = idx === 0 ? BookOpen : Award;
            const gradient =
              idx === 0 ? "from-[#8E2DE2] to-[#4A00E0]" : "from-[#00c6ff] to-[#0072ff]";

            return (
              <article
                key={item.institution}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/95 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 border-b border-border/40 pb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {item.logo ? (
                        <img
                          src={assetUrl(item.logo)}
                          alt={`${item.institution} Seal`}
                          className="h-8 w-8 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110",
                            gradient,
                          )}
                        >
                          <IconComp className="h-4.5 w-4.5 font-bold" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="font-display text-sm font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                          {item.institution}
                        </h3>
                        <p className="mt-0.5 font-mono text-[0.72rem] font-medium text-primary">
                          {item.degree}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-border/80 bg-secondary/50 px-2.5 py-1 font-mono text-[0.68rem] font-medium text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  {item.description && (
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="mt-3.5 flex items-center justify-between border-t border-border/40 pt-2.5">
                  <span className="font-mono text-[0.68rem] text-muted-foreground">Overall Performance</span>
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-bold text-primary">
                    {item.grade}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section-shell relative">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Curriculum Vitae
        </p>
      </div>

      <div className="mt-5 card-premium relative overflow-hidden p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Left Column: Information & Actions */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Official Resume Document (PDF)
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Kumar Shubham — Resume
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-2xl">
              Computer Science Engineering undergraduate at Amity University Gwalior with a Minor in AI (CGPA 9.5/10). Experienced in Full-Stack Web Development (MERN), Applied AI/ML, and Data Structures & Algorithms.
            </p>

            {/* Quick Highlights Pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                CGPA 9.5 / 10
              </span>
              <span className="rounded-lg border border-border/80 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                B.Tech CSE (Minor AI)
              </span>
              <span className="rounded-lg border border-border/80 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                HackSetu 1.0 Winner
              </span>
              <span className="rounded-lg border border-border/80 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                React.js · Node.js · Leaflet
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <Eye className="h-4 w-4" /> Preview Resume
              </button>

              {resumeUrl && (
                <>
                  <a
                    href={assetUrl(resumeUrl)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/90 px-5 py-2.5 font-display text-sm font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/50"
                  >
                    Open PDF <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={assetUrl(resumeUrl)}
                    download="Kumar_Shubham_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-5 py-2.5 font-display text-sm font-medium text-muted-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:text-foreground"
                  >
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Visual Document Thumbnail */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsPreviewOpen(true)}
            onKeyDown={(e) => e.key === "Enter" && setIsPreviewOpen(true)}
            className="group relative aspect-[1/1.4] w-44 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-border/80 bg-black/60 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary/60 self-center justify-self-center lg:justify-self-end"
          >
            <img
              src={assetUrl("/resume-preview.png")}
              alt="Kumar Shubham Resume Document Preview"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
              <div className="flex items-center gap-1.5 rounded-full border border-white/30 bg-black/80 px-3.5 py-1.5 font-mono text-xs font-semibold text-white shadow-xl">
                <ZoomIn className="h-3.5 w-3.5 text-primary" /> Click to Expand
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-bold">Kumar Shubham — Resume</h3>
                <p className="font-mono text-xs text-muted-foreground">
                  Formal Curriculum Vitae (B.Tech CSE & Minor AI)
                </p>
              </div>
              <div className="flex items-center gap-2">
                {resumeUrl && (
                  <a
                    href={assetUrl(resumeUrl)}
                    download="Kumar_Shubham_Resume.pdf"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF View / Image Preview Box */}
            <div className="flex items-center justify-center bg-black/60 p-4 max-h-[80vh] overflow-auto">
              <iframe
                src={assetUrl("/resume.pdf")}
                title="Kumar Shubham Resume PDF"
                className="h-[75vh] w-full rounded-lg border border-border/60 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
