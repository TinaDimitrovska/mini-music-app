import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div className="ErrorPage">
            <h1>Error page</h1>
            <p>This page does not exist. Go back to <Link to="/">Homepage</Link></p>
        </div>
    )
}
