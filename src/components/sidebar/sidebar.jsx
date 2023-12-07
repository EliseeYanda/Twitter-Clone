import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className='header-menu'>
                <img src="src\icons\Twitter.png" />
            </div>
            <div>
            <ul>
                <li>
                    <NavLink to='/home' className='menu'><img src="src\icons\Home-Fill.png"  />Home</NavLink>
                </li>
                <li>
                    <NavLink to='/explore' className='menu'><img src="src\icons\Explore.png"  />Explore</NavLink>
                </li>
                <li>
                    <NavLink to='/notification' className='menu'><img src="src\icons\Notifications.png"  />Notifications</NavLink>
                </li>
                <li>
                    <NavLink to='/messages' className='menu'><img src="src\icons\Messages.png"  />Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/bookmarks' className='menu'><img src="src\icons\Bookmarks.png"  />Bookmarks</NavLink>
                </li>
                <li>
                    <NavLink to='/lists' className='menu'><img src="src\icons\Lists.png"  />Lists</NavLink>
                </li>
                <li>
                    <NavLink to='/profile' className='menu'><img src="src\icons\Profile.png"  />Profile</NavLink>
                </li>
                <li>
                    <NavLink to='more' className='menu'><img src="src\icons\More.png"  />More</NavLink>
                </li>
                <button className='buttons'>Tweet</button>
            </ul>
            </div>

            <footer className='menu-list'>
                <img src="src\images\footer-Photo.png" />Bradley Ortiz
                <p className='tweet-title-details'>@CNN. 7m</p>
            </footer>
        </>
    );
}
export default NavBar;