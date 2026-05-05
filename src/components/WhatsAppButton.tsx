import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923001804650"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="link-whatsapp-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-[0_8px_32px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.65)] transition-shadow duration-300"
    >
      <MessageCircle size={20} className="shrink-0" />
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
