import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

// Use { blok } to directly access the props, which is cleaner.
export const Tour = ({ blok }) => {
  return (
    <main
      {...storyblokEditable(blok)}
      className="container mx-auto px-4 w-full pt-32 pb-16"
    >
      <h1 className="text-3xl md:text-5xl font-bold">{blok.name}</h1>

      {/* Simplified Image component with default dimensions for robustness */}
      {blok.main_image?.filename && (
        <Image
          className="mt-12 w-full h-auto" // Added classes for responsiveness
          src={blok.main_image.filename}
          alt={blok.main_image.alt}
          width={1200} // Set a fixed, large width
          height={800} // Set a fixed height based on a common aspect ratio
          priority={true}
        />
      )}

      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {blok.introduction}
      </p>

      {/* Use the safe and simple rich text renderer instead of dangerouslySetInnerHTML */}
      <div className="prose md:prose-lg mt-16 max-w-none">
        {render(blok.body)}
      </div>
    </main>
  );
};

export default Tour;