import "./componentStyle.css";
import { Link } from "react-router-dom";


function Nav() {
    return(
        <div className="nav">
        <h1 className="logo">YourAnimeList</h1>
            <div className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/manga">Manga</Link>
            </div>
        </div>
    );
}


export default Nav;