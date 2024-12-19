import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';


const Landing = () => {
      return (
            <Wrapper>
                  <nav>
                        <Logo />
                  </nav>
                  <div className='container page'>
                        {/* info */}
                        <div className='info'>
                              <h1>
                                    job <span>tracking</span> app
                              </h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi itaque dolore quae quaerat architecto commodi dolorum autem repellendus, vitae voluptatum labore culpa animi recusandae enim officiis incidunt ad eaque adipisci pariatur eligendi cumque eum? Laudantium, natus nulla. Sit, nesciunt? Iste.</p>
                              <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                        </div>
                        <img src={main} alt='job hunt' className='img main-img' />
                  </div>
            </Wrapper>
      );
};


export default Landing;