import React from 'react';

export default function Home () {
    return (
        <div className="mt-4" style={{ width: '100%'}}>
            <h1 style={{ textAlign: 'center' }}> Proof of Concept - Ziggeo API </h1>
            <div className="d-flex justify-content-center">
                <p className="mt-4" style={{width: '500px', textAlign: 'center', fontSize: '.9em'}}>
                    Project uses Express.js to transact with Ziggeo API at <pre>localhost:3001/video-list</pre>
                    <br />
                    Filter videos based on a specific tag. <pre>example: 'soso@email.com'</pre>
                    <br />
                    Upload videos using the user's tag. Once video is done recording, goto <b>'Play A Video'</b> from the menu to find the video on the list with that tag.
                    <br /> <br/>
                    <pre><b style={{ color: 'red' }}>Note:</b> <br /> Video must have a tag or filtering videos won't work in this POC.</pre>
                </p>
            </div>
        </div>
    )
}