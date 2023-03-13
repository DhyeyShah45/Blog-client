import { Link } from "react-router-dom";

const BlogList = ({blogs,title,handleDelete}) => {
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog)=>(
          <div className="blog-preview" key={blog._id}>
            {/* {console.log(blog._id)} */}
            <Link to={`/blogs/${blog._id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.author}</p>
            </Link>
          </div>
        )
        )}
    </div>
   );
}
 
export default BlogList;