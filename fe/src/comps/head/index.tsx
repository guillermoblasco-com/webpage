import Head from "next/head";
import {usePage} from "../../hooks/usePage";
import React from "react";
import GtmHeadTag from "../gtm/GtmHeadTag";

export default function PageHead () {
    const {page} = usePage();
    return (
        <Head>
            <GtmHeadTag />
            <title>{page.title}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap" rel="stylesheet" />
            <meta charSet="UTF-8" />
            <meta name="description" content={page.description} />
            <meta name="author" content="Guillermo Blasco" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/assets/favicon.ico" />
        </Head>)
}
