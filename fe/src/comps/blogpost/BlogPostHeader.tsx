import {usePage} from "../../hooks/usePage";
import moment from 'moment';
import {BlogPage} from "../../types";
import Pill from "../pill/Pill";
import styles from './BlogPostHeader.module.css';
import React from "react";

export default function BlogPostHeader() {
    const pageData = usePage();
    const page:BlogPage = pageData.page as BlogPage;
    const date = moment(page.releaseDate);
    return (<div className={styles.BlogPostHeader}>
        <span className={styles.BlogPostHeaderDate}>
            {date.format("MMM Do YY")} -  {page.readTime && (page.readTime + ' min read time')}
        </span>
        {page.labels.map(label => <Pill key={label} text={label} />)}
    </div>)
}
