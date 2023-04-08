import React from 'react';
import Skeleton from 'react-loading-skeleton';

import '../Toppicks/TopPicks.scss';

const TopPickSkeleton = () => {
    return (
        <div className='toppicks-container'>
            <Skeleton height={250} borderRadius={10}></Skeleton>
            <Skeleton height={250} borderRadius={10}></Skeleton>
            <Skeleton height={250} borderRadius={10}></Skeleton>
            <Skeleton height={250} borderRadius={10}></Skeleton>
            <Skeleton height={250} borderRadius={10}></Skeleton>
            <Skeleton height={250} borderRadius={10}></Skeleton>
        </div>

    )
}

export default TopPickSkeleton;