import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      },
    }

    fetch(
      'https://api.unsplash.com//photos/random?orientation=landscape',
      options
    )
      .then((response) => response.json())
      .then((data) => setImage(data))
      .catch(() => console.log('Something went wrong with image fetching.'))

    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch(() => console.log('Something went wrong with quote fetching.'))
  }, [])

  if (quotes.length === 0 || image === '') {
    // if (quotes.length === 0) {
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
      <section>
        {console.log(image.urls.regular)}
        <div
          className="background-image"
          style={{
            // backgroundImage:
            //   'url(https://images.unsplash.com/photo-1579294800821-694d95e86143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)',
            backgroundImage: `url(${image.urls.regular})`,
          }}
        />
        <div className="quote-container">
          <div className="container quote-content">
            <h1 className="quote-title" style={{ textAlign: 'center' }}>
              Quote of the day
            </h1>

            <blockquote>
              <h2 className="quote-text">{quote.text}</h2>
              <footer className="quote-author">
                {quote.author || 'Unknown'}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
  }
}

export default App
