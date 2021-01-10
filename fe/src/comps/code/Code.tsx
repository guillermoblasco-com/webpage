import React, {ReactNode} from "react";
import useCodeHighlight from "../../hooks/useCodeHighlight";

export interface CodeProps {
    js?: boolean;
    css?: boolean;
    jsx?: boolean;
    html?: boolean;
    children: string;
}

export default function Code(props:CodeProps) {
    const {children, ...languageKeys} = props;
    const language = Object.keys(languageKeys).find(k => languageKeys[k]) || 'clike';
    const content = useCodeHighlight(children, language);
    return <code className={`language-${language}`} dangerouslySetInnerHTML={{__html: content}} />;
}
