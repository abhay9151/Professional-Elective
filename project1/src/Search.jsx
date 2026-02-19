import { useState } from "react";
export default function Search(){
    const [search,setSearch]=useState("");
    const name=["Aryan","Arpit","Whatever"];
    const student = name.filter((item)=>{
       return item.toLowerCase().includes(search.toLowerCase())
    });
    return(
        <div>
            <h2>Search the Word</h2>
            <input type="text" 
            placeholder="Enter something to search"
            value={search}
            onChange={(e)=>
            {
                setSearch(e.target.value)
            }
            }/>
            <ul>
               { student.map((Item,index)=>(
                <li key={index}>
                    <span>{Item}</span>

                 </li>

               ))
               }
            </ul>

        </div>
    )
}