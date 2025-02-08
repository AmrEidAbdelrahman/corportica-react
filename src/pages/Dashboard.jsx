import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChartContainer from '../components/ChartContainer';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const filteredData = useSelector((state) => state.data.filteredData);
  console.log("Dashboard => ", filteredData);

    
  
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar/>
          <main className="flex-1 p-8 bg-gray-100">
            { filteredData?.length > 0 ? <ChartContainer /> : <div>Loading data...</div> }
          </main>
        </div>
        <Footer />
      </div>
    );
  };

export default Dashboard;
