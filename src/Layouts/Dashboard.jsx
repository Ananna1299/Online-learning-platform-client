import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import DasboardNav from '../Components/DasboardNav';
import Footer from '../Components/Footer';

const Dashboard = () => {
      const {state}=useNavigation()
    return (
        <div className='flex flex-col min-h-screen'>
            <DasboardNav></DasboardNav>
            <main className=' flex-1 bg-gradient-to-t from-[#B6DBFF] to-[#4FA6FF]'>
                {state=="loading"?<span className="loading loading-spinner loading-xl"></span>:
                  <Outlet></Outlet>
                }
              
            </main>
          <Footer></Footer>
            
        </div>
    );
};

export default Dashboard;