// "The Execution Desk" — deep blue-ink console with phosphor amber.
// `fill` is reserved for success/filled-order semantics, never decoration.
export const darkTheme = {
  bg: "#0B0E16",
  bg_raised: "#0F1320",
  panel: "#111624",
  line: "#222941",
  line_soft: "#1A2033",
  ink: "#E9ECF5",
  dim: "#8A91A8",
  faint: "#5A6079",
  amber: "#F5B453",
  amber_deep: "#D98E2B",
  fill: "#57D9A3",
  bid: "#E4604E",
  mono: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace",
  sans: "'IBM Plex Sans', -apple-system, 'Segoe UI', sans-serif",
  display: "'Bricolage Grotesque', 'IBM Plex Sans', sans-serif",
};

export type AppTheme = typeof darkTheme;
