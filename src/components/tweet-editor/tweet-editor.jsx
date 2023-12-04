import React from 'react';


function TweetEditor() {
    return (
        <>
            <div className='tweet-editor'>
                <img src="src\images\profile-photo.jpg" className='avatar' />
                <form className='tweet-editor-form'>
                    <input type="text" className='tweet-editor-input' placeholder="What's happening ?" />

                    <div className='tweet-editor-buttons'>
                    <img src="src\images\Meta.png" className='tweet-editor-actions' />

                    <button className='button'>Tweet</button>
                </div>
                </form>

            </div>
        </>
    );

}

export default TweetEditor;
