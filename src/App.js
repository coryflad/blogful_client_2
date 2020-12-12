import React from 'react'

import AddItemForm from './AddItemForm'
import ShoppingList from './ShoppingList'

class App extends React.Component {

  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false }
    ]
  }


  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <section>
          <AddItemForm />
        </section>
        <section>
          <ShoppingList items={this.state.shoppingItems} />
        </section>
      </>
    )
  }
}

export default App