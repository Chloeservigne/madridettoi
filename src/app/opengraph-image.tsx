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
          width: 1200,
          height: 630,
          backgroundColor: "#2C1810",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Bande terracotta en haut */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#C8614A",
          }}
        />

        {/* Badge URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#C8614A",
            }}
          />
          <span
            style={{
              color: "#C8614A",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            madrid-et-toi.com
          </span>
        </div>

        {/* Titre principal */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#F5ECD7",
            lineHeight: 1.0,
            marginBottom: 28,
          }}
        >
          Madrid & Toi
        </div>

        {/* Sous-titre */}
        <div
          style={{
            fontSize: 32,
            color: "#EDE0C8",
            lineHeight: 1.4,
            maxWidth: 750,
            marginBottom: 52,
          }}
        >
          S&apos;installer à Madrid, on t&apos;accompagne
        </div>

        {/* Tags thématiques */}
        <div style={{ display: "flex", gap: 14 }}>
          {["NIE & Papiers", "Logement", "Travailler", "Vivre à Madrid"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  borderRadius: 9999,
                  backgroundColor: "rgba(200, 97, 74, 0.2)",
                  border: "1px solid rgba(200, 97, 74, 0.45)",
                  color: "#F5ECD7",
                  fontSize: 18,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bande basse */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: "#C8614A",
            opacity: 0.35,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
