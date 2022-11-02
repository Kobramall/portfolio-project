import React from'react'
import Img from '../assets/IMG-3147.jpg'


const Portfolio = () =>{
    return(
        <div className='portfolio'>
            <div className='intro'>
               <img src={Img} alt="Profile Picture" width="50" height="60"/>
               <p>Here's all about me</p>
            </div>
            <div className='projectLinks'>
                    <link rel="stylesheet" href="https://github.com/Kobramall" ><button><img src={Img} alt="filler pics" width="40" height="50"/></button></link>
                    <button><link rel="stylesheet" href="" /></button>
                    <button><link rel="stylesheet" href="" /></button>
            </div>
            <div className='projectDes'>
                   <p>project 1</p>
                   <p>project 2</p>
                   <p>project 3</p>
            </div>
            <footer>
               
            </footer>
        </div>
    )
}

export default Portfolio