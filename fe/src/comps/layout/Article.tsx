import React, {useEffect, useRef, useState} from 'react';
import styles from "./Article.module.css";

export default function Article({children}) {
    return (
        <article className={styles.article}>
            {children}
        </article>)
}
