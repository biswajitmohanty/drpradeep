"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { CredentialBadge } from "@/components/shared/credential-badge";
import { DOCTOR } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div
        className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary-soft/40 via-primary-soft/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-page relative pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
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
                className="mt-5 font-display font-medium text-h1 md:text-[3rem] lg:text-display text-text-primary text-balance"
              >
                Restoring movement with robotic precision.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-body-lg text-text-secondary max-w-xl text-pretty"
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
                  <ArrowRight size={18} />
                </Link>
                <Link href="/robotic-surgery" className="btn-secondary">
                  <Play size={16} />
                  Watch How Robotic Surgery Works
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-caption text-text-muted"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  Accepting new patients
                </span>
                <span>Two clinic locations in Bhubaneswar</span>
                <span>Languages: English, Hindi, Odia</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-surface-elevated to-accent-soft/50 border border-border shadow-lg"
            >
              <Image
                src="/images/doctor/portrait.svg"
                alt={`Portrait of ${DOCTOR.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute -left-4 lg:-left-8 bottom-12 max-w-[260px]"
            >
              <CredentialBadge
                qualification="NHS Fellowship"
                institution="Robotic Joint Replacement"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute -right-4 lg:-right-6 top-16 max-w-[260px]"
            >
              <CredentialBadge
                qualification="DNB Orthopaedics"
                institution="Apollo Main Hospital, Chennai"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
