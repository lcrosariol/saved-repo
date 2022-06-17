import {Link} from "react-router-dom";
import * as userService from '../../utilities/users-service';
import ReactAudioPlayer from 'react-audio-player';
import "./NavBar.css";
import Logo from "../Logo/Logo";

export default function NavBar(props) {

    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (
    <nav>
        <Logo />
        <Link to="/plantss">Plant a Virtual Garden</Link>
        &nbsp; | &nbsp;
        <Link to="/plants/info">Plant Information</Link>
        &nbsp; | &nbsp;
        <span>Welcome {props.user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Logout</Link>
        <ReactAudioPlayer
            src="/src/audio/269570__vonora__cuckoo-the-nightingale-duet (1).mp3"
            autoPlay
            loop="true"
            controls
            />
    </nav>);
}

//audio player source code:
//https://www.npmjs.com/package/react-audio-player