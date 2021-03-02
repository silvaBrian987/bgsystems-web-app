import React, { useEffect, useState } from 'react';

const defaultNews = [
    {
        title: 'TITLE HEADING',
        titleDescription: 'Title description',
        date: Date.now(),
        imageSrc: '/logo192.png',
        body: 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    }
]

function Main() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(defaultNews);
    }, []);

    return (
        <div className="container">
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="col-sm-4">
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div className="fakeimg">Fake Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div className="col-sm-8">
                    {
                        news.map((item) => {
                            return (
                                <React.Fragment>
                                    <h2>{item.title}</h2>
                                    <h5>{item.titleDescription}, {new Date(item.date).toLocaleString()}</h5>
                                    <img src={item.imageSrc} alt={item.titleDescription} />
                                    <p>{item.body}</p>
                                    <br />
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;