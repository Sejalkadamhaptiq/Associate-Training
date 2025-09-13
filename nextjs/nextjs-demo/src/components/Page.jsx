import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export const Page = (params) => {
  return (
    <main {...storyblokEditable(params.blok)}>
      {params.blok.blocks.map((blok) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};