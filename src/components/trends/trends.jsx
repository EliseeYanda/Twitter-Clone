import React from 'react';


function Trends() {
    return (
        <>
            <div className='search'>
                <img src="src\icons\Search.png"/>
                <input type="search" placeholder='Search-Twitter' />
            </div>
            <div className='box'>
                <div className='trending'>
                    <h3>Trends for you</h3>
                    <img src="src\icons\Settings.png" />
                </div>
                <div className='trending-list'>
                    <ul>
                        <li>
                            <div className="element-one">
                                <p className='tweet-title-details'>Trending in Turkey</p> 
                                <img src="src\icons\More-2.png" />
                            </div>
                            <h4>#SQUID</h4>
                            <p className='tweet-title-details'>2,066 Tweets</p>
                        </li>
                        <li>
                            <div className="element-one">
                                <p className='tweet-title-details'>Trending in Turkey</p> 
                                <img src="src\icons\More-2.png" />
                            </div>
                            <h4>#SQUID</h4>
                            <p className='tweet-title-details'>2,066 Tweets</p>
                        </li>
                        <li>
                            <div className="element-one">
                                
                                <p className='tweet-title-details'>Trending in Turkey</p> 
                                <img src="src\icons\More-2.png" />
                            </div>
                            <h4>#SQUID</h4>
                            <p className='tweet-title-details'>2,066 Tweets</p>
                        </li>
                        <li>
                            <div className="element-one">
                                <p className='tweet-title-details'>Trending in Turkey</p> 
                                <img src="src\icons\More-2.png" />
                            </div>
                            <h4>#SQUID</h4>
                            <p className='tweet-title-details'>2,066 Tweets</p>
                        </li>

                    </ul>
                </div>
                <button className='showmore-Btn'>Show more</button>
            </div>

            <div className='box'>
                <div className='trending'>
                    <h3>Who to follow</h3>
                </div>
                <div className='box-news'>
                    <div className="news">
                        <img src="src\icons\Profile-Photo (2).png" />
                        <p>The New York Times</p> 
                        <img src="src\icons\Verified.png" />
                        <button className='btn-news'>Follow</button>
                    </div>
                </div>
                <div className='box-news'>
                    <div className="news">
                        <img src="src\icons\Profile-Photo.png" />
                        <p>CNN</p> 
                        <img src="src\icons\Verified.png" />
                        <button className='btn-news'>Follow</button>
                    </div>
                </div>
                <div className='box-news'>
                    <div className="news">
                        <img src="src\icons\Profile-Photo (1).png" />
                        <p>Twitter</p> 
                        <img src="src\icons\Verified.png" />
                        <button className='btn-news'>Follow</button>
                    </div>
                </div>
                <button className='showmore-Btn'>Show more</button>
            </div>
        </>
    );
}
export default Trends;