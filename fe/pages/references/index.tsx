import React from "react";
import PageView from "../../src/comps/layout/PageView";

export default function Blog() {

    return (<PageView>
        <section>
            <h3>Martin Fowler</h3>
            Don't think <a href="https://martinfowler.com/" target="_blank">Martin Fowler</a> needs
            any introduction.
        </section>
        <section>
            <h3>goto;</h3>
            <a href="https://gotopia.tech/" target="_blank">Conferences, podcasts, events</a>. Many insights.
        </section>
        <section>
            <h3>Soft Skills Engineering podcast</h3>
            <a href="https://softskills.audio/" target="_blank">The podcast by Dave Smith and Jamison Dance</a>
            where they review the soft skills required in the software engineering world.
        </section>
        <section>
            <h3>99% invisible podcast</h3>
            <a href="https://99percentinvisible.org/" target="_blank">The great podcast about design</a> by Roman
            Mars. Probably popularised outside of design communities by <a href="https://www.youtube.com/watch?v=pnv5iKB2hl4" target="_blank">this
            TED talk about flags</a>.
        </section>
  </PageView>)
}
