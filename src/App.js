import './App.css';
import QuestionCard from './QuestionCard'
import Model from 'react-model'
import { useState } from 'react'
function App() {
  const [isModelOpen, setIsModelOpen] = useState(false)

  return (
    <div className="app">
      <Model isOpen={isModelOpen} onRequestClose={() => setIsModelOpen(false)}>
        <QuestionCard onClick={() => setIsModelOpen(true)}/>
      </Model>
    </div>
  );
}

export default App;
