import React from 'react'
import classes from './buttom.module.css';
import Link from 'next/link'

const Buttom = (props) => {
    if(props.link){
        return (
            <Link href={props.link}>
             <a className={classes.btn}>{props.children}</a>
            </Link>
         );
    }

    return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
    
}

export default Buttom
