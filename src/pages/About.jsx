import React from 'react'

const About = () => {
    return (
        <div className='mt-5' style={{ backgroundColor: '#80bfff', padding: '150px' }}>
            <h1>Our Team</h1>
            <p>Meet our team memebers who helped to make this to-do list possible!</p>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Names</th>
                        <th scope="col">Twitter Handles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Shayan</td>
                        <td>@Shayan.ENT</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Sir Yasir</td>
                        <td>@MERN-STACK</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default About