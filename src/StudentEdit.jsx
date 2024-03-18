import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import StudentEditForm from "./StudentEditForm";

function StudentEdit() {
    //lay param
    const {id} = useParams();

    const [student, setstudent] = useState(null);

    useEffect(() => {
        fetch(`https://653f52039e8bd3be29e04263.mockapi.io/students/${id}`)
        .then((res) =>res.json())
        .then((stu) => setstudent(stu));
    }, [id]);

    //console.log(student);

    return student? (<StudentEditForm stu={student} />): (<p>Loading...</p>);
}

export default StudentEdit;