import "./componentStyle.css";
import { useEffect, useState } from "react";
import { BigCard } from "./Cards";
import TextField from '@material-ui/core/TextField';
// import Carousel from 'react-material-ui-carousel'
import Carousel from 'react-elastic-carousel';

import Carousell from "./Carousell"

import { Paper, Button } from '@material-ui/core'


function Homepage(props) {

    const [TopAiringItems, setTopAiringItems] = useState([]);
    const [TopUpcomingItems, setTopUpcomingItems] = useState([]);

    const setters = {
        "airing": setTopAiringItems,
        "upcoming":setTopUpcomingItems,
    }

    function fetchTopAnime(type) {
        const url = "https://api.jikan.moe/v3/top/anime/1/"+type;
        console.log("Yes fetching" + url + type)
        fetch(url)
        .then((response)=>{
        // console.log(response);
        return response.json();
        })
        .then((result)=>{
        console.log("This is in Home page");
        console.log(result);

        setters[type](result.top.slice(0, 16));
        })
        .catch((error)=>{
        console.log("Error occured "+ error);
        })
    }


    useEffect(() => {
        fetchTopAnime("airing");
        fetchTopAnime("upcoming");
    }, [])


    const breakpoints = [
        {width: 0, itemsToShow: 1},
        {width: 300, itemsToShow: 3},
        {width: 500, itemsToShow: 4},
        {width: 800, itemsToShow: 5},
        {width: 1200, itemsToShow: 7}
    ];
    
    return(
        <div className="home main">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1>Top Airing</h1>
                <div className="top-airing search-results">
                    
                    {(TopAiringItems) 
                    && 
                    <Carousell arr={TopAiringItems}/>
                    }
                </div>
            </div>
            <div>
                <h1>Top Upcoming</h1>
                <div className="top-airing search-results">
                    
                    {(TopUpcomingItems) 
                    && 
                    <Carousell arr={TopUpcomingItems}/>
                    }
                </div>
            </div>

            
        </div>
    );
}

// {/* <Carousel breakPoints={breakpoints} autoPlay={false} animation="slide" className="carousel">
//                         {TopUpcomingItems.map( (item, i) => <BigCard key={i} obj={item} /> )}
//                     </Carousel> */}
export default Homepage;