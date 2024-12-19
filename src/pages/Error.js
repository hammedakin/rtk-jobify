import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';

const Error = () => {
      return (
            <Wrapper className='full-page'>
                  <div className="">
                        <img src={img} alt="not found" />
                        <h3>
                              Ohh! Page Not Found
                        </h3>
                        <p>
                              We can't seem to find the page you are looking for
                        </p>
                        <Link to='/'>
                              Back Home
                        </Link>
                  </div>
            </Wrapper>
      );
};

export default Error;