import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#12100f", bgalt: "#171412", deep: "#0c0b0a", panel: "#1e1a18",
        ink: "#f2ece4", muted: "#a79f97", faint: "#8a817a",
        accent: "#d64f61", accentsoft: "#e0687a", line: "rgba(242,236,228,0.10)"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      maxWidth: { wrap: "1300px" },
      transitionTimingFunction: { editorial: "cubic-bezier(.2,.6,.32,1)" }
    }
  },
  plugins: []
} satisfies Config;
