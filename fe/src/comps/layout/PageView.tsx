import styles from "./PageView.module.css";
import PageHead from "../head";
import Main from "./Main";
import Footer from "../footer/Footer";
import {PageType} from "../../types";
import React, {ReactNode} from "react";
import Title from "./Title";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

import {usePage} from "../../hooks/usePage";
import BlogPostHeader from "../blogpost/BlogPostHeader";

interface PageViewProps {
    children:ReactNode[]|ReactNode;
}
export default function PageView(props:PageViewProps) {
    const {page} = usePage();
    return (
        <div className={styles.container}>
            <PageHead />
            <Breadcrumbs />
            <Main>
                <Title text={page.title} />
                {page.type===PageType.BlogPost && <BlogPostHeader />}
                {props.children}
            </Main>
            <Footer />
        </div>
    );
}
