import './intro.css';
import {useState, useEffect} from 'react';

const defaultActivity = {
    activity: " bogey golfer ⛳️"
}

const IntroPage = ({displayedActivityMs}) => {
    const [displayedActivity,setDisplayedActivity] = useState(defaultActivity);

    useEffect(() => {
        const intercalID = setInterval(() => {
            updateDisplayedActivity(displayedActivityMs++);
        },7000);
       
    },[displayedActivityMs])

    function updateDisplayedActivity(displayedActivityMs) {
        const pos = displayedActivityMs % 4;
        const sayings = [" subpar chef 👨‍🍳"," below average runner 🏃"," avid food critic — picky eater 🍗"," bogey golfer ⛳️ "]
        const newActivity = {
            activity: sayings[pos]
        }
        setDisplayedActivity(newActivity);
        displayedActivityMs++;
    }

    return (
        <div className='Container'>
            <div className='mainContainer'>
                <h1>Conner Lusk</h1>
                <div className='spanContainer'>
                    <span>Second year Computer Science student
                         at Northeastern University and {displayedActivity.activity}</span>
                </div>
            </div>
            <div className='tiltContainer'></div>
        </div>
    );
};


export default IntroPage