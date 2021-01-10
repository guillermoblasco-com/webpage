import {useEffect, useMemo, useState} from "react";

export default function useCodeHighlight(code, language) {
    const [Prism, setPrism] = useState(undefined);
    const [jsxLoaded, setJsxLoaded] = useState(false);
    useEffect(() => {
        import('prismjs').then(prismInstance=> {
            setPrism(prismInstance);
        });
        require('prismjs/themes/prism.css');

    }, []);
    useEffect(() => {
        if (Prism !== undefined) {
            if (language === 'jsx') {
                import("prismjs/components/prism-jsx.min")
                    .then(() => setJsxLoaded(true));
            }
        }
    }, [Prism, language]);
    return useMemo(() => {
        if (Prism === undefined) {
            return '';
        }
        if (!jsxLoaded && language === 'jsx') {
            return '';
        }
        return Prism.highlight(code, Prism.languages[language], language);
    }, [code, language, Prism, jsxLoaded]);
}
