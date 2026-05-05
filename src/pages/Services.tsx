import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { PenTool, MonitorPlay, Share2, Palette, Video, Layers, Film, Smartphone, ArrowRight, Check } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5">
      {children}
    </span>
  );
}

const services = [
  {
    id: "graphic-design",
    icon: <PenTool size={36} />,
    title: "Graphic Design",
    subtitle: "Brand Identities & Visual Systems",
    desc: "We don't make pretty pictures — we build strategic visual assets that communicate authority, trust, and personality. From ground-up identity systems to high-converting marketing materials, every pixel is placed with lethal intent.",
    deliverables: [
      "Logo & Full Brand Identity",
      "Business Cards & Stationery",
      "Social Media Graphics",
      "Poster & Banner Design",
      "Brochures & Flyers",
      "UI/UX Mockups",
    ],
    accentFrom: "from-primary",
    accentColor: "text-primary",
    borderHover: "hover:border-primary/40 hover:shadow-[0_0_60px_rgba(0,212,255,0.08)]",
    icons: [<Palette key="p" size={18} />, <Layers key="l" size={18} />, <Smartphone key="s" size={18} />],
  },
  {
    id: "video-editing",
    icon: <MonitorPlay size={36} />,
    title: "Video Editing",
    subtitle: "Cinematic Cuts & Motion Design",
    desc: "Raw footage is just potential. We craft it into kinetic, engaging stories. With cinematic color grading, precise audio design, and dynamic motion graphics, your videos demand attention from the very first frame.",
    deliverables: [
      "Commercial & Brand Videos",
      "YouTube & Long-form Edits",
      "Color Grading & Correction",
      "Motion Graphics & Titles",
      "Audio Design & Mixing",
      "Social Cuts & Teasers",
    ],
    accentFrom: "from-secondary",
    accentColor: "text-secondary",
    borderHover: "hover:border-secondary/40 hover:shadow-[0_0_60px_rgba(139,0,255,0.08)]",
    icons: [<Video key="v" size={18} />, <Film key="f" size={18} />, <Palette key="p2" size={18} />],
  },
  {
    id: "social-media",
    icon: <Share2 size={36} />,
    title: "Social Media Content",
    subtitle: "High-Retention Scroll-Stopping Content",
    desc: "In the attention economy, scrolling is the enemy. We engineer social content designed to break patterns, stop thumbs, and maximize watch time. Fast-paced, visually aggressive, and algorithmically optimized.",
    deliverables: [
      "Instagram Reels & TikToks",
      "Carousel Post Designs",
      "YouTube Thumbnails",
      "Story & Highlight Covers",
      "Content Calendar Strategy",
      "Ad Creatives",
    ],
    accentFrom: "from-primary",
    accentColor: "text-primary",
    borderHover: "hover:border-primary/40 hover:shadow-[0_0_60px_rgba(0,212,255,0.08)]",
    icons: [<Smartphone key="sm" size={18} />, <Layers key="l2" size={18} />, <PenTool key="pt" size={18} />],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We dig deep into your brand, goals, and audience before touching any tool." },
  { step: "02", title: "Concept", desc: "We develop creative directions and present options for your feedback." },
  { step: "03", title: "Execution", desc: "Full production with obsessive attention to craft and detail." },
  { step: "04", title: "Delivery", desc: "Polished final files, on time, with revision rounds included." },
];

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="Our Services - Graphic Design, Video Editing & Digital Marketing | Aqnity Market"
        description="Explore Aqnity Market's comprehensive creative services: professional graphic design, video editing, branding, motion graphics, and digital marketing solutions."
        keywords="graphic design services, video editing services, logo design, branding services, motion graphics, digital marketing, creative services"
        url="/services"
      />
      <div className="pt-24">

        <section className="container mx-auto px-6 md:px-12 py-20 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>What We Offer</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8 leading-[0.88]"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            We operate at the intersection of stunning aesthetics and sharp strategy. Every service is designed to make your brand impossible to ignore.
          </motion.p>
        </section>

        <section className="container mx-auto px-6 md:px-12 pb-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col p-10 rounded-3xl bg-white/[0.02] border border-white/8 transition-all duration-500 ${service.borderHover} hover:-translate-y-2`}
                data-testid={`card-service-${service.id}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${service.accentFrom}/60 to-transparent`} />
                <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 ${service.accentColor} group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <span className="text-white/40 font-bold tracking-widest uppercase text-xs mb-3">{service.subtitle}</span>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-5">{service.title}</h2>
                <p className="text-white/55 leading-relaxed text-sm mb-8 flex-1">{service.desc}</p>
                <ul className="space-y-2.5 mb-10">
                  {service.deliverables.map((d, di) => (
                    <li key={di} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check size={14} className={service.accentColor} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  data-testid={`link-book-${service.id}`}
                  className={`inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm ${service.accentColor} hover:text-white transition-colors`}
                >
                  Get a Quote <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-36 border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Our <span className="text-gradient">Process</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-primary/20 transition-all duration-400"
                  data-testid={`card-process-${i}`}
                >
                  <div className="text-5xl font-black text-white/8 mb-4 leading-none">{step.step}</div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 text-white/20">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────── */}
        <section className="py-36 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/4 via-transparent to-secondary/4 pointer-events-none" />
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <SectionLabel>Common Questions</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9]">
                FAQ <span className="text-gradient">Answered</span>
              </h2>
              <p className="mt-5 text-white/50 text-base">
                Got questions? We've got answers. Transparent, honest, and straight to the point.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How much do your services cost?",
                  answer: "All projects are custom quoted based on scope, timeline, and deliverables. We don't have fixed pricing because every brand is different. Get in touch and we'll provide a transparent quote within 2 hours.",
                },
                {
                  question: "How long does a project typically take?",
                  answer: "Timeline depends on the project scope. Logos: 2-3 weeks. Brand identity: 3-4 weeks. Video edits: 1-2 weeks. We always prioritize quality over speed, but we respect deadlines.",
                },
                {
                  question: "Do you offer revisions?",
                  answer: "Yes. Starter packages include 1 round, Pro includes 3 rounds, and Premium includes unlimited revisions. Revisions are free as long as they're within the original scope.",
                },
                {
                  question: "Will I get source files?",
                  answer: "Absolutely. All packages include source files (PSD, AI, Adobe Premiere project files, etc.). You'll own your work completely.",
                },
                {
                  question: "Can you work with our existing brand guidelines?",
                  answer: "100%. We can work within your existing brand guidelines or create new ones. We're flexible and adaptable to your needs.",
                },
                {
                  question: "What's your turnaround time for urgent projects?",
                  answer: "Premium clients get 48-hour turnaround on most deliverables. For urgent one-off projects, contact us directly on WhatsApp — we can often accommodate rush jobs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-primary/30 transition-all duration-400 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                        {item.question}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300 shrink-0 mt-1">
                      <Check size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <p className="text-white/55 text-sm mb-6">
                Didn't find your answer? Let's chat directly.
              </p>
              <a
                href="https://wa.me/923001804650"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 hover:border-primary/40 transition-all"
              >
                Message on WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Ready to get <span className="text-gradient">started?</span>
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your project. We'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" data-testid="link-services-contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all">
                Start a Project <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/923001804650" target="_blank" rel="noopener noreferrer"
                data-testid="link-services-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
