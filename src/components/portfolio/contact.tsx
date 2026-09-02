import { useState } from "react";
import { Check, Copy, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { links, profile } from "@/config/portfolio";
import { SectionHeading } from "./sections";
import { SocialRow, socials } from "./social";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label="Copy email address"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(profile.email);
          setCopied(true);
          toast.success("Email copied to clipboard");
          setTimeout(() => setCopied(false), 2000);
        } catch {
          toast.error("Couldn't copy — please copy it manually");
        }
      }}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-primary"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    setSubmitting(true);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `New Portfolio Message from ${name}: ${subject}`,
        }),
      });

      if (res.ok) {
        setSent(true);
        form.reset();
        toast.success("Message sent successfully! Kumar Shubham will get back to you soon.");
        setTimeout(() => setSent(false), 4000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[Portfolio] ${subject}`,
      )}&body=${encodeURIComponent(`Hi Kumar Shubham,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
      window.location.href = mailtoUrl;
      toast.info("Opening your email client to send message...");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="card-premium space-y-4 p-4.5 sm:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-muted-foreground">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-base sm:text-sm outline-none transition-colors focus:border-primary"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-muted-foreground">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="your.email@example.com"
            className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-base sm:text-sm outline-none transition-colors focus:border-primary"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium text-muted-foreground">Subject</span>
        <input
          required
          name="subject"
          placeholder="Project inquiry / Internship / Collaboration"
          className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-base sm:text-sm outline-none transition-colors focus:border-primary"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-muted-foreground">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Write your message here..."
          className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-3.5 py-2.5 text-base sm:text-sm outline-none transition-colors focus:border-primary"
        />
      </label>
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent2 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </>
          ) : sent ? (
            <>
              <Check className="h-4 w-4 text-emerald-300" /> Sent Successfully!
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send Message
            </>
          )}
        </button>
      </div>
      <p className="text-xs text-muted-foreground flex flex-wrap items-center gap-1.5 pt-1">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <span>
          Connected to <code className="font-mono text-foreground">{profile.email}</code> — messages are delivered directly.
        </span>
      </p>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together."
        description="Email is the fastest way to reach me — I usually reply within a day."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="card-premium p-4.5 sm:p-7">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
            <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <a
                href={links.email}
                className="truncate font-mono text-sm text-foreground hover:text-primary"
              >
                {profile.email}
              </a>
              <CopyEmail />
            </div>
            <a
              href={links.email}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent2 px-5 py-2.5 text-sm font-medium text-primary-foreground sm:w-auto"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
          </div>

          <div className="card-premium p-4.5 sm:p-7">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              {socials
                .filter((s) => s.key !== "email")
                .map(({ key, label, href, Icon }) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" /> {label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[92rem] gap-6 px-4 py-8 sm:flex sm:items-center sm:justify-between sm:px-10 sm:py-10">
        <div className="min-w-0">
          <p className="font-display text-base font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">Full-Stack Developer | CSE Student</p>
        </div>
        <SocialRow />
      </div>
      <div className="mx-auto max-w-[92rem] px-4 pb-8 sm:px-10">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
