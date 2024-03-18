import { useNavigate } from 'react-router-dom';

function Student({name, avatar, position, id, ID, deleteButton, editButton}) {
    const navigate = useNavigate();

    return ( 
        <div className="student" >
            <h1 className="user-name">{ID}: {name}</h1>
            <img src={avatar} alt="Son" className="user-avatar" />
            <h2 className="user-position">Position: {position}</h2>
            <button onClick={()=> navigate(`/students/${id}`)}>View Detail</button>
            {deleteButton}
            {editButton}
        </div>
     );
}

export default Student;