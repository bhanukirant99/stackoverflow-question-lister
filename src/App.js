import React, { useState, useEffect } from 'react'
import './App.css';
import QuestionCard from './components/QuestionCard'
import Response from './response'
// import { useStateValue } from './StateProvider';
import InfiniteScroll from "react-infinite-scroll-component";

export default() => {
  const data = Response
  const items = 1
  const [input, setInput] = useState('');
  const [currentItems, setCurrentItems] = useState();
  // const [hasMore, setHasMore] = useState(true);
  const [NumberOfItems, setNumberOfItems] = useState(items)
  // const [fetchedItems, setFetchedItems]= useState([]);
  // const [getMore, setGetMore]= useState(true);

  useEffect(async () => {
    const response = await fetch(`https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=1`);
    const resData = await response.json();
    console.log(resData.itemd)
    // pageNo += 1;
    const [items] = resData.items
    setCurrentItems(resData.items)
    // setCurrentItems([...currentItems, resData.items.map(item => {
    //   return {
    //     item  
    //   }
    // })])
    // setCurrentItems(currentItems => currentItems.map(item => ({...item, {
    //   tags: item.tags,
    //   owner: item.owner,
    //   is_answered: item.is_answered,
    //   view_count: item.view_count,
    //   score: item.score,
    //   creation_date: item.creation_date,
    //   link: item.link,
    //   title: item.title,
    // }})));
    // resData.items.map(item => {
    //   setCurrentItems([...currentItems, {
    //     tags: item.tags,
    //     owner: item.owner,
    //     is_answered: item.is_answered,
    //     view_count: item.view_count,
    //     score: item.score,
    //     creation_date: item.creation_date,
    //     link: item.link,
    //     title: item.title,
    //   }])
    // })
    // resData.items.map(item => {
    //     console.log( {
    //       tags: item.tags,
    //       owner: item.owner,
    //       is_answered: item.is_answered,
    //       view_count: item.view_count,
    //       score: item.score,
    //       creation_date: item.creation_date,
    //       link: item.link,
    //       title: item.title,
    //     })
    //   })
  }, []);

  // while (hasMore) {
  //   const getData = async() => {
  //     const response = await fetch(`https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=${pageNo}`);
  //     const resData = await response.json();
  //     const [items] = await resData.items;
  //     console.log(resData.items);
  //     console.log(resData)
  //     const success = await setCurrentItems(resData.items)
  //     setHasMore(resData.has_more);
  //     // setQuotaReamining(resData.quota_remaining);
  //   }
  //   pageNo += 1;
  //   getData()
  // }

  console.log("currentitems: ", currentItems)
  
//   const useFetch = (pageNo, getMore) => {
//   const [fetchedItems, setFetchedItems]= useState([]);
//   const [hasMore, setHasMore]= useState(false);
//   // const [quotaReamining, setQuotaReamining] = useState(0);

//   useEffect(async () => {
//     const response = await fetch(`https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=${pageNo}`);
//     const resData = await response.json();
//     pageNo.value += 1;
//     setFetchedItems(resData.items);
//     setHasMore(resData.has_more);
//     // setQuotaReamining(resData.quota_remaining);
//   }, [getMore]);
//   return {fetchedItems, hasMore}
// }
  
  // const fetchMoreData = () => {
  //   if (!hasMore) {
  //     return;
  //   }
  //   if (currentItems.length >= 30) {
  //     setHasMore(false);
  //     return;
  //   }
  //   // a fake async api call like which sends
  //   // 20 more records in .5 secs
  //   setTimeout(() => {
  //     setCurrentItems()
  //     this.setState({
  //       items: this.state.items.concat(Array.from({ length: 20 }))
  //     });
  //   }, 500);
  // }

  return (
    <div className="app">
      <div className="searchBar">
        <input className='searchBarInput' value={input} onChange={e => setInput(e.target.value)} placeholder='Search'/>
      </div>
      <div className="questionCards">
        <InfiniteScroll
          dataLength={currentItems?.length || 0}
          next={() => (
            setNumberOfItems(items+1)
          )}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
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