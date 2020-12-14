import React from 'react'

import AddArticleForm from './AddArticle'
import ArticleList from './ArticleList'

import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articleItems: []
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
          return res.json().then(error => Promise.reject(error))
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

  handleDeleteItem = (item) => {
    const newItems = this.state.articleItems.filter(itm => itm !== item)
    this.setState({
      articleItems: newItems
    })
    // console.log('handleDeleteItem called', {item})
  }

  handleAddItem = (itemName ) => {
    const newItems = [
      ...this.state.articleItems,
      { title: itemName }
    ]
    console.log(newItems)
    this.setState({
      articleItems: newItems
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>Article Listings</h1>
        </header>
        <section>
          <AddArticleForm
            onAddItem={this.handleAddItem} />
        </section>
        <section>
          <ArticleList
            items={this.state.articleItems}
            onDeleteItem={this.handleDeleteItem}
          />
        </section>
      </>
    )
  }
}

export default App