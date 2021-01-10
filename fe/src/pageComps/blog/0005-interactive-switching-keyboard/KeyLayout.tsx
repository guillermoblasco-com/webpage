import styles from './KeyLayout.module.css';
import React from "react";
import Key from "./Key";

export default function KeyLayout(props) {

    return (<div className={styles.KeyLayout}>
        {props.keys.map(key => <Key key={key.key} {...key}/>)}
    </div>)
}
