import {rootPages} from '../src/data';
import PageCard from "../src/comps/card/PageCard";
import Grid from "../src/comps/layout/Grid";
import PageView from "../src/comps/layout/PageView";
import React from "react";

export default function Home() {
  return (
      <PageView>
        <Grid>
          {rootPages.map(page => <PageCard page={page} key={page.href} /> )}
        </Grid>
      </PageView>
  )
}
