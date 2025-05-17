import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div>
            <h1>Page Not Found</h1>
            <p>Sorry we can't load this page</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}
export default NotFound;