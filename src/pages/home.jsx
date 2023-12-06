import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor/tweet-editor';
import Tweets from '../components/tweets/tweets';
import NavBar from '../components/sidebar/sidebar';


function Home() {     
  return (
    <>
      <main className='sidebar'>
        <NavBar />
        
      </main>
      <main className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </main>
      <main className='trents'>
        
      </main>
    </>
  );
}

export default Home;