import React from 'react'
import IndividualProject from './IndividualProject'
import {motion} from 'framer-motion'

function Projects() {
  return (
    <div className='projectsContainer'>
      <motion.div initial={{x:-1500}} animate={{x:0}} transition={{duration:0.5,delay:0.1}}>
        <IndividualProject props={{title:"Verdava",languages:"Javascript, Java: React, Nodejs, Springboot",
                                    about:["• Creating a chrome extension to display environmental impact of clothes to shoppers",
                                    "• Backend creating in springboot, connected to a postgres databse, and REST apis",
                                    "• Manage a team of 2 engineers",
                                    "• Note: This project is currently underdevelopment and looking to release beta in August"]}} />
      </motion.div>
      <motion.div initial={{x:-1500}} animate={{x:0}} transition={{duration:0.5,delay:0.4}}>
        <IndividualProject props={{title:"Automated Arbitrage",languages:"Python: Pandas, Numpy, Beatifulsoup, Selenium",
                                    about:["• Automated scraping of bookie odds from multiple US bookies",
                                    "• Created an algorithm to find opportunites of positive predicted value and calculate numerical values to maximize profit",
                                    "• Automated scripts to run on a heruku server"],github:"link"}} />
      </motion.div>
      <motion.div initial={{x:-1500}} animate={{x:0}} transition={{duration:0.5,delay:0.7}}>
        <IndividualProject props={{title:"Brain Hemorhhage Classification/Segmentation",languages:"Python: Pandas, Numpy, Tensorflow, Keras",
                                    about:["• Created a classification model with a 87% test accuracy and 83% validation accuracy",
                                    "• Created a segmentation model with a 82% training accuracy and 76% validation accuracy",
                                    "• Fine tuned hyperparamters to decrease model bias"],github:"link"}} />
      </motion.div>
      <motion.div initial={{x:-1500}} animate={{x:0}} transition={{duration:0.5,delay:1}}>
        <IndividualProject props={{title:"Portfolio Website",languages:"Javascript: React, Framer-Motion",
                                    about:["• Built a portfolio website to display current and past work",
                                    "• Currently on the third iteration with new features including animation and multipage",]
                                    ,github:"link"}} />
      </motion.div>
    </div>
  )
}

export default Projects