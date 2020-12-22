import styles from './Pill.module.css';
import classNames from "classnames";
import {colorOf} from "../../utils/color";
import React, {useMemo} from "react";
import {voidFunction} from "../../utils/voidFunction";

interface PillProps {
    text:string;
    onClick?:(text:string) => void;
    disabled?:boolean;
}
const colorConfig = {
    s: 70,
    l: 80,
};
export default function Pill(props:PillProps) {
    const style = useMemo(() => ({
        'borderColor': colorOf(props.text, colorConfig)
    }), [props.text]);
    const onClick = useMemo(() => {
        if (props.onClick) {
            return () => props.onClick(props.text);
        }
        return voidFunction;
    }, [props.text, props.onClick]);

    const classes = classNames({
        [styles.pill]: true,
        [styles.pill__clickable]: props.onClick !== undefined,
        [styles.pill__enabled]: !props.disabled,
        [styles.pill__disabled]: props.disabled,
    });
    return (<span className={classes} style={style} onClick={onClick}>{props.text}</span>)
}
