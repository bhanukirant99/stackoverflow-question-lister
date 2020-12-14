import React, { useState, useEffect } from 'react'
import './App.css';
import QuestionCard from './components/QuestionCard'
import Response from './response'
import InfiniteScroll from "react-infinite-scroll-component";

export default() => {
  const data = Response
  const pageNo = 1
  const [input, setInput] = useState('');
  const [currentItems, setCurrentItems] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [currentPageNo, setCurrentPageNo] = useState(pageNo)

  useEffect(async () => {
    const response = await fetch(`https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=${currentPageNo}`);
    const resData = await response.json();
    setCurrentPageNo(currentPageNo + 1)
    console.log(resData.itemd)
    // pageNo += 1;
    const [items] = resData.items
    setCurrentItems(resData.items)
    setHasMore(resData.has_more)
  }, []);

  console.log("currentitems: ", currentItems)

  const getMoreItems = async() => {
    const response = await fetch(`https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=${currentPageNo}`);
    const resData = await response.json();
    setCurrentPageNo(currentPageNo + 1)
    resData.items.map(item => {
      setCurrentItems([...currentItems, item])
    })
    setHasMore(resData.has_more)
  }

  return (
    <div className="app">
      <div className="searchBar">
        <input className='searchBarInput' value={input} onChange={e => setInput(e.target.value)} placeholder='Search'/>
      </div>
      <div className="questionCards">
        <InfiniteScroll
          dataLength={currentItems?.length || 0}
          next={getMoreItems}
          hasMore={hasMore}
          loader={<h2 style={{ textAlign: "center" }}>Loading...</h2>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b><h2>Yay! You have seen it all</h2></b>
            </p>
          }
        >
          {currentItems?.map(item => (
            <QuestionCard 
              profilePicture={item.owner.profile_image} 
              reputation={item.owner.reputation} 
              userName={item.owner.display_name} 
              title={item.title} 
              upvotes={item.score} 
              tags={item.tags} 
              link={item.link}
              views={item.view_count} 
              askedAt={item.creation_date} 
              isAnswered={item.is_answered}
            />
          ))}
        </InfiniteScroll>
        {/* {currentItems && currentItems?.map(item => (
          <QuestionCard 
            profilePicture={item.owner.profile_image} 
            reputation={item.owner.reputation} 
            userName={item.owner.display_name} 
            title={item.title} 
            upvotes={item.score} 
            tags={item.tags} 
            link={item.link}
            views={item.view_count} 
            askedAt={item.creation_date} 
            answerCount={item.answer_count}
          />
        ))} */}
      </div>
    </div>
  );
};