import PageView from "../../../src/comps/layout/PageView";
import React, {useEffect} from "react";
import Prism from 'prismjs';
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism.css";
import Article from "../../../src/comps/layout/Article";
import code from '../../../src/pageComps/blog/0001-why-custom-hooks-in-react/code.yaml';

export default function BlogPost001() {
    useEffect(() => {
        Prism.highlightAll();
    }, [])
    return (<PageView>
        <Article>
            <section>
                <p>
                    React hooks allow us to manage the state and the side effects of state transitions. Hooks are
                    powerful and flexible, yet simple in its functionality. But this flexibility and simplicity
                    may lead to abuse and entangled unreadable code. Custom hooks to the rescue.
                </p>
            </section>
            <section>
                <h2>The counter</h2>
                <p>
                    Let's say we want to manage a counter. We
                    just need a hook like that:
                </p>
                <pre>
                <code className="language-jsx">{code.code1}</code></pre>
                <p>
                    Later in the code on a click handler we can set the state to any other value. Although a
                    common use case in a counter would be to increase or decrease the counter. Also, react will
                    let you change the state to whatever value.
                </p>
                <pre>
                    <code className="language-jsx">{code.code2}</code>
                </pre>
                <p>
                    This capability of setting the state to whatever value may lead to undesirable situations. Like this
                    button:
                </p>
                <pre>
                <code className="language-jsx">{code.code3}</code>
                    </pre>
                <p>
                    Just the mistake in the state initialisation leads to type coercion between a string and a number
                    resulting in a string and the plus symbol that intended to add one, now concatenates one. The
                    set state function let's a lot of freedom and chances of error. So that will be one reason to use
                    custom hooks.
                </p>
                <p>
                    Let's add a second button to reset the state to zero.
                </p>
                <pre>
                <code className="language-jsx">{code.code4}</code>
                    </pre>
                <p>
                    The code is simple enough so when we read "set counter state to zero" we understand it as a counter
                    reset.
                    But we can agree that the code that we write often does not communicate the intent. Let's build the
                    first custom hook for this simple counter.
                </p>
                <pre>
                <code className="language-jsx">{code.code5}</code>
                </pre>
                <p>
                    That is beauty. Observe that we are not exposing the set state function, therefore the custom hook
                    owns all the control of the state change. Now, anyone using this hook can not mess with the state.
                    It is not possible for this state to transition to a non-sense state like a string or a date.
                    Also the usage is more semantic. The intent of the code can be read easily from the code itself.
                    The code is self-documenting.
                </p>
                <pre><code className="language-jsx">{code.code6}</code></pre>
            </section>

            <section>
                <h2>The fetch data case</h2>
                <p>
                    Hooks are often used to fetch data. And not just the state hook, but in cooperation with the
                    effect hook. The anatomy of a fetch in react is something like:
                </p>
                <pre><code className="language-jsx">{code.code7}</code></pre>
                <p>
                    The idea is that, given some change in the inputs of the fetch (e.g. the user has changed a filter)
                    the effect hook is going to trigger, requesting the data with the new params, setting the response
                    state after request completion and triggering a new rerender with the new data. It is simple, and
                    effective (hands up for that joke). But we can do better.
                </p>
                <p>
                    In order to end with a neat solution, let's reduce the scope and focus on get requests, so all
                    the data is encoded in the url. We'll come to that later. Let's say we want to fetch data from
                    this <a href="https://date.nager.at/Api" target="_blank">holiday API (Nager.Date)</a>. The code is
                    quite stright forward given the previous code fragment.
                </p>
                <pre><code className="language-jsx">{code.code7_1}</code></pre>
                <p>
                    With that said, let's start build the custom hook(s), because there is going to be more than one.
                    First, we can wrap it right away, and use it in the component. That helps a lot in the readability
                    of the component.
                </p>
                <pre><code className="language-jsx">{code.code7_2}</code></pre>
                <p>
                    But let's be honest. This call to get holidays is not going to be used all around the code. So
                    we'll have to copy-paste this hook for other urls... Well no. We can modularise even further
                    the hooks. For example, this is the url-aware version of the hook:
                </p>
                <pre><code className="language-jsx">{code.code8}</code></pre>
                <p>
                    And with that fully reusable hook for all get requests we may do we can rewrite our original hook,
                    that now looks quite clean. Use holidays? well that is the url, just delegate to the next hook manage
                    that.
                </p>
                <pre><code className="language-jsx">{code.code8_1}</code></pre>
                <p>
                    After that our hook-side of the app is more reusable, usable and also testable. For example,
                    Testing the useHolidays hook now is terribly simple. Just mock the useGet hook and check that we are
                    using the correct url.
                </p>
                <p>
                    We are going to stop this example here, because we just wanted to proof the concept of custom hooks.
                    But this example can be extended way beyond what we have done. For example, we could add a loading
                    flag, a reload action, the rest of HTTP methods, a body payload, authentication tokens (possibly
                    via an auth token provided by a custom hook), and well, whatever we may need. A complete, yet complex,
                    example is the useAxios hook from Axios library. Check the source code <a target="_blank" href="https://github.com/simoneb/axios-hooks/blob/master/src/index.js">
                    here</a>.
                </p>
            </section>
            <section>
                <h2>Conclusion</h2>
                <p>
                    Conclusions are short. State and state mutation isolation, code reusability and usability.
                    Those are the three goals we can accomplish with well design custom hooks. Don't let your
                    hooks to spagettify.
                </p>
            </section>
        </Article>
    </PageView>)
}
