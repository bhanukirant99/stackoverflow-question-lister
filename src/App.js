import React, { useState, useEffect } from 'react'
import './App.css';
import QuestionCard from './components/QuestionCard'
import Response from './response'
import { useStateValue } from './StateProvider';
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const data = Response
  const [input, setInput] = useState('');
  const [{items}, dispatch] = useStateValue()
  const [currentItems, setCurrentItems]= useState([]);
  const [hasMore, setHasMore]= useState([data.items]);
  let pageNo = 1;

  useEffect(() => {
    while (pageNo) {
      pageNo+=1;
      fetch(`https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=${pageNo}`)
      .then(res => res.json())
      .then(
        (result) => {
          setCurrentItems({
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  }, []);
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
    if (currentItems.length >= 500) {
      setHasMore(false)
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setCurrentItems(currentItems.concat(Array.from({ length: 20 })))
    }, 500);
  };

  return (
    <div className="app">
      <div className="searchBar">
        <input className='searchBarInput' value={input} onChange={e => setInput(e.target.value)} placeholder='Search'/>
      </div>
      <div className="questionCards">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        />
        {/* {currentItems?.map(item => (
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
        {data.items?.map(item => (
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
      </div>
    </div>
  );
}

export default App;
