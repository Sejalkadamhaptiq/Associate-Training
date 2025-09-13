"use client";


import { getStoryblokApi } from "@/storyblok";

export const StoryblokProvider = ({ children }) => {
  getStoryblokApi();
  return children;
};