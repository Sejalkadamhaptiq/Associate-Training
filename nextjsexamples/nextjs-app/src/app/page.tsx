import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";
import StoryblokStory from "./components/StoryblokStory";
import "./lib/storyblok"; // <-- IMPORT THE INITIALIZATION FILE HERE

export default async function Home() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi(); // This will no longer be null

  // storyblokApi is now initialized and this call will succeed
  const params: ISbStoriesParams = {
    version: "draft",
    resolve_relations: "page.secondary_bannerpage",
  };

  return storyblokApi.get(`cdn/stories/home`, params, { cache: "no-store" });
}