import React, { useEffect, useState } from 'react'

const App = () => {


  const [input, setinput] = useState('')
  const [searchData, setSearchData] = useState([])
  const [show, setshow] = useState(false)
  const [chache, setChache] = useState({})
  const fetchData = async () => {

    if(chache[input]){
      setSearchData(chache[input])
      console.log("DATA RETURNED FROM CHACHE : " + input);
      return
    }
    
    const data = await fetch('https://dummyjson.com/recipes/search?q='+input)
    const jsonData = await data.json()
    setSearchData(jsonData?.recipes)
    setChache((prev)=> ({...prev , [input]: jsonData?.recipes}))
    console.log("DATA RETURNED FROM SEARCH : ",input);
    
   

  }

  useEffect(() => {
    const timer = setTimeout(fetchData , 300)

    return () => {
      clearTimeout(timer)
    }
  }, [input])
  

  return (
    <div className='app'>
      <b>Autocomplete seach bar</b>
      <br />
      <input 
      onFocus={()=>setshow(true)}
      onBlur={()=>setshow(false)}
      value={input}
      onChange={(e)=>setinput(e.target.value)}
      type="text" className='input' />

    {show &&  <div className='search-container'>
        {
          searchData.map((d)=> 
          <div className='search' key={d.id}>
              {d.name}
          </div>)
        }
      </div>
      }
    </div>
  )
}

export default App
