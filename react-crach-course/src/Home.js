import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    // every time the page re-render (like chage of state), the useEffect hook will call the call back function
    // if you change the state, you need a cleaner function, in a return statement
    // second argument after the callback is a dependency array: it's optional, but if you specify a state inside the array, the useEffect() will only execute if the state changes。 an empty array [] means only use it on the first render

    // custom useFetch hook
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;