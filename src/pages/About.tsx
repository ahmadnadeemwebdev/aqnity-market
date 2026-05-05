import { PageTransition } from "@/components/PageTransition";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Target, Eye, Award, Clock, Users, Globe, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.13, ease: EASE },
  }),
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5">
      <span className="w-4 h-px bg-primary" />
      {children}
      <span className="w-4 h-px bg-primary" />
    </span>
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 1.8, ease: "easeOut" });
      return () => controls.stop();
    } else {
      count.set(0);
      return undefined;
    }
  }, [inView, target, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const milestones = [
  {
    year: "2019",
    title: "The Spark",
    desc: "It started with a single logo and a hunger to prove that world-class design could come from Lahore. The first clients were local startups — the results were international-grade.",
    color: "primary",
  },
  {
    year: "2021",
    title: "Motion Added",
    desc: "Video editing entered the arsenal. Cinematic storytelling, color grading, motion graphics — clients started returning not just for design but for full creative production.",
    color: "secondary",
  },
  {
    year: "2023",
    title: "World Noticed",
    desc: "First international client signed. We began competing head-to-head with agencies in Dubai, London, and New York — and winning. The benchmark shifted permanently.",
    color: "primary",
  },
  {
    year: "2024",
    title: "Aqnity Born",
    desc: "The full creative studio was established. A brand, a team, a mission. Aqnity Market became the name behind brands that refuse to be ignored.",
    color: "secondary",
  },
];

const stats = [
  { target: 5, suffix: "+", label: "Years Design Exp." },
  { target: 2, suffix: "+", label: "Years Video Editing" },
  { target: 150, suffix: "+", label: "Projects Delivered" },
  { target: 40, suffix: "+", label: "Happy Clients" },
];

const values = [
  {
    icon: <Award size={24} />,
    title: "Ruthless Quality",
    desc: "Every pixel is placed with intention. If it's not our absolute best, it doesn't leave the studio.",
    gradient: "from-primary/20 to-primary/5",
    border: "hover:border-primary/30",
    iconColor: "text-primary",
  },
  {
    icon: <Zap size={24} />,
    title: "Speed & Precision",
    desc: "Fast turnarounds without compromising an inch of quality. Your deadline is our obsession.",
    gradient: "from-secondary/20 to-secondary/5",
    border: "hover:border-secondary/30",
    iconColor: "text-secondary",
  },
  {
    icon: <Globe size={24} />,
    title: "Global Standard",
    desc: "We benchmark against the world's top studios — not just local competition. The bar never stops rising.",
    gradient: "from-primary/20 to-primary/5",
    border: "hover:border-primary/30",
    iconColor: "text-primary",
  },
  {
    icon: <Users size={24} />,
    title: "Client-First Always",
    desc: "Your vision is the north star. We iterate until you're genuinely proud of the result — not just satisfied.",
    gradient: "from-secondary/20 to-secondary/5",
    border: "hover:border-secondary/30",
    iconColor: "text-secondary",
  },
  {
    icon: <Shield size={24} />,
    title: "Brand Strategy",
    desc: "Design without strategy is decoration. Every creative decision is backed by insight and intent.",
    gradient: "from-primary/20 to-primary/5",
    border: "hover:border-primary/30",
    iconColor: "text-primary",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Creative Innovation",
    desc: "We don't follow trends — we set them. Fresh thinking on every brief, every single time.",
    gradient: "from-secondary/20 to-secondary/5",
    border: "hover:border-secondary/30",
    iconColor: "text-secondary",
  },
];

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Aqnity Market - Creative Design Studio & Digital Experts"
        description="Learn about Aqnity Market's journey, expertise, and commitment to delivering exceptional graphic design and video editing services. 5+ years of creative excellence."
        keywords="about Aqnity Market, creative studio, design experts, video editing professionals, branding agency, digital marketing"
        url="/about"
      />
      <div>
        {/* ─── HERO — split layout with stats ──────────────── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 md:px-12">
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <SectionLabel>About Aqnity Market</SectionLabel>
            </motion.div>

            {/* Two-column: headline + text | stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* LEFT — headline + description */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: {} }}
              >
                <motion.h1
                  variants={fadeUp}
                  custom={0}
                  className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-8"
                >
                  Lahore's{" "}
                  <span className="text-gradient">Premium</span>
                  <br />Creative Studio.
                </motion.h1>
                <motion.div variants={fadeUp} custom={1} className="space-y-4 text-white/60 text-base md:text-lg leading-relaxed">
                  <p>
                    Founded with one goal — to deliver international-grade creative work without compromise. We serve ambitious brands that demand the very best in design and video production.
                  </p>
                  <p>
                    From Lahore to the world, our work speaks for itself. No templates. No shortcuts. Just obsessive attention to craft on every single project.
                  </p>
                </motion.div>
                <motion.div variants={fadeUp} custom={2} className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300"
                  >
                    Start a Project <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* RIGHT — animated stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden text-center"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 text-4xl md:text-5xl font-black text-gradient mb-2">
                      <CountUp target={s.target} suffix={s.suffix} />
                    </div>
                    <div className="relative z-10 text-xs text-white/45 uppercase tracking-widest leading-tight">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHO WE ARE ───────────────────────────────────── */}
        <section className="py-28 border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left — text */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-60px" }}
                variants={{ hidden: {}, show: {} }}
              >
                <motion.div variants={fadeUp} custom={0}>
                  <SectionLabel>Who We Are</SectionLabel>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[0.92] mb-8"
                >
                  A Creative Studio That Takes{" "}
                  <span className="text-gradient">No Shortcuts.</span>
                </motion.h2>
                <motion.div variants={fadeUp} custom={2} className="space-y-5 text-white/60 text-base md:text-lg leading-relaxed">
                  <p>
                    Aqnity Market was born from one belief: that the best creative work in the world 
                    shouldn't be gatekept by geography or budget. We are a Lahore-based creative studio 
                    with an international obsession for quality.
                  </p>
                  <p>
                    From brand identity systems to cinematic video production, we don't just execute 
                    briefs — we elevate them. Every project is approached with fresh thinking, sharp 
                    strategy, and relentless attention to detail.
                  </p>
                  <p>
                    We've delivered work for clients across Pakistan, the Middle East, and beyond. 
                    The common thread? Brands that needed to be seen — and now can't be ignored.
                  </p>
                </motion.div>
                <motion.div variants={fadeUp} custom={3} className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300"
                  >
                    Work With Us <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — visual card stack */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Background glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/15 to-secondary/15 blur-3xl rounded-3xl" />

                {/* Main card */}
                <div className="relative z-10 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-md overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Graphic Design", tag: "5+ yrs" },
                      { label: "Video Editing", tag: "2+ yrs" },
                      { label: "Brand Strategy", tag: "Expert" },
                      { label: "Social Content", tag: "Active" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="p-4 rounded-xl bg-white/[0.04] border border-white/8 hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="text-white font-bold text-sm mb-1">{item.label}</div>
                        <div className="text-primary text-xs font-bold uppercase tracking-widest">{item.tag}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse shrink-0" />
                    <p className="text-white/70 text-sm font-medium">
                      Currently accepting new projects — <span className="text-primary font-bold">Let's talk</span>
                    </p>
                  </div>

                  {/* Bottom badges */}
                  <div className="flex gap-3 mt-6 flex-wrap">
                    {["Lahore, PK", "Global Clients", "Fast Delivery"].map((b) => (
                      <span key={b} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-wider">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── TIMELINE ─────────────────────────────────────── */}
        <section className="py-28 border-t border-white/5 relative overflow-hidden">
          <div className="absolute left-0 top-1/4 w-72 h-72 bg-primary/6 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-secondary/6 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <SectionLabel>Our Journey</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9]">
                The <span className="text-gradient">Story</span> So Far
              </h2>
              <p className="mt-5 text-white/50 text-lg">From a solo designer to a full creative powerhouse.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Center line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/30 to-transparent" />

              <div className="space-y-20">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="hidden md:block md:w-1/2" />

                    {/* Dot */}
                    <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-2 w-5 h-5 rounded-full border-4 border-black shadow-[0_0_16px_rgba(0,212,255,0.7)] ${m.color === "primary" ? "bg-primary" : "bg-secondary"}`} />

                    {/* Card */}
                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${i % 2 === 0 ? "md:pl-14" : "md:pr-14"}`}>
                      <div className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-${m.color}/30 transition-all duration-400 overflow-hidden`}>
                        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-${m.color}/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <span className={`text-${m.color} font-black tracking-[0.2em] text-xs uppercase mb-3 block`}>{m.year}</span>
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3">{m.title}</h3>
                        <p className="text-white/55 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── MISSION & VISION ─────────────────────────────── */}
        <section className="py-28 border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <SectionLabel>What We Stand For</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[0.9]">
                Purpose &{" "}
                <span className="text-gradient">Direction</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Target size={40} />,
                  tag: "Mission",
                  title: "Equip Brands to Dominate",
                  text: "To give ambitious brands the visual firepower they need to lead their markets. We want to raise the global standard of creative output from South Asia — one exceptional project at a time. We don't settle. Neither should your brand.",
                  accent: "primary",
                  glow: "hover:shadow-[0_0_60px_rgba(0,212,255,0.08)]",
                  border: "hover:border-primary/30",
                  topLine: "via-primary/50",
                },
                {
                  icon: <Eye size={40} />,
                  tag: "Vision",
                  title: "The World's Go-To Creative Partner",
                  text: "To become the default creative studio for brands worldwide that demand perfection — without the inflated price tags of Western agencies. World-class work. Human pricing. Zero compromise on results.",
                  accent: "secondary",
                  glow: "hover:shadow-[0_0_60px_rgba(139,0,255,0.08)]",
                  border: "hover:border-secondary/30",
                  topLine: "via-secondary/50",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.75, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative p-12 rounded-3xl bg-white/[0.02] border border-white/8 overflow-hidden transition-all duration-500 ${card.border} ${card.glow}`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${card.topLine} to-transparent`} />
                  {/* BG watermark icon */}
                  <div className={`absolute bottom-6 right-8 text-${card.accent}/6 group-hover:text-${card.accent}/12 transition-all duration-500`}>
                    <div className="w-24 h-24">{card.icon}</div>
                  </div>

                  <span className={`inline-block text-xs font-black tracking-[0.25em] uppercase text-${card.accent} mb-4 px-3 py-1 rounded-full bg-${card.accent}/10 border border-${card.accent}/20`}>
                    {card.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-6 relative z-10 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed relative z-10">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VALUES ───────────────────────────────────────── */}
        <section className="py-28 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-secondary/4 pointer-events-none" />
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <SectionLabel>What Drives Us</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[0.9]">
                Our Core <span className="text-gradient">Values</span>
              </h2>
              <p className="mt-5 text-white/50 text-base">
                Not just words on a wall — these are the principles behind every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/8 ${v.border} transition-all duration-400 overflow-hidden hover:-translate-y-1`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className={`relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${v.iconColor} group-hover:scale-110 transition-transform duration-400`}>
                    {v.icon}
                  </div>
                  <h4 className="relative z-10 text-white font-black uppercase tracking-wide text-base mb-3">{v.title}</h4>
                  <p className="relative z-10 text-white/55 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────── */}
        <section className="py-28 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel>Ready to Begin?</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9] max-w-3xl mx-auto mb-6">
                Let's Build Something <span className="text-gradient">Unforgettable.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-12">
                Your brand deserves creative work that commands attention. Let's make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 hover:shadow-[0_0_50px_rgba(0,212,255,0.35)] transition-all duration-300"
                >
                  Start a Project <ArrowRight size={18} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
