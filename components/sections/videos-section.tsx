import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { VideoCard } from "@/components/shared/video-card";
import { Reveal } from "@/components/shared/reveal";

const videos = [
  {
    id: "15ZSxO1QqyU",
    title:
      "How Do You Know You Need Knee Replacement Surgery? #KneePain #KneeReplacement #best #DrPradeepKSahoo",
    date: "Mar 14, 2026",
  },
  {
    id: "Mw74d8QybM4",
    title:
      "#KneeReplacement #RoboticKneeReplacement #KneeArthritis #KneePain #JointReplacement #DrPradeepKSahoo",
    date: "Mar 12, 2026",
  },
  {
    id: "UUY61nkOfYw",
    title:
      "#kneepain #permanentsolution #best #robotics #jointreplacementsurgeon #DrPradeepKSahoo #9855100122",
    date: "Mar 7, 2026",
  },
];

const CHANNEL_URL = "https://www.youtube.com/@Elite_Ortho_Care";

export function VideosSection() {
  return (
    <Section aria-labelledby="videos-heading">
      <Reveal>
        <h2
          id="videos-heading"
          className="text-center font-display text-h2 md:text-h1 font-semibold uppercase text-primary text-balance"
        >
          See our latest videos
        </h2>
      </Reveal>

      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {videos.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.1}>
            <VideoCard {...v} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25} className="mt-10 flex justify-center">
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          More Videos
          <ArrowRight size={18} />
        </a>
      </Reveal>
    </Section>
  );
}
