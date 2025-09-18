import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
 import Page from "../components/Page";
import SecondaryBannerpage from "../components/SecondaryBannerpage";
import Button from "../components/Button";
storyblokInit({

  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
   components: {
    page: Page,
    secondary_bannerpage: SecondaryBannerpage,
    button:Button
  },
});