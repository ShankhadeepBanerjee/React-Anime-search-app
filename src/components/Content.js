import "./componentStyle.css";
import Sidebar from "./Sidebar";
import Otherpages from "./Otherpages";
import Homepage from "./Homepage";
import { Switch, Route } from "react-router-dom";

function Content() {
    return(
        <div className="content">
            <Sidebar/>
            <hr />
            <Switch>
                <Route exact path="/anime"  component={()=><Otherpages type="anime"/>}/>
                <Route exact path="/manga"  component={()=><Otherpages type="manga"/>}/>
                <Route path="/"  component={Homepage}/>
            </Switch>
        </div>
    );
}


export default Content;