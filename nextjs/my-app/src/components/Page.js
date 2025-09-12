import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const Page = ({ blok }) => {
    console.log(blok);
  return (
    <main>

      {blok.blocks?.map((childBlok) => (
        <StoryblokServerComponent blok={childBlok} key={childBlok._uid} />
      ))}
    </main>
  );
};
