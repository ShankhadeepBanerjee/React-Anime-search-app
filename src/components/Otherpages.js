import "./componentStyle.css";
import { useEffect, useState } from "react";
import { BigCard } from "./Cards";
import TextField from '@material-ui/core/TextField';






function Otherpages(props) {

    const [seacrhItems, setSeacrhItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    const [searched, setSearched] = useState(false);
    const [searching, setSearching] = useState(false);

    const [genre, setGenre] = useState("action");
    const [orderBy, setOrderBy] = useState("score");
    const [type, setType] = useState("tv");


    const genreList = [["Action", 1], ["Adventure", 2], ["Cars", 3], ["Comedy", 4], ["Dementia", 5], ["Demons", 6], 
    ["Mystery", 7], ["Drama", 8], ["Ecchi", 9], 
    ["Fantasy", 10], ["Game", 11], ["Hentai", 12], ["Historical", 13], ["Horror", 14], ["Kids", 15], ["Magic", 16], 
    ["Martial Arts", 17], ["Mecha", 18], ["Music", 19], ["Parody", 20], ["Samurai", 21], ["Romance", 22], ["School", 23], 
    ["Sci Fi", 24], ["Shoujo", 25], ["Shoujo Ai", 26], ["Shounen", 27], ["Shounen Ai", 28], ["Space", 29], ["Sports", 30], 
    ["Super Power", 31], ["Vampire", 32], ["Yaoi", 33], ["Yuri", 34], ["Harem", 35], ["Slice Of Life", 36], ["Supernatural", 37], 
    ["Military", 38], ["Police", 39], ["Psychological", 40], ["Thriller", 41], ["Seinen", 42], ["Josei", 43], ["Gender Bender", 44], 
    ["Thriller", 45] ];

    const typesList = {
        "anime": ['tv', 'ova', 'movie', 'special', 'ona', 'music'],
        "manga": ['manga', 'novel', 'oneshot', 'doujin', 'manhwa', 'manhua']
    }






    // Event handlers 
    function searchBoxChangeHandler(event) {
        const {value} = event.target;
        setSearchTerm(value);
    }

    function checkBoxHandler(e, parentDivClass, setter) {
        const { name } = e.target;
        const checkboxList = document.querySelector("."+`${parentDivClass}`).querySelectorAll("input[type=checkbox]");
        checkboxList.forEach(elem=>{
            if (elem.name !== name) elem.checked = false;
        });
        setter(name);
        console.log(name);

    }

    function handleSearch(e) {
        e.preventDefault();

        if(!searchTerm)return;

        setSeacrhItems([]);
        setSearched(false);
        setSearching(true);

        const url = "https://api.jikan.moe/v3/search/"+`${props.type}`+"?q="+searchTerm+"&limit=30";
        
        fetch(url)
        .then((response)=>{
        console.log(response);
        return response.json();
        })
        .then((result)=>{
        setSeacrhItems(result.results);
        setSearched(true);
        setSearching(false);
        })
        .catch((error)=>{
        console.log("Error occured "+ error);
        setSearched(true);
        setSearching(false);
        })
    }

    function fetchAnime() {

        setSeacrhItems([]);
        setSearched(false);
        setSearching(true);
        setSearchTerm("");

        const url = "https://api.jikan.moe/v3/search/"+`${props.type}`+"?genre="+`${genre}`+"&type="+`${type}`+"&order_by="+`${orderBy}`+"&sort=desc";
        fetch(url)
        .then((response)=>{
        return response.json();
        })
        .then((result)=>{
        setSeacrhItems(result.results);
        setSearched(true);
        setSearching(false);
        })
        .catch((error)=>{
        console.log("Error occured at Sidebar comp."+ error);
        setSearched(true);
        setSearching(false);
        })
      }


    useEffect(() => {
        const resultDiv = document.querySelector(".search-results"); 
        (searched) ? resultDiv.classList.add("example-div") : resultDiv.classList.remove("example-div") ;
    }, [searched])

    useEffect(() => {
        fetchAnime(props.type)
    }, [orderBy, type, genre]);

    return(
        <div className="main">
            <form action="" onSubmit={handleSearch} className="search-form">
            <TextField id="standard-basic" label={"Search "+`${props.type}`} placeholder={"Search "+`${props.type}`} value={searchTerm} onChange={searchBoxChangeHandler} />
            </form>

            
            <div className="genre">
                <div><h1>Genre</h1></div>
                <div>
                    {genreList.map((item, idx)=>{
                    return <button className="genre-btns" key={idx} data-key={item[1]} onClick={(e)=>{setGenre(e.target.dataset["key"])}}>{item[0]}</button>
                    })}
                </div>
                {!searchTerm && 
                <>
                <div className="type-checkboxes">
                    <h3>Type:  </h3>
                    {typesList[props.type].map((elem, idx)=> {
                        return( 
                            <span key={idx}>
                            <label htmlFor={elem}>{elem}</label>
                            <input type="checkbox" name={elem} onChange={(e)=>{
                                checkBoxHandler(e, "type-checkboxes", setType)
                            }}/>
                            </span> 
                         )
                    } )}
                </div>
                <div className="sort-by">
                    <div><h3>Sort By:  </h3></div> 
                    <label htmlFor="score">Score</label>
                    <input type="checkbox" name="score" onChange={(e)=>{
                        checkBoxHandler(e, "sort-by", setOrderBy)
                    }}/>
                    <label htmlFor="members">Members</label>
                    <input type="checkbox" name="members" onChange={(e)=>{
                        checkBoxHandler(e, "sort-by", setOrderBy)
                    }}/>
                </div>
                </>
                }
            </div>

            <div className="search-results">
                {(seacrhItems) ? 
                (seacrhItems.map((elem)=>{return <BigCard key={elem.mal_id} obj={elem}/>}))
                :
                ((searched) && <h1>Nothing Found</h1>)
                }
                {(searching) && <h1>Searching...</h1>}
            </div>
        </div>
    );
}



export default Otherpages;