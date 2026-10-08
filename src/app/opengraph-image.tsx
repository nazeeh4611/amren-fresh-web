import { ImageResponse } from "next/og";

export const alt = "AMREN Fresh | Fresh produce supply across the UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F2EFE6",
        }}
      >
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "9999px", backgroundColor: "#134A2C", display: "flex" }} />
          <div style={{ width: "40px", height: "40px", borderRadius: "9999px", backgroundColor: "#C8F169", display: "flex" }} />
          <div style={{ width: "28px", height: "28px", borderRadius: "9999px", backgroundColor: "#4A8B1F", display: "flex" }} />
        </div>

        <div style={{ display: "flex", marginTop: "48px", fontSize: "72px", fontWeight: 700, color: "#134A2C" }}>
          AMREN FRESH
        </div>

        <div style={{ display: "flex", marginTop: "20px", fontSize: "34px", color: "#16211A" }}>
          Fresh Produce Supply
        </div>
        <div style={{ display: "flex", fontSize: "34px", color: "#16211A" }}>
          Across the UAE
        </div>

        <div style={{ display: "flex", marginTop: "40px", fontSize: "22px", color: "#5D6B5F" }}>
          fresh.amren.ae
        </div>
      </div>
    ),
    { ...size },
  );
}
