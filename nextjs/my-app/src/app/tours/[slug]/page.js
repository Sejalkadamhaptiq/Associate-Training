import { getStoryblokApi, StoryblokServerComponent } from "@storyblok/react/rsc";

const fetchTourPage = async (slug) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: "draft",
  });

  return response.data.story;
};

export default async function TourPage({ params }) {
//   const awaitedParams = await params;   
//   const slug = awaitedParams.slug;

  const story = await fetchTourPage(params.slug);

  if (!story ) {
    return <div>❌ Story not found</div>;
  }

  return <StoryblokServerComponent blok={story.content} />;
}
          