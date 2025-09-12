import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORY_TOKEN,  // Get this from Storyblok space settings
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

export default Storyblok
