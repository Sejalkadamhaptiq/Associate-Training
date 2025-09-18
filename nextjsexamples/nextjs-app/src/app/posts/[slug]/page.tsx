import { notFound } from 'next/navigation';

async function getPost(slug: string) {

  const res = await fetch(`https://api.example.com/posts/${slug}`, {
    // This is the magic part!
    next: {
      revalidate: 60, // Revalidate this page every 60 seconds
    },
  });
 console.log(`Sample ${new Date().toLocaleTimeString()}
  
  `);
  if (!res.ok) {
    return undefined;
  }   
  return res.json();
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }     

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}