import styles from "./Grid.module.css";
import React from "react";


export default function Grid({children}) {
    return (
        <div className={styles.grid}>
            {children}
        </div>);
}
