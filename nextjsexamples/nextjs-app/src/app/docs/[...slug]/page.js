// const DocPage = ({ params }) => {
//   return (
//     <div>
//       <h1>Documentation Path:</h1>
//       <pre>{JSON.stringify(params.slug)}</pre>
//     </div>
//   );
// };

// export default DocPage;
// // app/posts/[id]/page.js

export default function DocPage({ params }) {
  return (
    <div>
      <h1>Post ID: {params.slug}</h1>
    </div>
  );
  
}
