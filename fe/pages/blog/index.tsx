import {blogLabels, rootPage} from "../../src/data";
import {blogPages} from "../../src/data";
import Grid from "../../src/comps/layout/Grid";
import PageCard from "../../src/comps/card/PageCard";
import React, {useCallback, useState} from "react";
import {BlogPage} from "../../src/types";
import InputText from "../../src/comps/input/InputText";
import PageView from "../../src/comps/layout/PageView";
import Card from "../../src/comps/card/Card";

const blogSearchScore = (blogPage:BlogPage, search:string):number => {
  const words = search.toLowerCase().split(' ');
  const matchingWordsInTitle = words.filter(word => blogPage.title.toLowerCase().includes(word)).length;
  const matchingWordsInDescription = words.filter(word => blogPage.description.toLowerCase().includes(word)).length;
  return matchingWordsInTitle * 2 + matchingWordsInDescription;
}
const blogPage = rootPage('Blog');


export default function Blog() {
  const [search, setSearch] = useState('');
  const [labels, setLabels] = useState(blogLabels.reduce((prev, next) => ({...prev, [next]:true}), {}));
  const cleanSearch = React.useCallback(() => setSearch(''), [setSearch]);
  const switchLabels = useCallback((text) => {
      labels[text] = !labels[text];
      setLabels({...labels});
  }, [labels, setLabels]);
  let results = blogPages;
  if (search.length > 0) {
    const searchResults = results.map(x => ({
        ...x,
      score: blogSearchScore(x, search),
    })).filter(x => x.score > 0);
    searchResults.sort((a,b) => b.score - a.score);
    results = searchResults;
  }
    results = results.filter(x => x.labels.some(label => labels[label]));
    return (<PageView>
      <InputText placeholder="Search here" type="text" onChange={e => setSearch(e.target.value)} value={search} />

      <Grid>
        {results.map(blogPage => <PageCard page={blogPage} key={blogPage.href} noDescription /> )}
        {results.length !== blogPages.length && (<Card title="Maybe remove filters?" description="Click here to remove the search" onClick={cleanSearch} />)}
      </Grid>
  </PageView>)
}
