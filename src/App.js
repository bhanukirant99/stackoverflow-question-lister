import React, { useState } from 'react'
import './App.css';
import QuestionCard from './components/QuestionCard'
import QuestionDetailCard from './components/QuestionDetailCard'
import Model from 'react-model'
import Response from './response'
import SearchIcon from '@material-ui/icons/Search';

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [input, setInput] = useState('');

  const data = Response
  console.log(data)
  return (
    <div className="app">
      <div className="searchBar">
        <input className='searchBarInput' value={input} onChange={e => setInput(e.target.value)} placeholder='Search'/>
      </div>
      <div className="questionCards">
        {data.items?.map(item => (
        <QuestionCard profilePicture={item.owner.profile_image} reputation={item.owner.reputation} userName={item.owner.display_name} title={item.title} upvotes={item.score} tags={item.tags}/>
      ))}
      </div>
                  {/* <QuestionDetailCard /> */}

      {/* <div  onClick={() => setIsModelOpen(true)}>
        <Model isOpen={isModelOpen} onClose={() => setIsModelOpen(false)}>
            <QuestionCard />
        </Model>
      </div> */}
    </div>
  );
}

export default App;
