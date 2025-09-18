"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// 1. Import your Page and SecondaryBannerpage components
import Page from "./Page";
import SecondaryBannerpage from "./SecondaryBannerpage";
import Button from "./Button";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    // 2. Add the mapping for your banner component here
    secondary_bannerpage: SecondaryBannerpage,
    button:Button
  },
});

export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
}