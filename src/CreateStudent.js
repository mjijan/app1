import { useState } from "react";

const CreateStudent = () => {

    var api_url = 'https://abis-international.com/react/api/create.php';

    const [name , setName] = useState("some name");
    const [mobile , setMobile] = useState("0989776655");
    const [avg , setAvg] = useState("100");
    const [gender , setGender] = useState("male");

    const handleSubmit = (e) => {
        e.preventDefault();

        const student = {name : name , mobile : mobile , avg : avg , gender : gender};
        console.log(student);

        const requestOptions = {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(student)
        };

        fetch(api_url , requestOptions)
            .then (Response => {if (Response.ok) alert("Created Successfully")} )
            .then (console.log("Done Successfully."))
    }

    return ( 
        <div className="createSTD">
            <form  onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={ name } onChange={(e) => {setName(e.target.value)} } />

                <label>Gender</label>
                <select name="gender" value={ gender } onChange={(e) => {setGender(e.target.value)} } >
                    <option>male</option>
                    <option>female</option>
                </select>

                <label>Avg</label>
                <input type="text" name="avg" value={ avg } onChange={(e) => {setAvg(e.target.value)} } />

                <label>Mobile</label>
                <input type="text" name="mobile" value={ mobile } onChange={(e) => {setMobile(e.target.value)} } />

                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default CreateStudent;