import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentAdd() {
    const [ID, setID] = useState("");
    const [name, setname] = useState("");
    const [avatar, setavatar] = useState("");
    const [position, setposition] = useState("");

    //tao bien navigate
    const navigate = useNavigate();

    const submitStudent = (event) => {
        const newStudent = {
            "ID" : ID,
            "name": name,
            "avatar": avatar,
            "position": position
        };

        event.preventDefault();
        console.log(newStudent);

        fetch('https://653f52039e8bd3be29e04263.mockapi.io/students', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(newStudent)
        }).then( () => {
            alert("Add new student successfully");

            //chuyen trang
            navigate('/students');
        })
    }

    return ( 
        <div>
            <form onSubmit={submitStudent}>
                ID: <input type="text" name="ID" onChange={(e) => setID(e.target.value)} /> <br />
                Name: <input type="text" name="name" onChange={(e) => setname(e.target.value)} /> <br />
                Avatar: <input type="text" name="avatar" onChange={(e) => setavatar(e.target.value)} /> <br />
                Position: <input type="text" name="position" onChange={(e) => setposition(e.target.value)} /> <br />
                <input type="submit" value="Add" />
            </form>
        </div>
     );
}

export default StudentAdd;