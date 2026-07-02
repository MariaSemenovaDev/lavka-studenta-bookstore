import { ImageResponse } from "next/og";

import { CITY, HOME_METADATA, STORE_NAME } from "@/lib/constants";

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
          padding: "56px",
          background:
            "linear-gradient(180deg, #fbf6ef 0%, #f2e5d3 100%)",
          color: "#201914",
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 18%, rgba(155,95,61,0.16), transparent 28%), radial-gradient(circle at 80% 16%, rgba(139,149,117,0.14), transparent 26%), repeating-linear-gradient(135deg, rgba(255,255,255,0.14) 0, rgba(255,255,255,0.14) 2px, transparent 2px, transparent 18px)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(125,95,72,0.18)",
            background: "rgba(251,247,241,0.84)",
            padding: "44px",
            boxShadow: "0 22px 60px rgba(58,36,22,0.10)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#9b5f3d",
                color: "#fff8f2",
                fontSize: "34px",
              }}
            >
              📚
            </div>
            <div style={{ fontSize: "24px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6f6258" }}>
              {CITY}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "820px" }}>
            <div style={{ fontSize: "76px", lineHeight: 0.94, fontWeight: 700 }}>{STORE_NAME}</div>
            <div style={{ fontSize: "34px", lineHeight: 1.3, color: "#4f3c31", fontFamily: "sans-serif" }}>
              {HOME_METADATA.description}
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            {["Книги", "Учебники", "Развивающие игры"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  background: "#ead7c0",
                  color: "#4f3c31",
                  fontSize: "22px",
                  fontFamily: "sans-serif",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
