import React from 'react';

import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';


const HomeLayout = () => {
    const {state}=useNavigation()
    return (
        <div className='flex flex-col min-h-screen'>
          <div className='bg-base-200 sticky top-0 z-50 '>
            <Navbar></Navbar>
          </div>
            
            <main className=' flex-1 bg-gray-200 dark:bg-black'>
                {state=="loading"?<Loader></Loader>:
                  <Outlet></Outlet>
                }
              
            </main>
          <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;