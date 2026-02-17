import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Goud&Good - Comparatifs Tech au Maroc";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #064e3b 50%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Logo / Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
            }}
          >
            ✓
          </div>
          <span
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Goud&Good
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "36px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Comparatifs et Guides d'Achat Tech au Maroc
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "50px",
          }}
        >
          {["📱 Smartphones", "💻 PC Portables", "🎧 Accessoires"].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "16px 32px",
                borderRadius: "50px",
                color: "white",
                fontSize: "24px",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "#64748b",
            fontSize: "20px",
          }}
        >
          <span>🇲🇦 Prix en DH</span>
          <span>•</span>
          <span>Jumia • Amazon • AliExpress</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
