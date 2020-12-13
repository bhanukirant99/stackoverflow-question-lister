import React, { useState, useEffect } from 'react'
import './App.css';
import QuestionCard from './components/QuestionCard'
import Response from './response'
// import { useStateValue } from './StateProvider';
import InfiniteScroll from "react-infinite-scroll-component";

const useFetch = (pageNo, getMore) => {
  const [fetchedItems, setFetchedItems]= useState([]);
  const [hasMore, setHasMore]= useState(false);
  // const [quotaReamining, setQuotaReamining] = useState(0);

  useEffect(async () => {
    const response = await fetch(`https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=${pageNo}`);
    const resData = await response.json();
    pageNo.value += 1;
    setFetchedItems(resData.items);
    setHasMore(resData.has_more);
    // setQuotaReamining(resData.quota_remaining);
  }, [getMore]);
  return {fetchedItems, hasMore}
}

export default () => {
  const data = Response
  const [input, setInput] = useState('');
  // const [{items}, dispatch] = useStateValue()
  const [currentItems, setCurrentItems]= useState({});
  // const [hasMore, setHasMore]= useState(false);
  const [getMore, setGetMore]= useState(true);
  const pageNo = 1

  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };

  
  // console.log("hasMore: "+ hasMore)
  console.log(currentItems)
  // console.log(typeof(currentItems))

  // const addToBasket = () => {
  //     // console.log(basket)
  //     dispatch({
  //         type: "ADD_TO_ITEMS",
  //         item: {
  //             id: id,
  //             title: title,
  //             image: image,
  //             price: price,
  //             rating: rating,
  //         },
  //     });
  // };

  const fetchMoreData = () => {
    if (!getMore) {
      setGetMore(false)
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      const {fetchedItems, hasMore} = useFetch(pageNo, getMore)
      setGetMore(hasMore)
      setCurrentItems([...currentItems, fetchedItems])
    }, 1);
  };

  return (
    <div className="app">
      <div className="searchBar">
        <input className='searchBarInput' value={input} onChange={e => setInput(e.target.value)} placeholder='Search'/>
      </div>
      <div className="questionCards">
        <InfiniteScroll
          dataLength={currentItems.length}
          next={fetchMoreData}
          hasMore={getMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {currentItems?.map(item => (
          <QuestionCard profilePicture=
            {item.owner.profile_image} 
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
        ))}
        </InfiniteScroll>
        {/* {currentItems && currentItems?.map(item => (
          <QuestionCard profilePicture=
            {item.owner.profile_image} 
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
}