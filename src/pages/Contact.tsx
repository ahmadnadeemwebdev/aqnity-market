import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5">
      {children}
    </span>
  );
}

const contactDetails = [
  { icon: <MapPin size={22} />, label: "HQ Location", value: "Lahore Wapda Town\nLahore, Pakistan", color: "text-primary", border: "hover:border-primary/20" },
  { icon: <Phone size={22} />, label: "Direct Line", value: "03001804650", color: "text-secondary", border: "hover:border-secondary/20", href: "tel:03001804650" },
  { icon: <Mail size={22} />, label: "Email", value: "aliorganito@gmail.com", color: "text-primary", border: "hover:border-primary/20", href: "mailto:aliorganito@gmail.com" },
];

const faqs = [
  {
    q: "How quickly do you respond to enquiries?",
    a: "We respond to all messages within 2–4 hours during business days. For urgent projects, WhatsApp is the fastest way to reach us — we're usually online from 10am to 10pm PKT.",
  },
  {
    q: "What information do you need to start a project?",
    a: "We'll need a brief description of your brand/business, the type of work you need, your target audience, any reference images you love, and your desired timeline. The more detail, the better we can tailor the work.",
  },
  {
    q: "How many revisions do you offer?",
    a: "It depends on the package — Starter includes 1 round, Pro includes 3 rounds, and Premium includes unlimited revisions until you're 100% satisfied. We always aim to nail it in the first round.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. We work with clients across Pakistan, the UAE, UK, USA, and beyond. All communication and file delivery happens remotely — timezone differences are never a problem.",
  },
  {
    q: "What file formats do you deliver?",
    a: "You'll receive all source files (AI, PSD, PR, AE) plus ready-to-use exports (PNG, JPG, SVG, MP4, MOV) — everything you need for print, digital, and social media.",
  },
  {
    q: "Can I see work samples before hiring you?",
    a: "Yes! Check out our Portfolio page for curated work samples. You can also WhatsApp us and we'll share a portfolio relevant to your specific industry and needs.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("_captcha", "false");
    formData.append("_subject", "New contact form request");
    formData.append("_replyto", formData.get("email")?.toString() ?? "");

    const response = await fetch("https://formspree.io/f/xykoejzy", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } else {
      alert("Message send failed. Please try again.");
    }
  }

  return (
    <PageTransition>
      <SEO
        title="Contact Aqnity Market - Get Your Project Quote Today"
        description="Ready to start your creative project? Contact Aqnity Market for professional graphic design and video editing services. Get a free quote and consultation."
        keywords="contact Aqnity Market, get quote, creative consultation, design services inquiry, video editing contact, project quote"
        url="/contact"
      />
      <div className="pt-24">

        <section className="container mx-auto px-6 md:px-12 py-20 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Let's Talk</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6 leading-[0.88]"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/55 text-xl max-w-xl mx-auto"
          >
            Ready to elevate your brand? We respond fast and deliver faster.
          </motion.p>
          <motion.a
            href="https://wa.me/923001804650"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp-main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest text-sm rounded-full shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all"
          >
            <MessageCircle size={20} />
            Chat Directly on WhatsApp
          </motion.a>
        </section>

        <section className="container mx-auto px-6 md:px-12 pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-10"
            >
              <div className="space-y-4">
                {contactDetails.map((d, i) => (
                  <div key={i} className={`flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/8 ${d.border} transition-all duration-400`} data-testid={`contact-detail-${i}`}>
                    <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 ${d.color}`}>
                      {d.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{d.label}</div>
                      {(d as { href?: string }).href ? (
                        <a href={(d as { href?: string }).href} className={`${d.color} font-semibold hover:underline text-sm whitespace-pre-line`}>{d.value}</a>
                      ) : (
                        <p className="text-white/70 text-sm whitespace-pre-line">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27221.733221297592!2d74.25471415!3d31.408169999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017432b1835b%3A0xe396992a5b05891c!2sWapda%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%" height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%) brightness(0.9)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Aqnity Market Location"
                />
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-primary/20 bg-primary/5">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
                <p className="text-white/70 text-sm">We typically reply within <span className="text-primary font-bold">2–4 hours</span> during business days.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3 relative"
            >
              <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-14 overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary/8 rounded-full blur-[80px] pointer-events-none" />
                <h3 className="relative z-10 text-2xl font-black text-white uppercase tracking-tight mb-2">Send Us a Message</h3>
                <p className="relative z-10 text-white/40 text-sm mb-10">Fill in the form and we'll get back to you within 24 hours.</p>
                <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Full Name</label>
                      <input type="text" name="name" placeholder="Enter Name" required data-testid="input-name"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Email</label>
                      <input type="email" name="email" placeholder="Enter Email" required data-testid="input-email"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Service Needed</label>
                    <select name="service" data-testid="select-service"
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all text-sm appearance-none">
                      <option value="" className="bg-black">Select a service...</option>
                      <option value="graphic-design" className="bg-black">Graphic Design</option>
                      <option value="video-editing" className="bg-black">Video Editing</option>
                      <option value="social-media" className="bg-black">Social Media Content</option>
                      <option value="other" className="bg-black">Something else</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Project Details</label>
                    <textarea rows={5} name="message" placeholder="Tell us about your project, goals, and timeline..." required data-testid="input-message"
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none text-sm" />
                  </div>
                  {submitted ? (
                    <div className="w-full py-5 rounded-xl bg-primary/10 border border-primary/30 text-center text-primary font-bold uppercase tracking-widest text-sm">
                      Message Sent! We'll be in touch soon.
                    </div>
                  ) : (
                    <button type="submit" data-testid="button-submit"
                      className="group relative w-full px-8 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,0.25)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-400">
                        Send Message <Send size={16} />
                      </span>
                    </button>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────── */}
        <section className="py-28 border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <SectionLabel>FAQ</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[0.9]">
                  Common <span className="text-gradient">Questions</span>
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      openFaq === i
                        ? "border-primary/30 bg-primary/5"
                        : "border-white/8 bg-white/[0.02] hover:border-white/15"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left"
                      data-testid={`faq-toggle-${i}`}
                    >
                      <span className="font-bold text-white text-sm md:text-base leading-snug">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 ${openFaq === i ? "text-primary" : "text-white/40"}`}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-8 pb-7 text-white/60 text-sm leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center p-8 rounded-2xl border border-white/8 bg-white/[0.02]">
                <p className="text-white/50 text-sm mb-4">Still have questions? We're happy to help.</p>
                <a
                  href="https://wa.me/923001804650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)]"
                >
                  <MessageCircle size={16} />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
