"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="container-page relative pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              <motion.span
                variants={fadeUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="eyebrow inline-flex items-center gap-2"
              >
                <Sparkles size={14} />
                Robotic-assisted joint replacement
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 font-display font-medium text-h1 md:text-[3rem] lg:text-display leading-[1.05] text-text-primary text-balance"
              >
                Restoring movement with robotic precision.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-body-lg text-text-secondary max-w-xl text-pretty leading-relaxed"
              >
                {DOCTOR.name} — Robotic Knee &amp; Hip Replacement Surgeon in
                Bhubaneswar. {DOCTOR.experienceYears}+ years of experience.
                Trained at Apollo Chennai and the NHS, UK.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link href="/book" className="btn-primary">
                  Book a Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link href="/robotic-surgery" className="btn-secondary">
                  <Play size={16} />
                  Watch How Robotic Surgery Works
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-caption text-text-muted"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  Accepting new patients
                </span>
                <span>Elite Ortho Care, Chandrasekharpur</span>
                <span>English · Hindi · Odia</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-[380px] md:min-h-[520px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[360px] w-[360px] md:h-[480px] md:w-[480px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-brand-yellow"
              />

              <Image
                src="/images/doctor/robotic-smith-nephew.jpg"
                alt={DOCTOR.name}
                fill
                priority
                sizes="(min-width: 768px) 480px, 360px"
                className="relative z-10 rounded-full object-cover object-top drop-shadow-[0_20px_40px_rgba(124,58,237,0.25)]"
              />

              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute z-20 h-16 w-16 md:h-20 md:w-20 rounded-full bg-brand-purple shadow-lg"
                style={{ top: "-4%", right: "4%" }}
              />
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="absolute z-20 h-5 w-5 md:h-6 md:w-6 rounded-full bg-brand-purple"
                style={{ bottom: "6%", left: "-2%" }}
              />
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute z-20 h-4 w-4 rounded-full bg-brand-yellow-soft border-2 border-brand-purple"
                style={{ top: "40%", left: "-5%" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
