import './App.css';
import Form from './components/Form';
import { useState } from 'react'
import axios from 'axios'
const App = ()=>{
  const [happiness, setHappiness] = useState(9)
  const [health, setHealth] = useState(9)
  const [productivity, setProductivity] = useState(9)

  const [tags, setTags] = useState('')

  const updateHappiness = (e)=>{
    setHappiness(e.target.value)
    console.log(e.target.value)
  }

  const updateHealth = (e)=>{
    setHealth(e.target.value)
  }

  const updateProductivity = (e)=>{
    setProductivity(e.target.value)
  }

  const updateTags = (e)=>{
    setTags(e.target.value)
    console.log(e.target.value)
  }

  const submit = async ()=>{

    const fieldData = {
      happiness: happiness,
      health: health,
      productivity: productivity,
      tags: tags
    }

    const res = await axios.post('https://amihappy.herokuapp.com', fieldData)
    
    if(res.status === 200)
      alert('Created Status')
    else
      alert('Failed to Create Status')
    
  }
  return (
    <div className="
      bg-yellow-300 h-screen
      flex flex-row
      lg:flex-col
      justify-center items-center
    ">
      <Form 
        actions = {[
          updateHappiness,
          updateHealth,
          updateProductivity,
          updateTags
        ]}
        tags= {tags}
        submit= {submit}
      />
    </div>
  );
}

export default App;
