import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Recommendation = () => {
    return (
        <Main
            title="Recommendation"
            description="Recommendation Letter from Micro1"
        >
            <article className="post markdown" id="recommendation">
                <header>
                    <div className="title">
                        <h2><Link to="/recommendation">Recommendation Letter</Link></h2>
                    </div>
                </header>
                <img src="/images/Recommendation-Letter.png" alt="Recommendation Letter" style={{ width: '100%', height: 'auto' }} />
            </article>
        </Main>
    );
};

export default Recommendation;
