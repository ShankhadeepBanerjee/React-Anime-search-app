import React, { useState } from "react"
import "./componentStyle.css";

import Modal from '@material-ui/core/Modal';



function BigCard(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const startDate = new Date(props.obj.start_date);

    return(
        <div className="big-card" >
            <a href="#" onClick={(e)=>{
            e.preventDefault();
            console.log("Big Card pressed");
            handleOpen();
            }} >
            <div className="big-card-img"><img src={props.obj.image_url} alt="" /></div>
            <div className="big-card-title"><h2>{props.obj.title}</h2></div>
            </a>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="modal"
            >
                
                <div className="large-card">
                    <button onClick={handleClose} className="close-btn">X</button>
                    <div>
                        <div className="img-div">
                            <img src={props.obj.image_url} alt="" />
                        </div>
                        <div className="title-div">
                            <h1>{props.obj.title}</h1>
                            <p>{props.obj.synopsis}</p>
                        </div>
                    </div>
                    <div className="info-div">
                        <p>Aired: {startDate.getFullYear()}</p>
                        <p>Episodes: {props.obj.episodes}</p>
                        <p>Score: {props.obj.score}</p>
                        <p>Rated: {props.obj.rated}</p>
                        <p>Type: {props.obj.type}</p>
                        <p><a href={props.obj.url} target="blank">Visit MyAnimeList</a></p>
                    </div>
                    
                </div>
            </Modal>
            
        </div>
    );
}


function SmallCard(props) {
    return(
        <div className="small-card">
            <img src={props.obj.image_url} alt="" />
            <div>
            <p><a href={props.obj.url} target="blank">{props.obj.title}</a></p>
            <p>Aired: {props.obj.start_date.slice(4,9)}-{props.obj.end_date.slice(4,9)}</p>
            <p>Episodes: {props.obj.episodes}</p>
            <p>Score: {props.obj.score}</p>
            </div>
        </div>
    );
}


export { BigCard, SmallCard };