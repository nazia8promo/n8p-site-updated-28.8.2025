import { ImageResponse } from "next/og";

export const alt =
  "Nazia8Promo.kz — академия продаж, внедрение и S:O:S CRM";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #0B132B 0%, #0F1B3D 52%, #132A4A 100%)",
          color: "white",
          padding: "48px",
          fontFamily: "Inter, Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(212,163,115,0.18), transparent 26%), radial-gradient(circle at bottom left, rgba(29,78,216,0.20), transparent 22%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              color: "#D4A373",
            }}
          >
            NAZIA 8 PROMO
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                maxWidth: 920,
                fontSize: 56,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              Академия продаж, внедрение и S:O:S CRM
            </div>
            <div
              style={{
                maxWidth: 820,
                fontSize: 26,
                lineHeight: 1.45,
                color: "#CBD5E1",
              }}
            >
              Премиальная система продаж для МОП, РОП и компаний
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, fontSize: 22 }}>
            <div
              style={{
                borderRadius: 16,
                background: "rgba(212,163,115,0.12)",
                border: "1px solid rgba(212,163,115,0.24)",
                color: "#D4A373",
                padding: "12px 16px",
              }}
            >
              Kazakhstan & CIS
            </div>
            <div
              style={{
                borderRadius: 16,
                background: "rgba(29,78,216,0.12)",
                border: "1px solid rgba(29,78,216,0.24)",
                color: "#93C5FD",
                padding: "12px 16px",
              }}
            >
              WhatsApp-first workflow
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
