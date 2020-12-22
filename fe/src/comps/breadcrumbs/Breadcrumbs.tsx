import React from 'react';
import Link from "next/link";
import styles from './Breadcrumbs.module.css';
import {usePage} from "../../hooks/usePage";


export default function Breadcrumbs () {
    const {pageAncestry} = usePage();
    return (<ol className={styles.breadcrumbs} itemScope itemType="https://schema.org/BreadcrumbList">
            {pageAncestry.map((x, i) => (<li key={x.href}
                        itemProp="itemListElement" itemScope
                        itemType="https://schema.org/ListItem">
                        <Link href={x.href}>
                            <a itemProp="item">
                                /<span itemProp="name">{x.title}</span>
                            </a>
                        </Link>
                        <meta itemProp="position" content={i.toString()} />
                    </li>))}
        </ol>
    )
}
