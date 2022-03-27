import './projects.css';

const Projects = () => {
    return (
        <div className="container">
            <div className='tiltContainer1Projects'></div>
            <div className='MainContainerProjects'>
                <h1>Things I've Built</h1>
                <div className='projectsConainter'>
                    <div className='singleProjectContainer'>
                        <div className='imageContainerR'>
                            <img src={require("../Images/brain.png")} alt="Brain" width="500px" />
                        </div>
                        <div className='infoContainerR'>
                            <div className='projectTitleContainerR'>
                                <h1>Brain Hemorrahage Classification</h1>
                            </div>
                            <div className='summaryBoxR'>
                                <h2>
                                    Worked with CT scan images and labels from Zeta Surgical to create machine learning models to
                                    classify and segment
                                    brain hemorrhages. All models were trained on 80,000 images on Northeastern's high performance
                                    computer with 128 gb of ram
                                    and either 1 gpu and 4 cpus or 128 cpus. The segmentation labels were given as a string of X and Y
                                    coordinates of the outline of
                                    the hemorrhage so created an algorithm to turn the string into a NumPy array with the hemorrhage
                                    filled in.
                                    The classification models used were logistic regression, standard neural network,
                                    convolutional neural network, and a transfer learning model built off of Densenet. The hyperparameters were optimized by
                                    using an adaptive learning rate, adding momentum for SGD models, and dropout layers after
                                    dense layers. The transfer learning
                                    model performed the best yielding a test accuracy of 81%. The segmentation model was built off of the
                                    UNET architecture
                                    and yielded an IoU rate of 62%.
                                </h2>
                            </div>
                            <div className='skillsSummaryConatinerR'>
                                <h3>Python — Numpy — Sklearn — Matplotlib — Tensorflow/Keras</h3>
                            </div>
                        </div>
                    </div>
                    <div className='singleProjectContainer'>
                        <div className='projectsConainter'>
                            <div className='imageContainerL'>
                                <img src={require("../Images/Arbitrage.png")} alt="Brain" width="500px" />
                            </div>
                            <div className='infoContainerL'>
                                <div className='projectTitleContainerL'>
                                    <h1>Arbitrage Automation</h1>
                                </div>
                                <div className='summaryBoxL'>
                                    <h2>
                                    Used BeautifulSoup and Selenium to scrape bookie websites for game odds and sporting events and
                                    compiled all available
                                    data into a pandas DataFrame. Cleaned data frame, replacing NaN with very large negative numbers,
                                    and create an algorithm
                                    to calculate when an arbitrage opportunity arises and the max profit you can make with both standard
                                    and weighted arbitrage.
                                    This algorithm consists of finding the implied probability of each event occurring and using the
                                    probability from the two largest
                                    events, a win from team 1 and a win from team 2 using two different bookies, and using this total
                                    implied probability to identify
                                    if an arbitrage opportunity arises. Hosted the algorithm to run hourly and send texts when an
                                    arbitrage opportunity arises. Currently
                                    working to create an app and webpage using Django and React Native along with created ML to predict
                                    sports games to maximize profit
                                    by using weighted arbitrage.
                                    </h2>
                                </div>
                                <div className='skillsSummaryConatinerL'>
                                    <h3>Python — Pandas — BeautifulSoup — Selenium</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='singleProjectContainer'>
                        <div className='imageContainerR'>
                            <img src={require("../Images/website.png")} alt="Brain" width="500px" />
                        </div>
                        <div className='infoContainerR'>
                            <div className='projectTitleContainerR'>
                                <h1>Portfolio Website</h1>
                            </div>
                            <div className='summaryBoxR'>
                                <h2>
                                    Create two iterations of my personal website as I have grown as a programmer. I created the first iteration of the website
                                    just 6 months after taking my first coding class and wanted to display the projects I have learned and the experiences I had. 
                                    Although this website was written purely in HTML, CSS, and a singular Javascript function, I was immensley proud of it. It was the first time
                                    I could say "I created this from scratch with no help". Although I loved this website, it didn't scale well, the colors were somewhat depressing,
                                    and I knew I could make it better. Once I learned the react framework for another project I was working on and found cool designs I wanted to recreate,
                                    I decided branching out from my original repo and starting over. Although it took me longer than it should have, I am proud that this was the first react
                                    website that I deployed. It shows off all of my skills, jobs, and passions through a simple UI and employs a much happier color pallet than my previos website!

                                </h2>
                            </div>
                            <div className='skillsSummaryConatinerR'>
                                <h3>Javascript — CSS — React — HTML </h3>
                            </div>
                        </div>
                    </div>
                    <div className='singleProjectContainer'>
                        <div className='projectsConainter'>
                            <div className='imageContainerL'>
                                <img src={require("../Images/buyGood.png")} alt="Brain" width="500px" />
                            </div>
                            <div className='infoContainerL'>
                                <div className='projectTitleContainerL'>
                                    <h1>BuyGood</h1>
                                </div>
                                <div className='summaryBoxL'>
                                    <h2>
                                        Have you ever wondered how much CO2 your clothes take to produce?
                                        How much the average worker makes in comparison to the CEO? Which canidates the companies you buy from endorse? My current project Buygood aims to 
                                        aggregate all of this data and give it to the consumer. Currently underdevelopment is a website — built using the PERN stack — and chrome extension aiming
                                        to bring transparency to the shopping community and keep corporate America honest. Although there is a lot of public data, companies, especially the ones
                                        who are lower on the ethics scale, try to burry their information, but with webscrapers, pdf scanners, and a little natural language processing this data 
                                        can be extracted. Me and the team I am working with are attempting to launch this website in June 2022 and the chrome extension following that.
                                        <b> Note: This project is currently underdevelopment and has yet to be launched.</b>
                                    </h2>
                                </div>
                                <div className='skillsSummaryConatinerL'>
                                    <h3>Python — Javascript — SQL — Postgre — CSS</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Projects