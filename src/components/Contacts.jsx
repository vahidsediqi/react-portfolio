





import React from 'react';
import './componentStyles/main.css'
import PagesHero from './PagesHero';
import { motion } from "framer-motion"
import MyForm from './MyForm';


const Constacts = () => {
    const pageVariants = {
        in: {
          opacity: 1,
          x: 0
        },
        out: {
          opacity: 0,
          x: "-100vw"
        }
      }
    
      const pageTransition = {
        duration: 0.5
      }

    return (
        <motion.div initial="out" animate="in" exit="out"
        transition={pageTransition}
        variants={pageVariants}>               
    <PagesHero title="Contacts" route="/contacts"/>
                <div id="contacts">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6 col md-12 col-sm-12 ">
                            <MyForm />
                        </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                                <br/>
                                <div className="p-4" style={{backgroundColor: '#F8F9FA'}}>
                                    <span className="text-dark d-block" style={{fontSize: '20px'}}>
                                        <i className="fa fa-phone hvr-skew-forward mr-2"></i><a className="text-dark" href="#">  (+90) 535 636 85 76</a>
                                    </span>
                                </div>
                                <br/>
                                <div className="p-4" style={{backgroundColor: '#F8F9FA'}}>
                                    <span className="text-dark d-block" style={{fontSize: '20px'}}>
                                       <i className="fa fa-envelope hvr-skew-forward mr-2"></i><a className="text-dark" href="#">  vahid.sediqi@gmail.com</a>
                                    </span>
                                </div>
                                <br/>
                                <div className="socials p-4 rounded" style={{backgroundColor: '#F8F9FA'}}>
                                <span className="text-dark d-block" style={{fontSize: '20px'}}>
                                       <i className="fa fa-download hvr-skew-forward mr-2"></i><a className="text-dark" href="./cv.pdf">Download Resume</a>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </motion.div>
    )
}

export default Constacts;