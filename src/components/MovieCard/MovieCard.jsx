import {useState,useEffect,useRef,React} from 'react'
import './MovieCard.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'

const MovieCard = ({title,category}) => {
  const cardsRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTI5OGU4ZGIwYWNmYmVlZGI3MWQwZmVmZjJmNTllNiIsIm5iZiI6MTc3MjYzNDYxNS4xNzcsInN1YiI6IjY5YTg0MWY3MDJiMGVjNDZkYTA5N2EwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JD3OmLRh2ZdVEdyR1RXtetbwKMms596UmVM79zpioew'
  }
};

const [apiData,setApiData] = useState([])
useEffect (() => {fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?`,options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));});
  return (
    <div className='movie-card'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card,index) =>{
          return <Link className="card" key={index} to={`player/${card.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}/>
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}


export default MovieCard