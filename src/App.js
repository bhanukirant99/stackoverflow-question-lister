import React, { useState } from 'react'
import './App.css';
import QuestionCard from './components/QuestionCard'
import Response from './response'
import { useStateValue } from './StateProvider';
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [input, setInput] = useState('');
  const [{items}, dispatch] = useStateValue()

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

  const data = Response
  return (
    <div className="app">
      <div className="searchBar">
        <input className='searchBarInput' value={input} onChange={e => setInput(e.target.value)} placeholder='Search'/>
      </div>
      <div className="questionCards">
        
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
