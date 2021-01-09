import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers([...data.slice(0, 5)]))
     }, [])

    return(
        <>
        {users && users.map(value => (
            <div key={`ur${value.id}`}>{value.name}</div>
        ))}
    </>
    )
}

export default Users