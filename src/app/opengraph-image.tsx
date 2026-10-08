import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "AMREN Fresh: wholesale fresh fruits and vegetables supplier in the UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const artwork = await readFile(join(process.cwd(), "public/images/og/og-hero-artwork.jpg"));
  const artworkSrc = `data:image/jpeg;base64,${artwork.toString("base64")}`;
  const display = await readFile(join(process.cwd(), "src/assets/fonts/Archivo-ExtraBold-Condensed.ttf"));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", backgroundColor: "#0A2C18" }}>
        <img
          src={artworkSrc}
          alt=""
          width={760}
          height={630}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
        <div
          style={{
            position: "absolute",
            left: 440,
            top: 0,
            width: 200,
            height: 630,
            display: "flex",
            backgroundImage: "linear-gradient(to right, #0A2C18, rgba(10,44,24,0))",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 70px",
            width: 620,
            color: "#F7F5EF",
          }}
        >
          <div style={{ display: "flex", fontFamily: "Archivo Condensed", fontSize: 32, letterSpacing: 1, color: "#C8F169" }}>
            AMREN FRESH
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 24,
              fontFamily: "Archivo Condensed",
              fontSize: 132,
              lineHeight: 0.86,
            }}
          >
            <span>FRESH</span>
            <span>BY THE</span>
            <span style={{ color: "#C8F169" }}>BOX.</span>
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 26, lineHeight: 1.35, color: "rgba(247,245,239,0.8)" }}>
            Wholesale fruits, vegetables and supplies for UAE businesses
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 22, color: "#C8F169" }}>fresh.amren.ae</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Archivo Condensed", data: display, weight: 800, style: "normal" }],
    },
  );
}
