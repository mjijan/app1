import Circle from "./Circle"

function Circles2 ( {count}) {
    
    let rows = [];
    for (let i = 0; i < count; i++) 
        rows.push( <Circle key = {i} title = "some text"  bgColor = "hotpink" fgColor = "rgb(30, 20, 1)" /> );

    return (
        <div key={rows.key}>{rows}</div>
    );
}
 
export default Circles2;