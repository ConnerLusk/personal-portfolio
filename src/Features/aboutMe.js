import './aboutMe.css';

const AboutMe = () => {
    return (
        <div className="container">
            <div className="profileContainer">
                <img src={require("../Images/Profile.jpg")} alt="Profile" />
            </div>
            <div className="aboutMeTitle">
                <h1>About Me</h1>
            </div>
            <div className="aboutMeContentHalf">
                <h2>Hello! My name is Conner Lusk and I was born and raised in Palo Alto before moving to Boston to pursue a BS 
                    in Computer Science with a Minor in Mathematics at Northeastern University.</h2>
            </div>
            <div className="aboutMeContentFull">
                <h2>I love looking at the application of applied/pure math in computer science and using it to optimize algorithms 
                    and dive deeper into CS theory and machine learning, more specifically computer vision. Finding elegant solutions 
                    to everyday problems piques my interest in both data science and software engineering.</h2>
            </div>
            <div className="aboutMeContentFull">
                <h2>Outside of school my interests lay in the creation of the next generation of technology. I am an Associate at
                <a href="https://www.sampac.vc/" target="_blank"> Samudra Pacific Capital Partners</a>,
                      — a fintech and healthtech Venture Capital firm based in Palo Alto — an incoming undergraduate
                      research assistant at <a href="http://xrayhead.com:8080/" target="_blank">Stanford Medicine</a>, — where I will be researching AI applications in radiology —
                       and an incoming software engineer at <a href="https://www.getreprise.com/" target="_blank">Reprise</a>!</h2>
            </div>
            <div className="aboutMeContentFull">
                <h2>For more information feel free to <a href = "mailto: lusk.c@northeastern.edu">email</a> me or take a look at my <a href="./PDF/LuskResume.pdf" target="_blank">resume!</a>!</h2>
            </div>
        </div>
        
    );
};

export default AboutMe