import React from 'react'
import notfound from "../Modules/NotFound.module.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center'>404 Error Page</h1>
            <p className={notfound.zoom_area}><b>Oops,,</b> Link your looking not exist. </p>
            <section className={notfound.error_container}>
                <span>4</span>
                <span><span className={notfound.screen_reader_text}>0</span></span>
                <span>4</span>
            </section>
            <div className={notfound.link_container+' text-white'}>
                <Link to="/" className={notfound.more_link+' text-white fw-bolder'}>Click here to create a link</Link>
            </div>
        </div>
    )
}

export default NotFound