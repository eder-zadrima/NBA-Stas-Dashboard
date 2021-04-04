import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className="px-2 bg-gray-800 flex w-full py-1">
             <Link to="/"><h1 className="text-3xl text-white font-bold  tracking-wide">HoopyDo</h1></Link>
    </footer>
    )
}

export default Footer
