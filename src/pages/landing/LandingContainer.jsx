import React, { useState,useEffect } from 'react';
import View from './Landing';


const Landing = () => {
    const [search, setSearch] = useState('')
    const [TopTrends, setTopTrends] = useState([])
    const [TopMostSearches, setTopMostSearches] = useState([])

    const handleChange = (e) => setSearch(e.target.value);

    useEffect(() => {
    setTopTrends([
            {key:1,value:"Covid-19"},
            {key:2,value:"Coronovirus"},
            {key:3,value:"Gerogia Coronovirus patients"},
            {key:4,value:"Rent will"},
            {key:5,value:"How to handwash"},])

    setTopMostSearches([
            {key:1,value:"Covid-19"},
            {key:2,value:"Coronovirus"},
            {key:3,value:"USA Coronovirus patients"},
            {key:4,value:"Best Masks for coronovirus"},
            {key:5,value:"How to handwash"},
            ])
    },[])

    return (
       <View
       handleChange={handleChange}
       topTrends={TopTrends}
       search={search}
       topSearches={TopMostSearches}
       />
    )
}

export default Landing