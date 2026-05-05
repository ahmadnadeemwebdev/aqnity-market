import { PageTransition } from "@/components/PageTransition";
import { motion, useInView, useMotionValue, useTransform, animate, type Variants } from "framer-motion";
import { useRef, useEffect, useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, PenTool, MonitorPlay, Zap, Star, Quote } from "lucide-react";
import { SEO } from "@/components/SEO";
import heroImg from "@/assets/hero-grid.png";
import port1 from "@/assets/portfolio-1.png";
import port2 from "@/assets/portfolio-2.png";
import port3 from "@/assets/portfolio-3.png";
import port4 from "@/assets/portfolio-4.png";
import port5 from "@/assets/portfolio-5.png";
import port6 from "@/assets/portfolio-6.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5">
      {children}
    </span>
  );
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      count.set(0);
      const controls = animate(count, target, { duration: 1.6, ease: "easeOut" });
      return () => controls.stop();
    }
    return undefined;
  }, [inView, target, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const stats = [
  { value: "5+", label: "Years in Graphic Design" },
  { value: "2+", label: "Years Video Editing" },
  { value: "150+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const whyUs = [
  {
    icon: <CheckCircle size={22} />,
    title: "5+ Years Design Experience",
    desc: "Half a decade of crafting brand identities, marketing assets, and visual systems for clients worldwide.",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "2+ Years Video Editing",
    desc: "Cinematic storytelling — from raw footage to graded, motion-rich final cuts that command attention.",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "Fast, Reliable Delivery",
    desc: "We respect your timelines. No excuses, no delays — just polished work, on schedule.",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "Client-First Approach",
    desc: "Your vision is our obsession. We revise until it's perfect. Your satisfaction is the only metric that matters.",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "International-Grade Output",
    desc: "We benchmark ourselves against the best studios in the world, not just locally.",
  },
];

const testimonials = [
  {
    name: "Tariq Hassan",
    role: "CEO, NovaBrand PK",
    text: "Aqnity Market transformed our entire visual identity in under two weeks. The quality was jaw-dropping — I've worked with studios in Dubai and London, and this team rivals them all.",
    rating: 5,
  },
  {
    name: "Sana Raza",
    role: "Marketing Director, Luxe Threads",
    text: "Our social media engagement jumped 300% within a month of using their content. They don't just design — they engineer content that converts. Absolutely elite work.",
    rating: 5,
  },
  {
    name: "Omar Farooq",
    role: "Founder, NightOwl Films",
    text: "The video editing was next level. Color grading, transitions, sound design — everything was handled with a cinematic eye. Best investment we made for our YouTube channel.",
    rating: 5,
  },
];

const portfolioItems = [
  { img: port1, title: "Neon Cyber Branding", category: "Graphic Design", wide: true },
  { img: port2, title: "Cinematic Brand Film", category: "Video Editing" },
  { img: port3, title: "3D Motion Sequence", category: "Video Editing" },
  { img: port4, title: "Tech Corp Social Kit", category: "Social Media", wide: false },
  { img: port5, title: "Film Studio Identity", category: "Graphic Design", wide: true },
  { img: port6, title: "Luxury Brand Kit", category: "Graphic Design" },
];

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Aqnity Market - Professional Graphic Design & Video Editing Services"
        description="Transform your brand with Aqnity Market's expert graphic design and video editing services. 5+ years of experience, 150+ projects delivered. Get professional logos, branding, motion graphics, and more."
        keywords="graphic design, video editing, logo design, branding, motion graphics, digital marketing, creative studio, Pakistan"
        url="/"
        image="/hero-grid.png"
      />
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#050508",
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-[1] pointer-events-none" />

        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] z-[2] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[130px] z-[2] pointer-events-none" />

        <div className="relative z-30 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
              Based in Lahore · Global Impact
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-[96px] font-black text-white uppercase tracking-tighter leading-[0.88] max-w-5xl"
          >
            We Design Brands{" "}
            <span className="text-gradient">That Stand</span>{" "}
            Out.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
          >
            Helping businesses grow with powerful creative visuals and video content
            that converts viewers into loyal customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/portfolio"
              data-testid="link-view-work"
              className="group px-9 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full overflow-hidden relative transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.35)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                View Our Work <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              href="/contact"
              data-testid="link-hire-us"
              className="px-9 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all"
            >
              Hire Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20"
          >
            {[
              { target: 5, suffix: "+", label: "Years in Graphic Design" },
              { target: 2, suffix: "+", label: "Years Video Editing" },
              { target: 150, suffix: "+", label: "Projects Delivered" },
              { target: 100, suffix: "%", label: "Client Satisfaction" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white">
                  <CountUp target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </motion.div>
        </div>
      </section>

      {/* ─── MARQUEE STRIP ───────────────────────────────────── */}
      <div className="relative py-5 border-y border-white/8 overflow-hidden bg-white/[0.015]">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Graphic Design", "✦", "Brand Identity", "✦", "Video Editing", "✦",
            "Motion Graphics", "✦", "Color Grading", "✦", "Social Media Content", "✦",
            "Logo Design", "✦", "YouTube Edits", "✦", "Reels & TikToks", "✦",
            "Poster Design", "✦", "UI Mockups", "✦", "Ad Creatives", "✦",
            "Graphic Design", "✦", "Brand Identity", "✦", "Video Editing", "✦",
            "Motion Graphics", "✦", "Color Grading", "✦", "Social Media Content", "✦",
            "Logo Design", "✦", "YouTube Edits", "✦", "Reels & TikToks", "✦",
            "Poster Design", "✦", "UI Mockups", "✦", "Ad Creatives", "✦",
          ].map((item, i) => (
            <span
              key={i}
              className={`mx-4 text-xs font-bold uppercase tracking-[0.2em] ${
                item === "✦" ? "text-primary/60" : "text-white/35"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ─── TRUSTED BY ──────────────────────────────────────── */}
      <section className="py-20 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-12">
            Trusted by brands across Pakistan & beyond
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                { name: "NovaBrand", style: "font-black text-white/60 tracking-tighter text-xl" },
                { name: "Luxe Threads", style: "font-light text-white/50 tracking-widest text-sm uppercase" },
                { name: "NightOwl Films", style: "font-black italic text-white/60 text-lg" },
                { name: "TechVista", style: "font-bold text-white/50 tracking-wide" },
                { name: "Horizon Wear", style: "font-light text-white/50 tracking-[0.2em] uppercase text-xs" },
                { name: "ZenithMedia", style: "font-black text-white/60 text-xl" },
                { name: "CraftHouse PK", style: "font-medium text-white/50 tracking-wide" },
                { name: "NovaBrand", style: "font-black text-white/60 tracking-tighter text-xl" },
                { name: "Luxe Threads", style: "font-light text-white/50 tracking-widest text-sm uppercase" },
                { name: "NightOwl Films", style: "font-black italic text-white/60 text-lg" },
                { name: "TechVista", style: "font-bold text-white/50 tracking-wide" },
                { name: "Horizon Wear", style: "font-light text-white/50 tracking-[0.2em] uppercase text-xs" },
                { name: "ZenithMedia", style: "font-black text-white/60 text-xl" },
                { name: "CraftHouse PK", style: "font-medium text-white/50 tracking-wide" },
              ].map((brand, i) => (
                <span key={i} className={`mx-10 ${brand.style}`}>
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ────────────────────────────────── */}
      <section className="py-36 border-t border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <motion.div variants={fadeUp} custom={0}>
                <SectionLabel>What We Do</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9]"
              >
                Creative <span className="text-gradient">Services</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                href="/services"
                className="text-primary hover:text-white uppercase tracking-widest text-sm font-bold flex items-center gap-2 transition-colors"
              >
                All Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Graphic Design",
                desc: "Brand identities, logos, and marketing collateral that demand attention and communicate authority.",
                icon: <PenTool size={28} />,
                glow: "hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.12)]",
                accent: "text-primary",
              },
              {
                title: "Video Editing",
                desc: "Cinematic cuts, color grading, and motion graphics that transform raw footage into gripping stories.",
                icon: <MonitorPlay size={28} />,
                glow: "hover:border-secondary/40 hover:shadow-[0_0_40px_rgba(139,0,255,0.12)]",
                accent: "text-secondary",
              },
              {
                title: "Social Media Content",
                desc: "High-retention reels, carousels, and thumbnails engineered to stop scrolls and drive engagement.",
                icon: <Zap size={28} />,
                glow: "hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.12)]",
                accent: "text-primary",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative p-10 rounded-2xl bg-white/[0.02] border border-white/8 transition-all duration-500 cursor-default ${s.glow} hover:-translate-y-2`}
                data-testid={`card-service-${i}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`relative z-10 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${s.accent}`}>
                  {s.icon}
                </div>
                <h3 className="relative z-10 text-xl font-black text-white uppercase tracking-wide mb-4">{s.title}</h3>
                <p className="relative z-10 text-white/55 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ───────────────────────────────── */}
      <section className="py-36 border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>Selected Work</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9]"
            >
              Our Best <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-white/55 text-lg">
              A curated glimpse into brands we've elevated and stories we've told.
            </motion.p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[260px]">
            {portfolioItems.map((item, i) => {
              const span =
                i === 0 ? "md:col-span-7 md:row-span-2" :
                i === 1 ? "md:col-span-5" :
                i === 2 ? "md:col-span-5" :
                i === 3 ? "md:col-span-4" :
                i === 4 ? "md:col-span-8" :
                "md:col-span-4";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-2xl bg-white/5 ${span}`}
                  data-testid={`card-portfolio-${i}`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-7">
                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/portfolio"
              data-testid="link-portfolio-full"
              className="inline-flex items-center gap-2 px-9 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────── */}
      <section className="py-36 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div variants={fadeUp} custom={0}>
                <SectionLabel>Why Choose Us</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9] mb-6"
              >
                Built to <span className="text-gradient">Deliver</span> Results.
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-white/55 text-lg leading-relaxed mb-4">
                We're not a template agency. Every project is built from scratch, with strategy behind every decision.
              </motion.p>
            </AnimatedSection>

            <div className="space-y-5">
              {whyUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-400"
                  data-testid={`card-why-${i}`}
                >
                  <div className="text-primary mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">{item.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-36 border-t border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>Client Stories</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[0.9]"
            >
              What Clients <span className="text-gradient">Say</span>
            </motion.h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-white/15 transition-all duration-400"
                data-testid={`card-testimonial-${i}`}
              >
                <Quote size={30} className="text-primary/40 mb-6" />
                <p className="text-white/70 leading-relaxed text-sm mb-8">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-36 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>Let's Work Together</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.9] max-w-4xl mx-auto mb-8"
            >
              Ready to Grow Your <span className="text-gradient">Brand?</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-white/55 text-xl max-w-xl mx-auto mb-12">
              Stop blending in. Let's build something that makes your competition nervous.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-testid="link-cta-contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 hover:shadow-[0_0_50px_rgba(0,212,255,0.35)] transition-all duration-300"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/923001804650"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
