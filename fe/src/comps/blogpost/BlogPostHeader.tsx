import {usePage} from "../../hooks/usePage";
import {BlogPage} from "../../types";
import Pill from "../pill/Pill";
import styles from './BlogPostHeader.module.css';
import React from "react";
import {toBlogDate} from "../../types/dates";

export default function BlogPostHeader() {
    const pageData = usePage();
    const page:BlogPage = pageData.page as BlogPage;
    return (<div className={styles.BlogPostHeader}>
        <span className={styles.BlogPostHeaderDate}>
            {toBlogDate(page.releaseDate)} -  {page.readTime && (page.readTime + ' min read time')}
        </span>
        {page.labels.map(label => <Pill key={label} text={label} />)}
    </div>)
}
