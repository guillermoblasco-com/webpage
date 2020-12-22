import Link from "next/link";
import styles from "./Card.module.css";
import React from 'react';
import Pill from "../pill/Pill";

interface CardProps {
    title:string;
    description:string;
    labels?:string[];
    href?:string;
    onClick?:() => void;
}
const noOnClick = () => {};

export default function Card (props:CardProps) {
    const body = (<React.Fragment>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {props.labels?.length > 0 && <div className={styles.cardLabels}>{props.labels.map(label => <Pill text={label} />)}</div>}
    </React.Fragment>);
    if (props.href) {
        return (
            <Link href={props.href}>
                <a className={styles.card} onClick={props.onClick || noOnClick}>
                    {body}
                </a>
            </Link>);
    }
    return (<span className={styles.card} onClick={props.onClick || noOnClick}>
        {body}
    </span>)
}
