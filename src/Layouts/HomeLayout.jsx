import React from 'react';

import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const HomeLayout = () => {
    const {state}=useNavigation()
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className=' flex-1'>
                {state=="loading"?<span className="loading loading-spinner loading-xl"></span>:
                  <Outlet></Outlet>
                }
              
            </main>
          <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;