"use client";

export default function ScallopDivider() {
  return (
    <div className="relative w-full overflow-hidden bg-cream" style={{ marginTop: "-1px" }}>
      <svg
        viewBox="0 0 1700 135"
        className="w-[200%] animate-divider-drift"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: "clamp(60px, 8vw, 100px)" }}
      >
        <path
          d="M0,67.5 C42.5,0 85,135 127.5,67.5 C170,0 212.5,135 255,67.5 C297.5,0 340,135 382.5,67.5 C425,0 467.5,135 510,67.5 C552.5,0 595,135 637.5,67.5 C680,0 722.5,135 765,67.5 C807.5,0 850,135 892.5,67.5 C935,0 977.5,135 1020,67.5 C1062.5,0 1105,135 1147.5,67.5 C1190,0 1232.5,135 1275,67.5 C1317.5,0 1360,135 1402.5,67.5 C1445,0 1487.5,135 1530,67.5 C1572.5,0 1615,135 1657.5,67.5 C1700,0 1742.5,135 1785,67.5 L1785,135 L0,135 Z"
          fill="#2b190f"
        />
      </svg>
    </div>
  );
}
