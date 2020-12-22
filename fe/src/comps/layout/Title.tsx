import styles from "./Title.module.css";
import React, {ReactNode} from "react";

interface TitleProps {
    text:string|ReactNode;
}
export default function Title (props:TitleProps) {
    return (
        <h1 className={styles.title}>
            {props.text}
        </h1>);
}
