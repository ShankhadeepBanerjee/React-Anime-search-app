import React, { useState } from "react"
import "./componentStyle.css";
import { BigCard } from "./Cards";


function Carousell(props) {

    const [pos, setPos] = useState(0);

    const offset = 200;

    function boxList(n) {
        let cols = ["red", "blue", "green"];
        let lis = [];
        for(let i = 0; i < n; i++){
            lis.push(cols[i%3])
        }
        return(lis)
    }

    function clickHandler(e) {
        const dir = e.target.textContent;
        const carContent = document.querySelector(".car-content").getBoundingClientRect();
        console.log(carContent.left, carContent.right);
        // (carContent.left-offset > 0 && carContent.right+offset < 2000) && 
        (dir === ">") ?  setPos(prev=>prev-offset) : setPos(prev=>prev+offset);
        console.log(carContent.left, carContent.right);
    }

    return(
        <div className="carousel">
            <div className="car-btns left">
                <button onClick={clickHandler}>&lt;</button>
            </div>
            <div className="car-content" style={{transform: `translateX(${pos}px)`}}>
                {/* {boxList(20).map((elem, idx)=><div key={idx} className={"col "+elem}></div>)} */}
                {(props.arr)?
                    props.arr.map( (item, i) => <BigCard key={i} obj={item} /> )
                    :
                    boxList(20).map((elem, idx)=><div key={idx} className={"col "+elem}></div>)
                }
            </div>
            <div className="car-btns right">
                <button onClick={clickHandler}>&gt;</button>
            </div>
        </div>

    );
}


export default Carousell;