import { ImageResponse } from "next/og";
import { DOCTOR, SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${DOCTOR.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0F766E 0%, #115E59 60%, #0F766E 100%)",
          color: "#ffffff",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          <span
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: "#C8954A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0F766E",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            PS
          </span>
          drpradeepsahoo.com
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              maxWidth: 900,
              display: "flex",
            }}
          >
            {DOCTOR.name}
          </div>
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.3,
              opacity: 0.9,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {SITE.tagline}
          </div>
          <div
            style={{
              marginTop: 18,
              display: "flex",
              gap: 22,
              fontSize: 24,
              opacity: 0.85,
            }}
          >
            <span
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Apollo Chennai · NHS Fellowship
            </span>
            <span
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                background: "rgba(200,149,74,0.9)",
                color: "#ffffff",
              }}
            >
              11+ years of experience
            </span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
