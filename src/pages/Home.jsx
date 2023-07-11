import React from 'react';
import Body from '../components/Body';
import NavigationBar from '../components/NavigationBar';
import '../styles/bootstrap.css';

function Home() {
  return (
    <div className='home'>
      <NavigationBar/>
      <Body/>
    </div>
  );
}

export default Home;
