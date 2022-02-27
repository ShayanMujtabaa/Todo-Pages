import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>

            <footer style={{ paddingBottom: '110px', backgroundColor: 'black', color: 'white' }} className="text-center w-100 mt-5">

                <div style={{ paddingTop: '10%' }}>© 1980 Copyright:
                    <Link to="/"> stics.com.pk</Link>
                </div>

            </footer>
        </div>
    )
}

export default Footer