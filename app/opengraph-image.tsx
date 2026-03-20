import { ImageResponse } from "next/og";

export const alt =
  "Nazia8Promo.kz — академия продаж, внедрение и S:O:S CRM";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #0B132B 0%, #101A39 52%, #153057 100%)",
          color: "white",
          padding: "52px",
          position: "relative",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(212,163,115,0.20), transparent 24%), radial-gradient(circle at bottom left, rgba(29,78,216,0.20), transparent 24%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 34,
            left: 52,
            fontSize: 24,
            letterSpacing: "0.18em",
            color: "#D4A373",
          }}
        >
          NAZIA 8 PROMO
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div style={{ marginTop: 62, display: "flex", gap: 14 }}>
            <div
              style={{
                border: "1px solid rgba(212,163,115,0.4)",
                background: "rgba(212,163,115,0.12)",
                color: "#D4A373",
                borderRadius: 999,
                padding: "10px 18px",
                fontSize: 22,
              }}
            >
              Academy + Implementation
            </div>
            <div
              style={{
                border: "1px solid rgba(29,78,216,0.35)",
                background: "rgba(29,78,216,0.12)",
                color: "#93C5FD",
                borderRadius: 999,
                padding: "10px 18px",
                fontSize: 22,
              }}
            >
              S:O:S CRM
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                maxWidth: 980,
                fontSize: 68,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              Премиальная система продаж для МОП, РОП и компаний
            </div>

            <div
              style={{
                maxWidth: 900,
                fontSize: 28,
                lineHeight: 1.5,
                color: "#CBD5E1",
              }}
            >
              Обучение продажам, корпоративное внедрение и рабочая CRM-среда
              для Казахстана и СНГ.
            </div>
          </div>

          <div style={{ display: "flex", gap: 18, fontSize: 24 }}>
            <div
              style={{
                borderRadius: 18,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.10)",
                padding: "14px 18px",
              }}
            >
              WhatsApp-first
            </div>
            <div
              style={{
                borderRadius: 18,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.10)",
                padding: "14px 18px",
              }}
            >
              Kanban + ownership
            </div>
            <div
              style={{
                borderRadius: 18,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.10)",
                padding: "14px 18px",
              }}
            >
              AI-assisted layer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
