import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardForm from './Components/CardForm'
import Card from './Components/Card'
import Example from './Components/Example'

function App() {
  
  const addCity = (city) => {
    setCities([...cities, city])
  }
  const [cities, setCities] = useState([
    {
      id:1,
      title: "Tokyo",
      imgUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "we",
      isVisited: true
    },
    {
      id:2,
      title: "Roma",
      imgUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
      description: "we",
      isVisited: false
    },
    {
      id:3,
      title: "Parigi",
      imgUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "we",
      isVisited: true
    },
    {
      id:4,
      title: "Amsterdam",
      imgUrl: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "we",
      isVisited: false
    },

  ])
  return (
    <>
    <Example/>
    <CardForm addCity={addCity}></CardForm>
    <div className='grid grid-cols-5 gap-10'>
      {cities && cities.map((city)=>(
         <Card
         key={city.id}
         title={city.title}
         imgURL={city.imgUrl}
         isVisited={city.isVisited}
        description={city.description}
         >
         </Card>
      ))}
      </div>
    </>
  )
}

export default App
