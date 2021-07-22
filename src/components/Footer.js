import "./componentStyle.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return(
        <div className="footer">
            <div>
                <a href="https://github.com/ShankhadeepBanerjee" target="blank"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/shankhadeep-banerjee-140240142/" target="blank"><LinkedInIcon/></a>
                 
                
            </div>
            <div>
                <p>Developed By <span className="my-name">Shankhadeep</span> </p>
            </div>
        </div>
    );
}


export default Footer;