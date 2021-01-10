import styles from './Key.module.css';
import React from "react";

export default function Key(props) {
    const style = {
        gridColumnStart: props.column * 3 + 1 + props.row,
        gridColumnEnd: (props.column + 1) * 3 + 1 + props.row,
        gridRow: props.row + 1,
    }
    return (<span className={styles.Key} style={style}>
        <span className={styles.KeyValue}>{props.value}</span>
    </span>);
}
