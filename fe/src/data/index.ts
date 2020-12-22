import rootPagesData from './rootPages.json';
import blogPagesData from './blogPages.json';
import {BlogPage, Page, PageType} from "../types";

export const homePage:Page = {
    href: '/',
    type: PageType.Home,
    title: `Guillermo Blasco`,
    description: '',
}
export const rootPages:Page[] = rootPagesData as Page[];
export const rootPage:(title:string)=> Page = title => rootPages.find(x  => x.title === title);
export const blogPages:BlogPage[] = blogPagesData as BlogPage[];
export const blogLabels:string[] = Object.keys(blogPages.flatMap(x => x.labels).reduce((prev, next) => ({...prev,[next]:true}), {}));
export const allPages:Page[] = [homePage, ...rootPages, ...blogPages];
export const findParentPage = (page:Page):Page => {
    let lastSlashIndex = page.href.lastIndexOf('/');
    if (page.type === PageType.Home) {
        return undefined;
    }
    return findPageByPath(page.href.substring(0,lastSlashIndex));
}
export const buildAncenstry = (page:Page):Page[] => {
    const pages = [];
    let current = page;
    do {
        pages.push(current);
        current = findParentPage(current);
    } while (current !== undefined);
    pages.reverse();
    return pages;
}
export const findPageByPath = (path:string):Page => {
    if (path === '/' || path === '') {
        return homePage;
    }
    return allPages.find(x => x.href === path);
}
