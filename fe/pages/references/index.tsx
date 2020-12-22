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
  </PageView>)
}
