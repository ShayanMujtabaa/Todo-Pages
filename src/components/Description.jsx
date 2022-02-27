import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { defaultTodo } from '../data/Todos'

function Description() {

    let { id } = useParams()


    const [todo] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : defaultTodo)
    const todos = todo.find(todo => todo.id === Number(id))


    return (
        <div className='container'>
            <h1 className='display-1'>{todos.title}</h1>
            <h6 className='blockquote-footer mt-2'>{todos.author}</h6>
            <p className='lead'>{todos.desc}</p>
            <span className={`badge rounded-pill bg-${todos.status === 'complete' ? 'success' : 'danger'}`}>{todos.status}</span>

            <br /><br /><br />
            <h5 className='display-6'>Task Status</h5>

            <button type="button" className="btn btn-danger me-1 mt-2" onClick={() => todo.status = "pending"}>Still Pending</button>
            <button type="button" className="btn btn-success mt-2" onClick={() => todo.status = "complete"}>Completed</button>

        </div>


    )
}

export default Description