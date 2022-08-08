import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch(() => console.log('Something went wrong...'))
  }, [])

  if (quotes.length === 0) {
    return <p>Loading...</p>
  } else {
    const randomNumber = () => {
      const total = quotes.length
      return Math.floor(Math.random() * total) + 1
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
      </div>
    )
  }
}

export default App
