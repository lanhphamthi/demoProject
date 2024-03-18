import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentEditForm({stu}) {
    const [ID, setID] = useState(stu.ID);
    const [name, setname] = useState(stu.name);
    const [avatar, setavatar] = useState(stu.avatar);
    const [position, setposition] = useState(stu.position);

    //tao bien navigate
    const navigate = useNavigate();

    const submitStudent = (event) => {
        const editStudent = {
            "ID" : ID,
            "name": name,
            "avatar": avatar,
            "position": position
        };

        event.preventDefault();
        console.log(editStudent);

        fetch(`https://653f52039e8bd3be29e04263.mockapi.io/students/${stu.id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(editStudent)
        }).then( () => {
            alert("Update student successfully");

            //chuyen trang
            navigate('/students');
        })
    }

    return ( 
        <div>
            <form onSubmit={submitStudent}>
                ID: <input type="text" name="ID" onChange={(e) => setID(e.target.value)} value={ID} /> <br />
                Name: <input type="text" name="name" onChange={(e) => setname(e.target.value)} value={name}  /> <br />
                Avatar: <input type="text" name="avatar" onChange={(e) => setavatar(e.target.value)} value={avatar}  /> <br />
                Position: <input type="text" name="position" onChange={(e) => setposition(e.target.value)} value={position}  /> <br />
                <input type="submit" value="Edit" />
            </form>

            id: {stu.id}
        </div>
     );
}

export default StudentEditForm;