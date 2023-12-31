import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import { API_KEY } from '../../Constants/constants'

import { imageUrl } from '../../Constants/constants'

function RowPost(props) {
  const[movies, setMovies]=useState([])
  const [UrlId, setUrlId]=useState('')

  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Issue')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Array Empty")
      }
    })

  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>

              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="RowPosters" />

            )}
            
            
        </div>
        
      { UrlId && <Youtube opts={opts} videoId={UrlId.key} /> }
    </div>
  )
}

export default RowPost
