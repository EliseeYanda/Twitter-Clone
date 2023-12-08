import React from 'react';
import NavBar from './sidebar/sidebar';
import { Outlet } from 'react-router-dom';
import Trends from './trends/trends';

function Layout() {
    return (
        <>
           <div className='left-sidebar'>
            <NavBar/>
           </div>
           <main>
            <Outlet/>
           </main>
           <div className='right-sidebar'>
            <Trends/>
           </div>
           
        </>
    );
}

export default Layout;