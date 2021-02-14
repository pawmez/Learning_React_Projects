import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const {isLoading, hits} = useGlobalContext();

  if(isLoading) {
    return <div className="loading"></div>
  }
  return <section className="stories">
    {hits.map((story)=>{
      const {objectID:id,title,num_comments,url,points,author} = story
      console.log(story);
      return <article key={id} className="story">
        <h4 className="title">{title}</h4>
      </article>
    })}
  </section>
}

export default Stories
