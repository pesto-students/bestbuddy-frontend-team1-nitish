import React from 'react';

import './TopPicks.scss';
import Card from "../Card/Card";

const TopPicks = () => {
    return (
        <div className='toppicks-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default TopPicks;