import { createFileRoute } from "@tanstack/react-router";
import { BackToTop, Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import {
  About,
  Achievements,
  Certifications,
  DSA,
  Education,
  Experience,
  Resume,
  Skills,
} from "@/components/portfolio/sections";
import { Projects } from "@/components/portfolio/projects";
import { Contact, Footer } from "@/components/portfolio/contact";
import { links, profile } from "@/config/portfolio";

const title = "Kumar Shubham — Full-Stack Developer & CSE Student";
const description =
  "Portfolio of Kumar Shubham, B.Tech CSE student at Amity University Gwalior. Full-stack development with React and Node.js, C++ and DSA, and applied AI/ML projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Full-Stack Developer",
          email: `mailto:${profile.email}`,
          alumniOf: { "@type": "CollegeOrUniversity", name: profile.university },
          sameAs: [links.linkedin, links.github, links.leetcode],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <DSA />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
