import "./componentStyle.css"
import React from "react"
import Modal from '@material-ui/core/Modal';




function MoreInfo(props) {
    const [open, setOpen] = React.useState(true);
    console.log("In the more info");
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className="modal"
        >
        <div className="large-card">
                <h1>{props.obj.title}</h1>
                <p>Aired: {props.obj.start_date}-{props.obj.end_date}</p>
                <p>Episodes: {props.obj.episodes}</p>
                <p>MAL score: {props.obj.score}</p>
                <button onClick={handleClose}>CLOSE</button>
            </div>
        </Modal>
      </>
    )
}

export default MoreInfo;