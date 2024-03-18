import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function StudentDetail() {
    //lay param
    const {id} = useParams();

    const [student, setstudent] = useState({});

    const getStudent = () => {
        fetch(`https://653f52039e8bd3be29e04263.mockapi.io/students/${id}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(stu => {
            //console.log("Student List: " + studentList);
            setstudent(stu);
        }).catch(error => {
            console.log("Error: " + error);
        })
    };

    //goi ham
    useEffect(() => {
        getStudent();
    });


    return ( 
        <div>
            <h1>Student Detail</h1>
            <h1 className="user-name">{student.name}</h1>
            <img src={student.avatar} alt={student.avatar} className="user-avatar" />
            <h2 className="user-position">Position: {student.position}</h2>
        </div>
     );
}

export default StudentDetail;