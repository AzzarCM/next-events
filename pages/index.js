import React from 'react'
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data'
import { useRouter } from 'next/router'
import EventsSearch from '../components/events/EventsSearch';
const index = () => {

    const router = useRouter()

    const featuredEvents = getFeaturedEvents();
    function findEventsHanlder(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);
    }
    return (
        <div>
            <EventsSearch onSearch={findEventsHanlder}/>
            <EventList items={featuredEvents}/>
        </div>
    )
}

export default index
