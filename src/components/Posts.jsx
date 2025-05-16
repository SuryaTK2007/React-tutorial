import { useQuery } from "@tanstack/react-query";
function Posts(){
    const {data, isLoading, error}=useQuery({
        queryKey:['posts'],
        queryFn: ()=>
            fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()),
    });
    if(isLoading) return <p>Loading..</p>
    if(error) return <p>Error: {error.message}</p>
    return (
       <div>
          <h2>Blog Posts</h2>
          <ul>
            {data.slice(0,5).map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}
          </ul>
       </div>
    );
}
export default Posts;