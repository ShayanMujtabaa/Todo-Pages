import React from 'react'

const Contact = () => {
    return (
        <div className='mt-5' style={{ padding: '150px', backgroundColor: '#b1bdc9' }}>
            <h1>Contact Us!</h1>
            <p>Ran into a bug? Feel free to contact us any time!</p>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your Message'></textarea>
            </div>
        </div>
    )
}

export default Contact