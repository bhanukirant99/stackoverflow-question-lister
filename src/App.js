import React, { useState } from 'react'
import './App.css';
import QuestionCard from './components/QuestionCard'
import QuestionDetailCard from './components/QuestionDetailCard'
import Model from 'react-model'

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false)

  return (
    <div className="app">
                  <QuestionCard />
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
