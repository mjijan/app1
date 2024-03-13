import { useState , useEffect } from "react";

const BlogList = ( { title } )   => {
    /*
        const blogs = props.blogs;
        const title = props.title;
    */
    const [blogs , setBlogs] = useState([
        {title : 'title 1' , body : 'body1' , author : 'mario' , id : 1} , 
        {title : 'title 2' , body : 'body2' , author : 'luigi' , id : 2} , 
        {title : 'title 3' , body : 'body3' , author : 'mario' , id : 3} 
        ]);

    useEffect( () => {
        console.log ("useEffect Ran");
        console.log(blogs);
    }  );

   const HandelDelete = (id) => {
        const newBlogs = blogs.filter ( blog => blog.id !== id);
        setBlogs(newBlogs);
        //blogs = newBlogs;

        /*console.log ("Blogs " );
        console.log ( blogs);

        console.log ("New Blogs " );
        console.log ( newBlogs);*/
   }
    return (
        <div className="home2" >
            <h1> { title } </h1>
            { blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> { blog.title } </h2>
                    <p>Written by : { blog.author } </p>
                    <button onClick={ () => HandelDelete (blog.id) }>Delete Blog</button>
                </div>
            )) }
        </div>
    );
}

export default BlogList;