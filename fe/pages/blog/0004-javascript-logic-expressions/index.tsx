import PageView from "../../../src/comps/layout/PageView";
import React from "react";
import Article from "../../../src/comps/layout/Article";
import code from "../../../src/pageComps/blog/0004-javascript-logic-expressions/code.yaml";
import Code from "../../../src/comps/code/Code";
import CodeBlock from "../../../src/comps/code/CodeBlock";

export default function BlogPost004 () {
    return (<PageView>
        <Article>
            <section>
                <p>
                There are two expressions in javascript that are quite common, the <Code js>||</Code> (or)
                and the <Code js>&&</Code> (and). And they are as they are in any other language, a regular or
                and a regular and. But adding to the mix the javascript type coercion things get interesting, and
                pretty useful, albeit also somewhat obscure.
                </p>
                <CodeBlock js>{code.code1}</CodeBlock>
            </section>
            <section>
                <h2>The && (and) operator</h2>
                <p>
                    It is pretty simple. Given two values it returns <Code js>true</Code> if
                    both are true, and returns <Code js>false</Code> otherwise.
                </p>
                <CodeBlock js>{code.code2}</CodeBlock>
                <p>
                    When you chain more than one and operator then we can read it as the answer to the question "Are all
                    these values true?".
                </p>
                <CodeBlock js>{code.code3}</CodeBlock>
                <p>
                    The interesting fact in javascript and in all other languages is that the chaining of and statements
                    is "lazy". The language do not read all the values of the chain, instead reads from left to right
                    and when finds the first false value, then it stops reading. Mainly because it doesn't need to.
                    Once it finds one false value, then regardless of the leftover values the entire expression is false.
                </p>
                <CodeBlock js>{code.code4}</CodeBlock>
                <p>
                    To be honest, the interpreter do not interpret literally this long statement with four ands. Actually
                    the work is split in pairs, and executed as pairs from left to right. In the following graphical
                    depiction of the process, we can see that during steps 1 and 2, both values of the and are read
                    because the left value in both occasions are true; but in steps 3 and 4 only the left value is read
                    because it is false, so there is no need to read the right value.
                </p>
                <CodeBlock js>{code.code5}</CodeBlock>
                <p>
                    But you know, we don't use it that way. We use variables. Actually we can add any expression
                    as members of an and operator. But we'll see that introducing the type coercion.
                </p>
            </section>

            <section>
                <h2>The && (and) operator with type coercion</h2>
                <p>
                    Type coercion is the implicit type conversion of Javascript. Operators (like <Code js>+</Code>,
                    <Code js>&&</Code>, <Code js>-</Code>, ...) usually
                    need specific types to work. For example, the <Code js>&&</Code> (and) needs two boolean values.
                    What happen if you
                    pass to an and values that are not boolean? Most languages will complain (probably during compilation).
                    But Javascript will convert those values to boolean values. The conversion is pretty easy there are
                    some well defined values that are evaluated as false, everything else is true. How to know if a value
                    is considered as true or false? Just double negate it, or create a boolean out of it.
                    Generally those falsy values are easy to remember, they are
                    here: <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank">
                    MDN Web Docs Glossary/ Definitions of Web-related terms/ Falsy</a>.
                </p>
                <CodeBlock js>{code.code2_1}</CodeBlock>
                <p>
                    This is quite useful, and probably its most frequent use is to ask if a variable holds an object
                    before getting a value out of it. But wait, we said that the and operator was about getting a
                    boolean, right?
                </p>
                <CodeBlock js>{code.code2_2}</CodeBlock>
                <p>
                    And here is our first discovery. The and operator do not return true or false it returns the
                    first falsy value, or the last value if there are no falsy values. And that is big. We'll explore it
                    further. But before continuing see that the code intention above is even better with what
                    is named optional chaining, check
                    it <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining" target="_blank">here</a>
                </p>
                <p>
                    Let's see some examples of that thing about the and operator returning the first falsy value
                    or the last value.
                </p>
                <CodeBlock js>{code.code2_3}</CodeBlock>
                <p>
                    This mechanism is extensively used in React to conditionally render
                    components. <a href="https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator" target="_blank">Here the docs.</a>
                    React do not render an element which value is <Code js>false</Code>, therefore if the left side is
                    false, then nothing is rendered, but if the left is true, then the right hand side is rendered.
                    We'll get back to this case later.
                </p>
                <p>
                    As a summary, and with explicit type coercion, we can understand the <Code js>&&</Code> like this
                    function:
                </p>
                <CodeBlock js>{code.code2_4}</CodeBlock>
            </section>
            <section>
                <h2>The && (and) operator with functions</h2>
                <p>
                    It is possible to use functions with the <Code js>&&</Code> operator. And it is pretty damn useful.
                    Since when the left side is false the right side is not evaluated that means that if the
                    right side is a function call, then the function call is never performed.
                    Let's see some examples, shall we?
                </p>
                <CodeBlock js>{code.code3_1}</CodeBlock>
                <p>
                    The big deal of invoking functions within the and operator is that you are hiding code execution.
                    Sometimes it is great, because you are hiding complexity, therefore writing a more semantic code.
                    But also you can hide side effects, intentionally or unintentionally. Consider the following code,
                    where we check if a user exists by name, and if not then a user is created.
                </p>
                <CodeBlock js>{code.code3_2}</CodeBlock>
                <p>
                    Don't. Just don't. A boolean expression should not invoke functions that may have side effects.
                    This code is way more natural with a good old <Code js>if</Code> expression.
                </p>
                <CodeBlock js>{code.code3_3}</CodeBlock>
                <p>
                    As a general rule, functions invoked during a <Code js>&&</Code> operation should only read
                    stuff and return some data. So, stateless, idempotent and with no side effects. And that is
                    how React uses the <Code js>&&</Code> operator to render conditonally. As you may know the JSX
                    syntax is actually compiled to React API calls, so each chunk of JSX ends up being
                    a <Code js>React.createElement(...)</Code> call. Let's see it:
                </p>
                <CodeBlock jsx>{code.code3_4}</CodeBlock>
            </section>
            <section>
                <h2>More details</h2>
                <p>Let's see other details, edge cases and entangled code.</p>
                <h3>The || (or) operator</h3>
                <p>
                    Great, we can apply all we know on ands to the or operator. This time, the or should be read as: "The
                    first value which is not falsy, or the last value". A widespread use of the or (beyond actually perform
                    a logical or) is to provide default values to variables.
                </p>
                <CodeBlock js>{code.code4_1}</CodeBlock>
                <p>
                    Indeed there is not much more to say about that.
                </p>
                <h3>The ternary, with ands and ors</h3>
                <p>
                    A ternary expression is that <Code js>a ? b : c</Code>, and is a shorthand of:
                </p>
                <CodeBlock js>{code.code5_1}</CodeBlock>
                <p>
                    Now consider this expression <Code js>(a && b) || c</Code>. Interesting... Is a quite different
                    code, but the result is the same. If a is falsy, then <Code js>a && b</Code> is falsy, therefore
                    c is returned. If a is evaluated as true, then b is returned, and c ignored. This is just a
                    curiosity, don't use that instead of a ternary expression.
                </p>
                <h3>The source code</h3>
                <p>
                    When trying to understand things sometimes it is helpful to read the source code, albeit
                    not always easy. For example, the type coercion to boolean that we talked about implementation
                    in V8 Chromium engine is <a href="https://github.com/v8/v8/blob/dc712da548c7fb433caed56af9a021d964952728/src/ast/ast.cc#L1005" target="_blank">here</a>.
                    It is quite easy, <Code js>undefined</Code> and <Code js>null</Code> are false, booleans are their
                    own value, numbers are true if they are not zero, strings are false if their length is zero
                    and everything else is true.
                </p>
            </section>
        </Article>
    </PageView>)
}
