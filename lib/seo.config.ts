import type { Metadata } from "next";

const siteMetadata: Metadata = {
  title: {
    default: "Dialog IX",
    template: "%s | Dialog IX",
  },
  description: "Dialog IX - AI-native customer dialogue, on autopilot.",
  openGraph: {
    title: "Dialog IX",
    description: "Dialog IX - AI-native customer dialogue, on autopilot.",
    type: "website",
    siteName: "Dialog IX",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dialogix",
  },
};

export default siteMetadata;
