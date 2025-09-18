"use client";

import { StoryblokComponent, type ISbStoryData } from "@storyblok/react"; // Use the correct type name

const StoryblokStory = ({ story }: { story: ISbStoryData }) => (
  <StoryblokComponent blok={story.content} />
);

export default StoryblokStory;