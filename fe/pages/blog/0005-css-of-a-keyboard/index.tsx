import PageView from "../../../src/comps/layout/PageView";
import React from "react";
import code from "../../../src/pageComps/blog/0005-interactive-switching-keyboard/code.yaml";
import keys from '../../../src/pageComps/blog/0005-interactive-switching-keyboard/keys.json';
import KeyLayout from "../../../src/pageComps/blog/0005-interactive-switching-keyboard/KeyLayout";
import Key from "../../../src/pageComps/blog/0005-interactive-switching-keyboard/Key";
import CodeBlock from "../../../src/comps/code/CodeBlock";
import Code from "../../../src/comps/code/Code";
import Image from 'next/image'



export default function BlogPost005 () {
    return (<PageView>
        <section>
            <p>
                Well, I have to say that I really like to program some CSS. It is just oddly relaxing. We'll explore
                some CSS to make that keyboard:
            </p>
        </section>
        <KeyLayout keys={keys.keys}></KeyLayout>
        <section>
            <h2>The key</h2>
            <p>
                Let's start by the keys. Keyboard keys are... squared, they have a char inside, and usually the corners
                are rounded. Let's keep it simple, and think in a simple bordered square, with a centered char.
                Something like that:
            </p>
            <div style={{maxWidth: '50px'}}>
                <Key value="W"></Key>
            </div>
            <p>
                ¿Borders with rounded corners you said? I know how to do that.
            </p>
            <CodeBlock css>{code.code1_css}</CodeBlock>
            <CodeBlock html>{code.code1_html}</CodeBlock>
            <p>
                The centered char... is well, centered horizontally and vertically.
                To center horizontally is ok, a <Code css>text-align: center</Code> would work. But
                the vertical centering is always somewhat uncomfortable. Let's shoot for the fast track. We'll
                wrap the char in a span, and set the margins to auto. Here is a good moment to add to the <Code css>Key</Code>
                class <Code css>display: flex;</Code>, so it will fill the parent (it will be useful later) and so the
                margin auto actually works. Since the html element is a span, by default its display is inline, therefore
                it will fit the content, therefore there is no way to center anything. We need a display flex so it fits
                the parent and therefore we can center the content.
            </p>
            <CodeBlock css>{code.code2_css}</CodeBlock>
            <CodeBlock html>{code.code2_html}</CodeBlock>
            <p>
                And let's go for the hard part. It has to be a square. Right now it is not a square, it is a wide
                rectangle. And this is another not-so-easy challenges in css. We'll go directly to the solution and then
                explain it.
            </p>
            <CodeBlock css>{code.code3_css}</CodeBlock>
            <CodeBlock html>{code.code3_html}</CodeBlock>
            <p>
                We are using a pseudoelement (<Code css>:before</Code>) that is empty (<Code css>content: ""</Code>)
                and with that suspicious <Code css>padding-bottom: 100%</Code>. This padding is going to set a height
                for the element, a 100% height. But a 100% of what? Well, a 100% of the width of the parent, as specified
                in <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding" target="_blank">the docs</a>.
                I didn't invent that solution, it is widely proposed in StackOverflow (like <a href="https://stackoverflow.com/questions/19068070/how-to-style-a-div-to-be-a-responsive-square/28985475#28985475" target="_blank">
                    here.
                </a>).
            </p>
            <p>
                With that we already have the key. You can try that in <a href="https://codepen.io/guillermoblasco-com/pen/wvzxbpy" target="_blank">this CodePen</a>.
                I've added a parent with a max size, so the key does not fill the window.
            </p>
        </section>
        <section>
            <h2>The layout</h2>
            <p>
                A keyboard layout is those rows of keys, but each row is skewed to the right with respect to the
                upper row. In my laptop the rows are skewed like one third of a key. Looking at your own keyboard
                it clearly looks like a display grid has something to do with the arrangement.
            </p>
            <p>
                If we just set a grid template for ten columns (notice that the rows contain ten letters). Then
                we can have some nice key grid like in <a href="https://codepen.io/guillermoblasco-com/pen/RwGBmYg" target="_blank">this codepen</a>.
            </p>
            <CodeBlock css>{code.code4_css}</CodeBlock>
            <CodeBlock html>{code.code4_html}</CodeBlock>
            <p>
                Here we are instructing to set ten columns of equal width.
                <img
                    src="/assets/pages/blog/0005-css-of-a-keyboard/keyboard-layout.png"
                />
            </p>
            <p>
                Now let's go for the skew. The idea here is to "push" each row one third to the right.
                There is no native way to "pad" the rows with display grid. But what we can do is to tell each cell
                in which column it should start and in which column it should end. Since we can not tell to css
                "this cell will start in the column one third" we'll have to multiply the columns.
                We'll use 33 columns, and span each key on three columns, therefore we can pad with one column that
                is going to measure on third of a cell. Easier said than done.
            </p>
            <p>
                Let's start with that of having 33 columns. Simply change the column template from 10 to 30.
                <Code css>grid-template-columns: repeat(33, 1fr);</Code>. Now we'll have to manually tell react where
                each key start and ands. The letter G, for example, is in the 3rd row (counting from above), and it is
                the 5th column. Therefore it should start in the column <Code>4*3+1+2=15</Code> and it will end in
                three columns at the right, so at 18. The 4 comes from being the 5th column (5th, counting from 0 is $).
                The 3 comes from being 3 columns each key. The 1 comes from that grid starts counting from 1, not from 0.
                And 2 comes from the padding of 2 columns, because we are on the third row.
                We can write the formula, it is going to be easy.
            </p>
            <CodeBlock jsx>{code.code5}</CodeBlock>
            <p>
                This code has been putted together with react. Actually you can find all the files in the repository
                of the source code of the blog! Checkout <a href="https://github.com/guillermoblasco-com/webpage/tree/master/fe/src/pageComps/blog/0005-interactive-switching-keyboard" target="_blank">this directory</a>.
            </p>

        </section>
    </PageView>)
}
