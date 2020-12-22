import {Page} from "../../types";
import Card from "./Card";
import React from "react";

export interface PageCardProps {
    page: Page;
}

export default function PageCard ({page}:PageCardProps) {
    return <Card {...page} />;
}
