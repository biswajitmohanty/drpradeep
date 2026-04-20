"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DOCTOR } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const t = useTranslations("hero");

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
                {t("eyebrow")}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 font-display font-medium text-h1 md:text-[3rem] lg:text-display text-text-primary text-balance"
              >
                {t("headline")}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-body-lg text-text-secondary max-w-xl text-pretty"
              >
                {t("subheadline", {
                  name: DOCTOR.name,
                  years: DOCTOR.experienceYears,
                })}
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link href="/book" className="btn-primary">
                  {t("primaryCta")}
                  <ArrowRight size={18} />
                </Link>
                <Link href="/robotic-surgery" className="btn-secondary">
                  <Play size={16} />
                  {t("secondaryCta")}
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-caption text-text-muted"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  {t("acceptingPatients")}
                </span>
                <span>{t("singleLocation")}</span>
                <span>{t("languages")}</span>
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
                src="/images/doctor/robotic-smith-nephew.jpg"
                alt={`${DOCTOR.name} with the Smith+Nephew robotic surgery platform`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
