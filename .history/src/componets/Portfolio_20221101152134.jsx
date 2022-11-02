import React from'react'
import Img from '../assets/IMG-3147.jpg'
import '../Portfolio.css'


const Portfolio = () =>{
    return(
        <div className='portfolio'>
            <div className='intro'>
               <img src={Img} alt="Profile Picture" width="70" height="80"/>
               <p>Here's all about me</p>
            </div>
            <div className='projectLinks'>
                    <a href="https://github.com/Kobramall" ><button><img src={Img} alt="filler pics" width="40" height="50"/></button></a>
                    <a href="https://github.com/Kobramall" ><button><img src={Img} alt="filler pics" width="40" height="50"/></button></a>
                    <a href="https://github.com/Kobramall" ><button><img src={Img} alt="filler pics" width="40" height="50"/></button></a>
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