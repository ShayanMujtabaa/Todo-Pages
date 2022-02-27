import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { defaultTodo } from '../data/Todos'

const Home = () => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [author, setAuthor] = useState("")
    const [status, setStatus] = useState("")

    const handleTitle = (obj) => setTitle(obj.target.value)
    const handleDesc = (obj2) => setDesc(obj2.target.value)
    const handleSubmit = (prev) => prev.preventDefault()
    const handleAuthor1 = () => setAuthor("Shayan")
    const handleAuthor2 = () => setAuthor("Sir Yasir")
    const handlePend = () => setStatus("pending")
    const handleComp = () => setStatus("complete")

    let [todo, setTodo] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : defaultTodo)
    const addTask = () => {
        let newTsk =
        {
            id: Math.floor(Math.random() * Date.now()),
            title: title,
            desc: desc,
            status: status,
            author: author
        }

        setTodo([...todo, newTsk])
        localStorage.setItem("data", JSON.stringify(todo))
        // defaultTodo.push(newTsk)

    }

    return (
        <div>

            <div className=" mx-5 container-fluid">
                <form className='w-50 mt-3' onSubmit={(prev) => handleSubmit(prev)}>
                    <div id="emailHelp" className="form-text mb-3 mt-3">Keep forgetting important tasks? Look No Further!</div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" onChange={(obj) => handleTitle(obj)} id="title" placeholder='Name task' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" onChange={(obj2) => handleDesc(obj2)} id="description" placeholder='Describe task' />
                    </div>

                    <div class="dropdown mb-3 ">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Add Author
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#" onClick={() => handleAuthor1()}>Shayan</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleAuthor2()}>Sir Yasir</a></li>
                        </ul>
                    </div>

                    <div>
                        <input type="radio" name={`${todo.title}`} value='pending' id='pending' onClick={() => handlePend()} />
                        <label for="pending">Pending</label><br></br>
                        <input type="radio" name={`${todo.title}`} value='complete' id='complete' onClick={() => handleComp()} />
                        <label for="complete">Completed</label><br></br>
                    </div>

                    <button type="submit" className="btn btn-primary px-5 pl-5 w-100" onClick={addTask}>Add Task</button>
                </form>
            </div>

            <div>
                {todo.map(todo => {
                    return (

                        <div className='mx-5 w-50 mt-4 list-group-item'>
                            <Link to={`/desc/${todo.id}`} style={{ textDecoration: "none", color: "#202c27" }}>
                                <h4>{todo.title}</h4>
                                <h6>{todo.author}</h6>
                            </Link>
                            <span className={`badge rounded-pill bg-${todo.status === 'complete' ? 'success' : 'danger'}`}>{todo.status}</span>

                        </div>

                    )
                })}
            </div>


        </div>
    )
}
export default Home