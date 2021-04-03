import React from 'react'
import {Link} from "react-router-dom"
import players from "../players.js"

export const HomeScreen = () => {
    return (
        <div className="">
            <div className="px-2 bg-bb-sm sm:bg-bb-lg py-52 object-cover sm:bg-bottom grid grid-cols-1 md:grid-cols-5">
            
            <div className="bg-gray-800 lg:py-16 md:col-span-3 rounded-3xl">
                <h1 className="text-white text-center text-7xl">HooptyDo</h1>
                <h2 className="text-gray-200 text-3xl text-center mt-2">Stats, Shot Charts, and More</h2>
            </div>
            <div className="grid md:col-span-2 md:grid-cols-5 mt-6 md:mt-0">
            <Link className="grid md:col-span-5 mt-6 md:mt-0" to="/player/lebron"><button className="bg-lakers-secondary md:my-4 lg:my-16  justify-self-center text-white text-5xl py-3 px-7 md:py-1  rounded-3xl">Try Us</button></Link>
            </div>
            

                
            </div>
            <div className="px-2 py-4 bg-wood-pattern">
                <h2 className="text-center font-bold text-3xl lg:text-4xl mb-3">Players</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-2">
                {players.map(player => (
                        
                        <div>
                        <Link to={player.path}>
                        <div className={`bg-${player.colors}`}>
                            <img  className="h-full w-full"src={player.image} alt={player.name}/>
                        </div>
                        </Link>
                        <div className={`bg-${player.colors}-secondary py-2`}>
                        <Link className="text-white" to={player.path}> 
                        <h2 className="text-white text-2xl text-center">{player.name} #{player.number}</h2>
                        </Link>
                        <h3 className="text-gray-100 text-xl text-center">{player.team}</h3>
                        </div>
                     
                    </div>
                ))}   
            </div>
            </div>

   
            
        </div>
    )
}

export default HomeScreen
