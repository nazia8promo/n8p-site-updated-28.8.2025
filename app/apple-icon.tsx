import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B132B",
          borderRadius: 36,
          position: "relative",
          fontSize: 72,
          fontWeight: 700,
          color: "#F8FAFC",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 14,
            borderRadius: 28,
            border: "6px solid #D4A373",
          }}
        />
        N8
      </div>
    ),
    {
      ...size,
    }
  );
}
