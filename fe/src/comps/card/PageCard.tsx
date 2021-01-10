import {Page} from "../../types";
import Card, {CardProps, CardPropsExtra} from "./Card";
import React from "react";

export interface PageCardProps extends CardPropsExtra {
    page: Page;
}

export default function PageCard (props:PageCardProps) {
    return <Card {...props} {...props.page} />;
}
