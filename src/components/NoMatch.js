import React from 'react';
import { useLocation } from 'react-router-dom';

function NoMatch() {
    let location = useLocation();

    return (
        <div className="container">
            <div className="jumbotron bg-dark text-light">
                <h3>
                    Page <code>{location.pathname}</code> not found.
            </h3>
            </div>
        </div>
    );
}

export default NoMatch;