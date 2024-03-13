

const Circle = ( {title , bgColor , fgColor } ) => {
    return ( 
        <div className="mycircle" style={
            {backgroundColor : bgColor , color  : fgColor}
        }>
           {title}
        </div>


     );
}
 
export default Circle;