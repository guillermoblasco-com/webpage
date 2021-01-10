import React from "react";
import Code, {CodeProps} from "./Code";

export default function CodeBlock(props:CodeProps) {
    return <pre><Code {...props} /></pre>;
}
