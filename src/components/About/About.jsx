import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon'  onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos eligendi
                 iusto accusantium veniam repudiandae voluptatum nihil, 
                 aspernatur tempora harum placeat quasi, obcaecati hic earum.</p>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ipsa provident laudantium atque,
                     ad dignissimos laborum quam magni vero vel.
                     Optio laborum corrupti debitis iusto esse numquam corporis praesentium mollitia?</p>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Harum qui quidem corporis veniam fuga laudantium, itaque magni? Error recusandae debitis repellat,
                     labore corrupti quas aut incidunt veniam culpa harum, inventore, eos dolorum? Suscipit, libero inventore?</p>    
        </div>
    </div>
  )
}

export default About