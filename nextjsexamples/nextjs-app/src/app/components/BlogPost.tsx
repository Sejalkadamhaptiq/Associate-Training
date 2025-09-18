
    import { JSX } from "react";

type Post = {
  title: string;
  content: string;
};

async function getPostData(): Promise<Post> {
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    title: "Understanding Server Components",
    content: "They are rendered on the server, resulting in faster page loads and a smaller client-side JavaScript bundle. This is the future of web development!",
  };
}

export default async function BlogPost(): Promise<JSX.Element> {
  
  const post = await getPostData();

  return (
    <article style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <p><small>Rendered on the server at: {new Date().toLocaleTimeString()}</small></p>
    </article>
  );
}