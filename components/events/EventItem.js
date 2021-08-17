import React from 'react'
import clasess from  './event-item.module.css';
import Buttom from '../ui/bottom';
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowIcon from '../icons/arrow-right-icon'
const EventItem = (props) => {
    
    const {title, image, date, location, id} = props;
    
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedAddress = location.replace(', ','\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={clasess.item}>
            <img src={'/' + image} alt=""/>
            <div className={clasess.content}>
                <div className={clasess.summary}>
                    <h2>{title}</h2>
                    <div className={clasess.date}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={clasess.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={clasess.actions}>
                    <Buttom link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={clasess.icon}><ArrowIcon/></span>
                    </Buttom>
                </div>
            </div>
        </li>
    )
}

export default EventItem
