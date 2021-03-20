import React from 'react'
import {Link} from "react-router-dom"

export const HomeScreen = () => {
    return (
        <div>
            <header>
                <nav>
                <Link to="/home"><h1 className="text-4xl text-blue-600  tracking-widest">Hoopty</h1></Link>
                </nav>
            </header>
            <div>

            </div>
            <div>

            </div>
            <footer>
                
            </footer>

        </div>
    )
}

export default HomeScreen
