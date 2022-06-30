import {useState, useEffect} from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const defaultActivity = {
    activity: " Bogey Golfer ⛳️"
}

const HomePage = ({displayedActivityMs}) => {
    const [displayedActivity,setDisplayedActivity] = useState(defaultActivity);

    useEffect(() => {
        const intercalID = setInterval(() => {
            updateDisplayedActivity(displayedActivityMs++);
        },7000);
       
    },[displayedActivityMs])

    function updateDisplayedActivity(displayedActivityMs) {
        const pos = displayedActivityMs % 4;
        const sayings = [" Subpar Chef 👨‍🍳"," Below Average Runner 🏃"," Avid Food Critic — Picky Eater 🍗"," Bogey Golfer ⛳️ "]
        const newActivity = {
            activity: sayings[pos]
        }
        setDisplayedActivity(newActivity);
        displayedActivityMs++;
    }

    const navigate = useNavigate();
    const SwitchPage = (name) => {
        navigate(name)
    }

    return (
        <div className='Container'>
                <div className='mainContainer'>
                    <h1>Conner Lusk</h1>
                    <div className='aboutContainer'>
                        <span>Software Engineer | {displayedActivity.activity}</span>
                    </div>
                    <div className='linkContainer'>
                        <ul>
                            <li className='NewPageItem' onClick={() => SwitchPage("About")}>
                                About
                            </li>
                            <li className='NewPageItem' onClick={() => SwitchPage("Projects")}>
                                Projects
                            </li>
                            <li>
                                <a href="https://github.com/ConnerLusk" target="_blank">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/connerlusk" target="_blank">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
};


export default HomePage