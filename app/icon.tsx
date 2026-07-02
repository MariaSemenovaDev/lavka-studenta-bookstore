import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          background:
            "linear-gradient(180deg, rgba(250,242,230,1) 0%, rgba(232,214,190,1) 100%)",
          color: "#9b5f3d",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        📚
      </div>
    ),
    size,
  );
}
