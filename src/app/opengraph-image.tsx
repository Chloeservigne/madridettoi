import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Madrid & Toi — S'installer à Madrid, on t'accompagne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5ECD7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Decorative top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#C8614A",
          }}
        />

        <div style={{ fontSize: 72, marginBottom: 32 }}>☀️</div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#2C1810",
            marginBottom: 24,
            textAlign: "center",
            letterSpacing: "-1px",
          }}
        >
          Madrid & Toi
        </div>

        <div
          style={{
            fontSize: 36,
            color: "#C8614A",
            textAlign: "center",
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          S&apos;installer à Madrid, on t&apos;accompagne
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            fontSize: 22,
            color: "#5a3e35",
            opacity: 0.5,
          }}
        >
          madrid-et-toi.com
        </div>
      </div>
    ),
    { ...size }
  );
}
