import { globalStyle } from "@vanilla-extract/css";

globalStyle(":root", {
  vars: {
    "--max-width": "1100px",
    "--border-radius": "12px",
    "--font-mono":
      "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
    "--foreground-rgb": "0, 0, 0",
    "--background-start-rgb": "214, 219, 220",
    "--background-end-rgb": "255, 255, 255",
    "--primary-glow":
      "conic-gradient(\n    from 180deg at 50% 50%,\n    #16abff33 0deg,\n    #0885ff33 55deg,\n    #54d6ff33 120deg,\n    #0071ff33 160deg,\n    transparent 360deg\n  )",
    "--secondary-glow":
      "radial-gradient(\n    rgba(255, 255, 255, 1),\n    rgba(255, 255, 255, 0)\n  )",
    "--tile-start-rgb": "239, 245, 249",
    "--tile-end-rgb": "228, 232, 233",
    "--tile-border":
      "conic-gradient(\n    #00000080,\n    #00000040,\n    #00000030,\n    #00000020,\n    #00000010,\n    #00000010,\n    #00000080\n  )",
    "--callout-rgb": "238, 240, 241",
    "--callout-border-rgb": "172, 175, 176",
    "--card-rgb": "180, 185, 188",
    "--card-border-rgb": "131, 134, 135",
  },
});

globalStyle("*", {
  boxSizing: "border-box",
  padding: "0",
  margin: "0",
});

globalStyle("html, body", {
  maxWidth: "100vw",
  overflowX: "hidden",
});

globalStyle("body", {
  color: "rgb(var(--foreground-rgb))",
  background:
    "linear-gradient(\n      to bottom,\n      transparent,\n      rgb(var(--background-end-rgb))\n    )\n    rgb(var(--background-start-rgb))",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
