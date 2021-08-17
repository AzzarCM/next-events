import React from 'react'
import Link from 'next/link'
import clasess from './main-header.module.css'; 

const MainHeader = () => {
    return (
        <header className={clasess.header}>
            <div className={clasess.logo}>
                <Link href='/'>Next Events</Link>
            </div>
            <nav className={clasess.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browse all events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
