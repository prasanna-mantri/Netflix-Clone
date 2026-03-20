import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import MovieCard from '../../components/MovieCard/MovieCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <NavBar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt=""  className='hero-title'/>
          <p>Lorem ipsum dolor sit consequuntur quaerat sunt totam voluptatibus voluptatem fuga omnis et libero soluta laborum perferendis, magni asperiores?</p>
           <div className="hero-btns">
            <button className='btn'><img src={play_icon} />Play</button>
            <button className='btn dark-btn'><img src={info_icon} />More Info</button>
           </div>
           <MovieCard/>
        </div>
      </div>
      <div className="more-cards">
          
          <MovieCard title={"Blockbuster Movies"} category={'top_rated'}/>
          <MovieCard title={"Only on Netflix" } category={'popular'}/>
          <MovieCard title={"Top Picks for You"} category={'upcoming'}/>
          <MovieCard title={"Upcoming"} category={'now_playing'}/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Home