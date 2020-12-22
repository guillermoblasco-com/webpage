import styles from "./Footer.module.css";
import React from "react";
import Grid from "../layout/Grid";
import {blogPages, rootPages} from "../../data";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Grid>
                <div>
                    <h3>Themes</h3>
                    {rootPages.map(page => (<div key={page.href}><Link href={page.href}><a>{page.title}</a></Link></div>) )}
                </div>
                <div>
                    <h3>Latest posts</h3>
                    {blogPages.slice(0,3).map(page => (<div key={page.href}><Link href={page.href}><a>{page.title}</a></Link></div>) )}
                </div>
                <div>
                </div>
            </Grid>
        </footer>)
}
