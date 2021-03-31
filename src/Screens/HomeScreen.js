import React from 'react'
import {Link} from "react-router-dom"
import players from "../players.js"

export const HomeScreen = () => {
    return (
        <div>
            <div className="px-2 py-40 bg-blue-100">

            </div>
            <div className="px-2 py-4 bg-wood-pattern grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {players.map(player => (
                        <div>
                        <div className={`bg-${player.colors}`}>
                            <img  className="h-full w-full"src={player.image} alt={player.name}/>
                        </div>
                        <div className={`bg-${player.colors}-secondary py-2`}>
                        <h2 className="text-white text-2xl text-center">{player.name}</h2>
                        <Link className="text-white" to={player.path}>player</Link>
                        </div>
                    </div>
                ))}   
            </div>
            
        </div>
    )
}

export default HomeScreen
