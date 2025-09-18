"use client";

import {
  storyblokEditable,
  StoryblokComponent,
  type SbBlokData,
} from "@storyblok/react";

// Define a type for Storyblok's Asset object
interface Asset {
  filename: string;
  alt: string;
}

// Define the type for your Bannerpage block
interface SecondaryBannerpageBlok extends SbBlokData {
  headline: string;
  description: string;
  background_desktop: Asset;
  background_tablet: Asset;
  background_mobile: Asset;
  button_blok: SbBlokData[];
}

const SecondaryBannerpage = ({ blok }: { blok: SecondaryBannerpageBlok }) => {
  return (
    // The main container is relative to position its children.
    // It has a max-width, is centered, and overflow-hidden to contain the images.
    <section
      className="relative mx-auto max-w-[1349px] overflow-hidden"
      {...storyblokEditable(blok)}
    >
      {/* 1. Background Images Layer */}
      {/* This div holds the absolutely positioned, responsive images. */}
      {/* The `inset-0` class makes it fill the parent container. */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image: Visible by default, hidden from 'md' breakpoint up. */}
        <img
          src={blok.background_mobile?.filename}
          alt={blok.background_mobile?.alt || "Background"}
          className="block h-full w-full object-cover md:hidden"
        />
        {/* Tablet Image: Hidden by default, visible from 'md' to 'lg' breakpoints. */}
        <img
          src={blok.background_tablet?.filename}
          alt={blok.background_tablet?.alt || "Background"}
          className="hidden h-full w-full object-cover md:block lg:hidden"
        />
        {/* Desktop Image: Hidden by default, visible from 'lg' breakpoint up. */}
        <img
          src={blok.background_desktop?.filename}
          alt={blok.background_desktop?.alt || "Background"}
          className="hidden h-full w-full object-cover lg:block"
        />
      </div>

      {/* 2. Blue Overlay Layer */}
      {/* This sits on top of the images. `bg-blue-800/60` provides the color and 60% opacity. */}
    <div className="absolute inset-0 z-10 bg-[#0D2C6B]/80"></div>
      {/* 3. Content Layer */}
      {/* The content is relative with a higher z-index (z-20) to appear above the overlay. */}
      {/* Flexbox is used to center the content vertically and horizontally. */}
  {/* 3. Content Layer */}
<div className="relative z-20 flex min-h-[400px] flex-col items-center justify-center p-8 text-center text-white">
  
  {/* Headline: Added mb-4 for 16px bottom margin */}
 <span className="font-titillium font-bold text-[40px] leading-[48px] mb-4 text-center text-white">
  {blok.headline}
</span>

  {/* Description: Added mb-6 for 24px bottom margin */}
 <p className="font-arial font-normal text-[18px] mb-6 leading-[24px] text-center text-white">
 {blok.description}
</p>
  
  {/* Button Container: Removed top margin, as the paragraph now controls the spacing */}
  <div>
    {blok.button_blok?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>

</div>
    </section>
  );
};

export default SecondaryBannerpage;