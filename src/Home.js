
import { useState } from "react";

function Home()
{
    //let name = "mario";
    const [name , setName] = useState("Mario");

const handleClick = () => {
    // name = "Luigi";
    // console.log(name);
    setName("Luigi");

}

    return (
        <div>
            <p>Home page</p>
            <p> { name }</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );

}

export default Home;