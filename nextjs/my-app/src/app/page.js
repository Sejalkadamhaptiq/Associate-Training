import { getStoryblokApi,StoryblokStory } from "@storyblok/react/rsc";

const fetchHomePage = async (slug) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: "draft",
  });

  return response.data.story;
};


const HomePage = async (props) => {
    const story = await fetchHomePage();
    return <StoryblokStory story={story}/>;
}

export default HomePage;