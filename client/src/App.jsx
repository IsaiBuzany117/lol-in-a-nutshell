import { useEffect} from 'react'
import './App.css'

function App() {


  useEffect(() => {
    fetch("https://localhost:7224/Users")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, [])


  return (
    <>
     <h1>league of legends</h1>
    </>
  )
}

export default App
