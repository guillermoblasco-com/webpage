import styles from "./Main.module.css";
import React from "react";


export default function Main({children}) {
    return (
        <main className={styles.main}>
            {children}
        </main>);
};
