"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
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
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow-soft px-4 py-1.5 text-caption font-semibold text-[#92400E]"
              >
                <Star size={14} className="fill-brand-yellow text-brand-yellow" strokeWidth={0} />
                NHS Robotic Surgery Fellow
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 font-display font-medium text-h1 md:text-[3.25rem] lg:text-[4rem] leading-[1.05] text-text-primary text-balance"
              >
                Welcome to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 rounded-lg bg-brand-purple-soft px-3 py-0.5 text-brand-purple-dark">
                    {DOCTOR.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-2 h-3"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 14'><path d='M2 9C50 3 100 3 198 9' stroke='%237C3AED' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>\")",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                  />
                </span>
                <br />
                Orthopaedic Surgeon
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 text-body-lg text-text-secondary max-w-xl text-pretty leading-relaxed"
              >
                You came to the right place. Robotic-assisted knee &amp; hip
                replacement with sub-millimeter precision.{" "}
                {DOCTOR.experienceYears}+ years restoring movement to patients
                across Odisha — trained at Apollo Chennai and the NHS, UK.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-7 py-3.5 text-body-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition-all duration-300 ease-smooth hover:bg-brand-purple-dark hover:-translate-y-0.5"
                >
                  Book an Appointment
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/robotic-surgery"
                  className="inline-flex items-center gap-2 rounded-full border border-text-primary px-7 py-3.5 text-body-sm font-semibold text-text-primary transition-colors duration-300 hover:bg-text-primary hover:text-white"
                >
                  Watch Robotic Surgery
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

          <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-[520px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
              className="absolute z-0 h-[380px] w-[380px] md:h-[460px] md:w-[460px] bg-brand-yellow"
              style={{
                borderRadius: "50% 48% 52% 50% / 48% 50% 50% 52%",
              }}
            />
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute z-10 h-20 w-20 rounded-full bg-brand-purple"
              style={{ top: "8%", right: "8%" }}
            />
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="absolute z-10 h-6 w-6 rounded-full bg-brand-purple"
              style={{ bottom: "15%", left: "8%" }}
            />
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="absolute z-10 h-4 w-4 rounded-full bg-brand-yellow-soft border-2 border-brand-purple"
              style={{ top: "35%", left: "5%" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative z-20"
            >
              <Image
                src="/images/doctor/robotic-smith-nephew.jpg"
                alt={`${DOCTOR.name}`}
                width={420}
                height={520}
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="relative z-20 h-[460px] w-[360px] md:h-[520px] md:w-[420px] object-cover object-top drop-shadow-[0_20px_40px_rgba(124,58,237,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
