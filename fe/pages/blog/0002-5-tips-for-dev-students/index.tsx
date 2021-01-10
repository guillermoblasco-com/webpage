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
                <h2>3. The first team you'll work with is critical</h2>
                <p>
                    There are no definite answers for the question "Which is the best company to work at?". At the end
                    it is a personal decision, not just professional. However some general rules may make sense.
                    Surprisingly or unsurprisingly, on one hand most of the learning you'll get will be by the expertise of the
                    team that is around you. On the other hand you'll learn a lot by doing things you never did before.
                    So you may want an environment which provides you of challenges and a team which will support you
                    while facing those challenges. Where are those companies? Don't know, but usually they share some
                    traits. And since it is quite difficult to stand those traits, I'll just rush some thoughts I have.
                    Consider anyhow that 90% depends on the team members, regardless of the type of company. So, here
                    we are just adjusting a 10% as much. But is the upfront 10% we can do before landing on a company.
                </p>
                <p>
                    They are not big corporate companies usually. The reality is that most corporate big companies
                    focus on reliability and continuity, therefore the belt is quite tight on letting juniors challenge
                    themselves in doing things they never did before. Nonetheless corporate companies may have great
                    professionals that have faced large scale challenges.
                </p>
                <p>
                    They are not super small startups. Well, you can learn a lot in a seed startup. But at least check
                    that there are three or four devs (and some of them are seniors). To address the startup conversation:
                    you can face a lot of challenges in a startup and generally juniors that may take ownership on
                    those challenges are very very welcome. The point is that probably it will be easier and safer for
                    you to start in a series A startup (like 30-50 employees) rather than in a seed startup of 3-4
                    friends.
                </p>
                <p>
                    Outsourcing companies are, in my honest opinion, a great choice. I started there. You'll be able to
                    move between projects, that may be diverse in technologies and purpose. Just take care of avoid
                    those mass production outsourcing firms that don't pay attention to quality :)
                </p>
            </section>
            <section>
                <h2>4. Teaching is a powerful tool for learning</h2>
                <p>
                    Some time ago I've discovered that teaching helps a lot to consolidate knowledge. We'll touch the
                    how after we see the why. And the why is quite... ethereal. And by ethereal I want to say that
                    I don't have any concrete nor logic nor scientific reasoning of the why, but definitely when you
                    teach you feel it. There are two points. The first is having to explain some knowledge, this
                    process reinforces that knowledge and will hardwire it into your neurons. The second is because
                    most of the times we learn the hows and whats, but not the whys. When we are rushing to deliver a
                    project meanwhile learning a new framework, there are many things that you learn how to do it
                    but not why it has to be done that way. And probably you'll not going to come back to that
                    to understand the why. That happens a lot with our beloved Stack Overflow. "WTF this error, I'm
                    searching that in google. Oh, Stack overflow. Oh I see, there is the fix. Copy-paste." And it is
                    fixed, but if you didn't took 5 minutes to read it and understand it, you didn't get the why. And
                    the great point of students (not all, but some) is that they are going to ask you the why, and
                    you'll feel sometimes that you don't know why, forcing yourself to revisit that knowledge and truly
                    learn it.
                </p>
                <p>
                    But, as a junior how can you even teach? Well, the day after ending a bootcamp is somewhat risky.
                    Nonetheless, after few months, once you feel a little secure on programming there are three ways.
                    And here we are going to try to think a little out of the box.
                </p>
                <p>
                    The most personal is to assist and help other juniors in your team. For example, whenever a new
                    junior joins the team propose yourself to onboard her or him in the project. This new member will
                    need help setting up the project, configuring stuff, understanding the database, apis, components,
                    services, following the code guidelines. There are many things you can help with, just remember
                    the first months at the company and all the challenges you had to overcome. That is exactly the help
                    you can provide, and definitely that will help you to understand better the hows and whys of all those
                    matters.
                    Remember that as junior
                    developer probably you are not really experienced in programming therefore you may find yourself
                    in the situation of teaching to an equal (that is, another junior). This might be called helping
                    or assisting or co-learning instead of teaching depending on the roles and experience that each one
                    may have. Anyhow, when playing that role with an equal never downplay the knowhow of the other part.
                    Probably in that case "teaching" is a too strong word, "helping to learn" is a more suitable concept.
                </p>
                <p>
                    The most obvious way is to find some place where you can formally teach. That may be a university
                    or a bootcamp. The role you are looking for is associate teacher on universities and teaching
                    assistant in bootcamps, although the role may take many other names. Being programming university
                    classes and programming bootcamps really different they both need teachers to assist the students
                    during the practice. Usually that is during the "hands-on" classrooms or "laboratories". Every place
                    has its own way to do it, but mostly all do. Also here you'll have the chance to earn some extra
                    money. And finally, in universities you'll find a wider scope of knowledge, like subjects specific
                    on databases, or operative systems; bootcamps have some day dedicated to databases and operative
                    systems, but not entire three month long subjects.
                </p>
                <p>
                    The most autonomous way is to create content! Teaching is usually understood as something active:
                    "I am teaching you whatever knowledge". But it has not to be that way. Teaching is helping other
                    learning. And the goal of that is to understand better something by forcing yourself to having to
                    explain it to others. That can be accomplished by just writing a post on "How to do X with Y", or
                    a video, or a live coding, whatever. The good point of that is that you can teach whatever motivates
                    you. You are not tied to a team, nor a company, nor a teaching institution. Do you want to explain
                    how to start an assembler project? Well, no one will be on your way to forbid it.
                </p>
            </section>
            <section>
                <h2>5. Software development is not only about programming</h2>
                <p>
                    Being skillful in programming is just one requirement, the entry requirement, the obvious one.
                    And to be honest, the more skillful the better, it is still a requirement. But it is not the only
                    one. That's something that after the first three months you'll realise, and many readers will nod
                    their heads while reading that. You'll need (at least) one more skill to be a successful dev:
                    teamwork.
                </p>
                <p>
                    Developers rarely work alone. Developers work in a development team, usually between 3 to 6 devs,
                    and possibly with other roles (QA, DevOps, Product, designers, ...). And this teamwork is not
                    any teamwork, because if there is something popular nowadays in tech are agile methodologies. Indeed
                    this teamwork can be split in three themes: methodology, processes, teamwork per-se.
                </p>
                <p>
                    Agile methodologies are a set of processes, roles and goals to let teams deliver more value, faster
                    in a predictable manner. There are two big agile methodologies: Scrum and Kanban, and its derivatives
                    (like SAFE) and some others. They are not rocket science, you'll learn it and get used to. But it is
                    never late to do some online course about those methodologies to learn the what, how and why.
                </p>
                <p>
                    Also a dev team has many processes that involve many people, and each team may have their owns
                    processes. Again, you'll learn them, but if you have the chance to have some experience before
                    that would be great. Some processes are pair programming, code review, pull requests (yes, PRs are
                    a process), merging code, reading other's code, fixing bugs of other's code, and others fixing bugs
                    on your code, ... Let's say that since the codebase is shared, there are many processes to bring
                    some order into the mess that is everyone changing the "same" codebase.
                </p>
                <p>
                    And finally as any team, you'll have to deal with human things. Like support others, being supported,
                    managing conflicts, being managed, manage others. The point is that the vision of the lonely developer
                    in a garage is almost non-existent. And if you like teamwork, then you'll like that job a lot.
                </p>
            </section>
        </Article>
    </PageView>)
}
