import Student from "./Student";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function StudentList() {
    const [studentList, setstudentList] = useState([]);

    const navigate = useNavigate();

    const getStudents = () => {
        fetch('https://653f52039e8bd3be29e04263.mockapi.io/students', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(students => {
            //console.log("Student List: " + studentList);
            setstudentList(students);
        }).catch(error => {
            console.log("Error: " + error);
        })
    };

    //goi ham
    useEffect(() => {
        getStudents();
    }, []);

    //ham delete
    const deleteStudent = (id) => {
        fetch(`https://653f52039e8bd3be29e04263.mockapi.io/students/${id}`, {
            method: 'DELETE',
        }).then (() => getStudents())  //goi lai ham de cap nhat danh sach
    }

    return ( 
        <div>
            <h1>STUDENT LIST</h1>
            <div className="student-list">
                {studentList.map((stu,index) => (
                    <Student name={stu.name}
                            avatar = {stu.avatar}
                            position = {stu.position}
                            id = {stu.id}
                            ID = {stu.ID} 
                            key = {index}
                            deleteButton = {<button onClick={() => deleteStudent(stu.id)} >Delete</button>}
                            editButton = {<button onClick={() => navigate(`/edit/${stu.id}`)}>Edit</button>}
                    />
                ))}
            </div>
        </div>
     );
}

export default StudentList;