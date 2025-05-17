import { useQuery } from "@tanstack/react-query";
import { useTheme } from "./ThemeContext";
function Posts(){
    const {theme}=useTheme();
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
                <li key={post.id} className={theme}>{post.title}</li>
            ))}
          </ul>
       </div>
    );
}
export default Posts;