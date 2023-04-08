import React from 'react';
import { useState } from 'react';

import './Filter.scss';

const filterData = [
    {
        name: 'Location',
        value: ['delhi', 'chennai', 'mumbai', 'jaipur', 'chandigarh']
    },
    {
        name: 'Price',
        value: ['5000', '7500', '10000']
    },
    {
        name: 'Category',
        value: ['Flat', 'PG', 'Appartment', 'Hotels']
    },
    {
        name: 'Gender',
        value: ['Male', "Female"]
    }
];

const Filter = () => {
    const [toggle, setToggle] = useState(false);
    const [filterValue, setfilterValue] = useState({})

    const handleFilter = (e) => {
        setfilterValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(filterValue);

        //need to write logic and state update here..
    }

    return (
        <div className='container filter-container'>
            <p onClick={() => setToggle(!toggle)}>
                <span>Search Properties by Filter</span>
                <span className={`arrow ${toggle ? 'up' : 'down'}`}></span>
            </p>
            <div className={`row filter-section ${toggle ? 'show' : ''}`}>
                {filterData.map((item) => (
                    <section className='col-sm-12 col-md-6 col-lg-3'>
                        <select name={item.name} onChange={(e) => handleFilter(e)}>
                            <option disabled defaultValue={item.name}>{item.name}</option>
                            {item.value.map((val) => (
                                <option value={val}>{val}</option>
                            ))}
                        </select>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Filter;