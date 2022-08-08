import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])
  // const [image, setImage] = useState('')

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch(() => console.log('Something went wrong with quote fetching.'))
  }, [])

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  //     },
  //   }

  //   fetch(
  //     'https://api.unsplash.com//photos/random?orientation=landscape',
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setImage(data))
  //     .catch(() => console.log('Something went wrong with image fetching.'))
  // }, [])

  // if (quotes.length === 0 || image === '') {
  if (quotes.length === 0) {
    return <p>Loading...</p>
  } else {
    const randomNumber = () => {
      const total = quotes.length
      return Math.floor(Math.random() * total)
    }

    const randomQuote = () => {
      const num = randomNumber()
      return quotes[num]
    }

    const quote = randomQuote()

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Quote of the day</h1>

        <blockquote>
          <h2>{quote.text}</h2>
          <footer>{quote.author || 'Unknown'}</footer>
        </blockquote>

        <img
          src="https://images.unsplash.com/photo-1579294800821-694d95e86143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="From Unsplash"
          style={{ width: '100vw' }}
        />
      </div>
    )
  }
}

export default App
