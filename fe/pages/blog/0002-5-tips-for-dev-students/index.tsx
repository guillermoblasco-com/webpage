import PageView from "../../../src/comps/layout/PageView";
import React from "react";
import Article from "../../../src/comps/layout/Article";

export default function BlogPost002 () {
    return (<PageView>
        <Article>
            <section>
                <p>
                    Five years have passed since I started teaching in university about business intelligence. After
                    that I teached software engineering and databases. Now I manage the teaching in a development bootcamp.
                    I saw probably the faces of few hundreds of students. Furthermore I keep the contact with few of them
                    and patterns, as always, emerge.
                </p>
            </section>
            <section>
                <h2>1. It is not about learning a language nor a framework</h2>
                <p>
                    Dev tech evolves quite fast. And by quite fast we all know that it is surprisingly fast. There are memes
                    out there in reddit joking about the amount of new js frameworks each month. And it is not just
                    frameworks and languages, it is all that surrounds it. Just to name a few things which technology
                    change: logging libraries, databases, databases drivers and clients, cloud providers, lenguage SDKs,
                    langagues, the grammar of the languages themselves, dependency management software, IDEs, ... Let's
                    say that you are stuck in 2010 programming Java 6 EE, with Eclipse IDE, good old JDBC against a MySQL 4,
                    maybe some JBoss thing, and Maven probably. Well, it is not just that after Java 6 there have been other 4 major upgrades
                    (7, 8, 11, 13-15 the latest versions) to your language, but that languages like Scala, Clojure or Kotlin
                    took off from nothing to be something (some more than others), Java is no longer the king of the mountain;
                    also your IDE as been outdated and now IntelliJ rocks, Spring Framework is dominant in Java, connecting
                    via plain JDBC is no longer cool since spring-data, and well, we may continue but you get the idea.
                </p>
                <p>
                    The knowledge of a language, framework, library or technology is going to stay in your brain
                    for as long as you train it. But its value is going to diminish over time as those techs are replaced
                    by newcomers. This fact does not cover all the knowledge involved in sofware engineering or computer
                    sciende. For example, the knowledge of data structures (a linked list, an array, a binary tree, ...)
                    is not going to be depreciated anytime soon. On the other hand, the knowledge of a commodity lib of
                    a framework of a language... probably will drop its value to zero anytime the lib, framework or language
                    get replace by another.
                </p>
                <p>
                    That reasoning leads us to three points. First, don't get married to the first language nor framework.
                    You are going to learn another and forget that one. The first language I learnt was Pascal and I no longer
                    remember most of that. Second, the true goal in your first year is not to learn a language is to learn
                    how to learn languages, learn how to learn frameworks, or at least get used to it. Third point,
                    invest time proportional to the forecasted value of the knowledge. Let's say, don't learn the internals
                    of a rusty lib at the edge of deprecation if you don't have to, instead learn data structures,
                    database design, software design, C (yes, the language). I think that learning C helps you understanding
                    all other languages, but anyhow, that is just an oppinion.
                </p>
                <p>
                    Investing your time in learning software engineering is like investing actual money. Don't feel attached
                    to your assets, learn how to invest better, and invest thinking in the potential profit and risk.
                    And I will argue that investing wisely your time is way more important than investing wisely your
                    money. There are ways to get money, but there are no ways to get back the time.
                </p>
            </section>
            <section>
                <h2>2. You can't learn to swim by just watching swimming videos</h2>
                <p>
                    I remember many years ago that I bought the Enterprise Integration Patterns book, and read it entirely
                    on one weekend. I felt empowered, trusting the knowledge given by the book, I knew I was a better
                    dev. But that is false. I met many students that were willing to learn programming or databases
                    or whatever tech subject, but didn't invest time in practicing it. Until few years later that I
                    had to apply those patterns I really didn't understood them, before that I just knew them.
                </p>
                <p>
                    Software engineering requires you to train your "muscle" memory, even if there are no muscles involved.
                    The capability to recognize problems, business logics, risks, opportunities as a patterns is something
                    that a book can not teach you. A book, or a training, or a video can help you discover that knowledge
                    or understand it better. But they will not help you master it. This muscle memory (which I know it is
                    not the correct term, but let's stick with it) is everywhere. Just to name few examples: IDE shortcuts,
                    recognise stack trace errors, common HTTP headers, code style, how to read documentation, how to write
                    documentation, which port uses by default each database and each http server, ... the list continues
                    and is really long, and most of that stuff probably you don't really need it always. I barely remember
                    HTTP codes beyond 200, 204, 404, 403, 400, 401, 500 and 503 (and that 3xx are redirects). I do know
                    that there is an HTTP code about "Too many requests", another about "Requires payment" and there is
                    one that says something about a Teapot. But I don't remember them all. I just remember the most
                    frequent, and not because I memorize them consciously. I remember them because I used them a lot. And
                    that brings some benefits. "Hey, the webpage is displaying a white screen with a error and a 503" I read
                    in Slack, and instantly I know that has something to do with the reverse proxy or the service routing.
                    Instead if I read a 500 then it is probably some issue with the backend programming itself or somewhat
                    behind the backend, like a database.
                </p>
                <p>
                    To learn swimming by just watching videos or reading books sounds impossible. Best swimmers swim everyday.
                    Best gamers play everyday. Best surgeons operate everyday. Best programmers program everyday.
                </p>
            </section>
            <section>
                <h2>3. The first company you'll work at is critical</h2>
                <p>
                    There are no definite answers for the question "Which is the best company to work at?". At the end
                    it is a personal decision, not just professional. However some general rules may make sense.
                </p>
                <p>
                    First, don't
                </p>
            </section>
            <section>
                <h2>4. Teaching is a powerful tool for learning</h2>
                <p>

                </p>
            </section>
            <section>
                <h2>5. Software development is not only about programming</h2>
            </section>
        </Article>
    </PageView>)
}
