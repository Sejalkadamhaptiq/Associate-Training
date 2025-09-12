import Storyblok from './lib/storyblok';

export default async function Home() {
  const response = await Storyblok.get('cdn/stories', {
    version: 'draft',
    starts_with: 'blogposts/',
    resolve_relations: 'blogpost.Author'
  });

  const stories = response.data.stories;
  console.log(JSON.stringify(stories, null, 2));

  return (
    <div>  
    
      <h1>Blog Posts</h1>

      {stories.map((story) => {
        // Check if Author exists and get its content
        const authorContent = 
          Array.isArray(story.content.Author) && story.content.Author.length > 0
            ? story.content.Author[0].content
            : null;

        return (
          <div key={story.id} style={{ marginBottom: '40px' }}>
            <h2>{story.name}</h2>
            <p>{story.content.expert}</p>

            {/* Featured Image */}
            {story.content.Featured_Image?.filename && (
              <img
                src={story.content.Featured_Image.filename}
                alt={story.content.Featured_Image.alt || 'featured'}
                style={{ width: '300px' }}
              />
            )}

            {/* Author Section */}
            {authorContent && (
              <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                <h3>Author: {authorContent.first_name} {authorContent.last_name}</h3>
                <p>{authorContent.bio}</p>

                {authorContent.Profile_image?.filename && (
                  <img
                    src={authorContent.Profile_image.filename}
                    alt={authorContent.Profile_image.alt || authorContent.first_name}
                    style={{ width: '100px', borderRadius: '50%' }}
                  />
                )}
              </div>
            )}    
          </div>
        );
      })}
    </div>
  );
}
