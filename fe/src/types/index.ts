
export enum PageType {
    Home = "Home",
    Theme = "Theme",
    BlogPost = "BlogPost",
}
export interface Page {
    href: string;
    type:PageType;
    title: string;
    description: string;
}

export interface BlogPage extends Page {
    labels?:string[];
    releaseDate:string;
    readTime?:number;
}
