import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'

const FilteredEventsPage = () => {

    const router = useRouter();
    
    const filterData = router.query.slug;
    if (!filterData){
        return <p className="center">Loading...</p>
    }
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if(
        isNaN(numYear) || 
        isNaN(numMonth) || 
        numYear > 2030 || 
        numYear < 2021
    ){
        return <p>Invalid Filter</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    })

    if(!filteredEvents || filteredEvents.length === 0){
        return <p>No events found for the chosen filter!</p>
    }


    
    return (
        <div>
            <EventList items={filteredEvents}/>
        </div>
    )
}

export default FilteredEventsPage
