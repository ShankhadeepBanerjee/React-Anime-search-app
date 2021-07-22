import { useEffect, useState } from "react";
import "./componentStyle.css";
import { SmallCard } from "./Cards";


function Sidebar() {

    const [topAnime, setTopAnime] = useState([])


    function fetchTopAnime() {
        fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
        .then((response)=>{
        return response.json();
        })
        .then((result)=>{
        setTopAnime(result.top.slice(0, 10));
        })
        .catch((error)=>{
        console.log("Error occured at Sidebar comp."+ error);
        })
    }
    
    useEffect(() => {
        fetchTopAnime();
    },[])



    return(
        <div className="sidebar">
            <h3>Top Anime</h3>
            <div className="top-anime-list">
                {topAnime.map((elem)=>{
                    return(<SmallCard key={elem.mal_id} obj={elem} />)
                })}
            </div>
        </div>
    );
}


export default Sidebar;