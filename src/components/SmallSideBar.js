import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import NavLinks from './NavLinks';

const SmallSideBar = () => {

      const { isSideBarOpen } = useSelector((store) => store.user);
      const dispatch = useDispatch();

      const toggle = () => {
            dispatch(toggleSidebar());
      };

      return (
            <Wrapper>
                  <div className={isSideBarOpen ? "sidebar-container " : "sidebar-container show-sidebar"}>
                        <div className="content">
                              <button type="button"
                                    className='close-btn'
                                    onClick={() => dispatch(toggle)}
                              >
                                    <FaTimes />
                              </button>
                              <header>
                                    <Logo />
                              </header>
                              <NavLinks toggleSidebar={toggle} />
                        </div>
                  </div>
            </Wrapper>
      );
};

export default SmallSideBar;