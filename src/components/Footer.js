import React, { useState } from 'react';

function Footer() {
    const [author, setAuthor] = useState('Brian Silva');
    const [version, setVersion] = useState(Date.now);
    return (
        <div className="fixed-bottom text-center mb-0 bg-dark text-white" style={{borderTop: '1px solid white'}}>
            <p>{author} - {version}</p>
        </div>
    );
}

export default Footer;