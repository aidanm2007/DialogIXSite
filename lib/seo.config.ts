import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | Dialog IX",
  defaultTitle: "Dialog IX",
  description: "Dialog IX — AI-native customer dialogue, on autopilot.",
  openGraph: {
    type: "website",
    siteName: "Dialog IX",
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@dialogix",
  },
};

export default config;

