import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import port1 from "@/assets/portfolio-1.png";
import port2 from "@/assets/portfolio-2.png";
import port3 from "@/assets/portfolio-3.png";
import port4 from "@/assets/portfolio-4.png";
import port5 from "@/assets/portfolio-5.png";
import port6 from "@/assets/portfolio-6.png";

type Category = "All" | "Design" | "Video" | "Social";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5">
      {children}
    </span>
  );
}

const projects = [
  { id: 1, title: "Neon Cyber Brand Identity", category: "Design" as Category, img: port1, desc: "Full brand system including logo, typography, and digital assets for a tech startup.", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Cinematic Brand Film", category: "Video" as Category, img: port2, desc: "60-second brand film with cinematic color grading and motion typography.", span: "" },
  { id: 3, title: "Abstract Motion Sequence", category: "Video" as Category, img: port3, desc: "3D motion graphics intro package for a creative YouTube channel.", span: "" },
  { id: 4, title: "Tech Corp Social Kit", category: "Social" as Category, img: port4, desc: "Complete social media kit: post templates, stories, highlights, and ad creatives.", span: "" },
  { id: 5, title: "Film Studio Visual Identity", category: "Design" as Category, img: port5, desc: "Premium brand identity system for an independent film production house.", span: "md:col-span-2" },
  { id: 6, title: "Luxury E-commerce Brand", category: "Design" as Category, img: port6, desc: "Elegant visual system for a luxury fashion brand entering the online market.", span: "" },
];

const categories: Category[] = ["All", "Design", "Video", "Social"];

export default function Portfolio() {
  const [filter, setFilter] = useState<Category>("All");
  const [hovered, setHovered] = useState<number | null>(null);
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <PageTransition>
      <SEO
        title="Portfolio - Our Best Graphic Design & Video Editing Work | Aqnity Market"
        description="Explore Aqnity Market's portfolio of exceptional graphic design and video editing projects. See our creative work in branding, motion graphics, and digital content."
        keywords="portfolio, graphic design portfolio, video editing portfolio, creative work, branding projects, motion graphics, design showcase"
        url="/portfolio"
      />
      <div className="pt-24">

        <section className="container mx-auto px-6 md:px-12 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <SectionLabel>Our Work</SectionLabel>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.88]"
              >
                The <span className="text-gradient">Portfolio</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-6 text-white/55 text-lg leading-relaxed"
              >
                Curated work that represents our obsession with quality. Every project is a story of transformation.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  data-testid={`filter-${cat.toLowerCase()}`}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                    filter === cat
                      ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : "bg-transparent text-white/55 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[300px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-2xl bg-white/5 border border-white/8 cursor-pointer ${project.span}`}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                  data-testid={`card-project-${project.id}`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                  />
                  <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest text-white/80">
                    {project.category}
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ opacity: hovered === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-8"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: hovered === project.id ? 0 : 20, opacity: hovered === project.id ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6">{project.desc}</p>
                      <span className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-1">
                        View Project <ExternalLink size={12} />
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Like what you <span className="text-gradient">see?</span>
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">Let's create your next big project together.</p>
            <Link href="/contact" data-testid="link-portfolio-contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all">
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
