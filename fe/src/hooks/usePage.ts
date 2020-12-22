import {useRouter} from "next/router";
import {buildAncenstry, findPageByPath} from "../data";
import {Page} from "../types";

interface UsePageOutput {
    page:Page;
    pageAncestry:Page[];
}

export const usePage = ():UsePageOutput => {

    const router = useRouter();
    const page = findPageByPath(router.pathname);
    const pageAncestry = buildAncenstry(page);
    return {
        page,
        pageAncestry,
    };
}
