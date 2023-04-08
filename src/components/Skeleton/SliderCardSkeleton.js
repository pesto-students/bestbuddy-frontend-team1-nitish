import React from 'react'
import Skeleton from 'react-loading-skeleton';

import '../Card/SliderCard.scss';

const SliderCardSkeleton = () => {
    return (
        <Skeleton className='card2' height={200} borderRadius={10} />
    )
}

export default SliderCardSkeleton;