import { storyblokEditable, type SbBlokData } from "@storyblok/react";

// Define the type for your button block data
interface ButtonBlok extends SbBlokData {
  text: string;
  link: {
    cached_url: string;
  };
}

const Button = ({ blok }: { blok: ButtonBlok }) => {
  return (
    <a
      href={blok.link?.cached_url}
      {...storyblokEditable(blok)}
      // ✅ All the styling classes are applied here
      className="
        inline-block
        bg-white
        text-[#004E94] 
        font-bold 
        py-2 
        px-6 
        border 
        border-[#004E94] 
        rounded-sm 
        transition-colors
        hover:bg-gray-200
      "
    >
      {blok.text}
    </a>
  );
};

export default Button;