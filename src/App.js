import React from 'react'

import ArticleList from './ArticleList'
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articleItems: [],
      formValidationError: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/articles', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json()
            .then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(this.setArticles)
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
  }

  setArticles = articleItems => {
    this.setState({
      articleItems,
      error: null,
    })
  }

  // handleDeleteItem = (item) => {
  //   const newItems = this.state.articleItems.filter(itm => itm !== item)
  //   this.setState({
  //     articleItems: newItems
  //   })
  //   // console.log('handleDeleteItem called', {item})
  // }

  handleAddItem = (e) => {
    e.preventDefault()

    const data = {}

    const formData = new FormData(e.target)

    for (let value of formData) {
      data[value[0]] = value[1]
    }

    const { title, content, style } = data

    console.log(title, content, style)

    if (title === '') {
      console.log('title of article not entered')
      this.setState({
        formValidationError: 'Please enter title of the article!!'
      })
    }

    else if (content === '') {
      console.log('content of article not entered')
      this.setState({
        formValidationError: 'Please enter content of the article!!'
      })
    }

    else if (style === 'None') {
      console.log('style of article is not selected')
      this.setState({
        formValidationError: 'Please select a style for the article!!'
      })
    }

    else {
      this.setState({
        formValidationError: ''
      })

      const payload = { title, content, style }

      console.log(payload)

      fetch('http://localhost:8000/api/articles', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((error) => {
              throw error
            });
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          alert('Article added!')
        })

        .catch((error) => {
          this.setState({ appError: error })
        })
    }

  }

  render() {
    let showErrorOutput = ''
    if (this.state.formValidationError) {
      showErrorOutput = <div>
        <p>
          {this.state.formValidationError}
        </p>
      </div>
    }
    return (
      <>
        <header>
          <h1>Article Listings</h1>
        </header>
        <section>
          <form onSubmit={this.handleAddItem}>
            <input
              name='title'
              id='title'
              placeholder='enter title'
              type='text'
            />
            <input
              name='content'
              id='content'
              placeholder='enter content'
              type='text'
            />
            <select
              name='style'
              id='style'>
              <option value='None'>Select one...</option>
              <option defaultValue='News'>News</option>
              <option defaultValue='Story'>Story</option>
              <option defaultValue='How-to'>How-to</option>
            </select>
            <button type='submit'>Add Article</button>
            {showErrorOutput}
          </form>
        </section>
        <section>
          <ArticleList
            items={this.state.articleItems}
            // onDeleteItem={this.handleDeleteItem}
          />
        </section>
      </>
    )
  }
}

export default App