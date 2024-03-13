import Circle from "./Circle"

function Circles ( {count}) {
    
    return ( 
        <div>
            { ( () => {
                let rows = [];
                for (let i = 0; i < count; i++) 
                    rows.push( <Circle title = "some text"  bgColor = "hotpink" fgColor = "rgb(30, 20, 1)" />  );
                
                return rows;
            }) () }
        </div>
    );
}
 
export default Circles;