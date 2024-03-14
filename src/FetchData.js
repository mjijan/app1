
import React, { useState, useEffect } from "react";

function FetchData({url}) {

  var url = "https://abis-international.com/react/api";

  const [data, setData] = useState([]);
  var [id, setId] = useState(""); 
  var ready = false;
  
  const fetchInfo = () => {
    return fetch( url )
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    HandleClick();
    //fetchInfo();
  }, []);

function HandleChange (e) 
{
  id = e.target.value;
  setId(e.target.value);
  console.log(id);
}

function HandleClick () 
{
  url = "https://abis-international.com/react/api/index.php?id=" + id;
  
  console.log(url);
  fetchInfo();
}

  return (
    <div className="App">
    
    <label className="select1">View API Data: 777</label>

    <input type="text" className="select1" onChange={ (e) => { HandleChange(e)} } />
    <button className="select1" onClick={ HandleClick }  >Set new id</button>
        {data.map((dataObj, index) => {
          return (
            <div key= {dataObj.id}
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.id}</p>
                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
              
            </div>
          );
        })} 
    </div>
  );
}

export default FetchData;
