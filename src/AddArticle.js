import React from 'react'

import './App.css'

class AddArticleForm extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        const itemName = e.target.itemName.value
        console.log(itemName)
        this.props.onAddItem(itemName)
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                    name='itemName'
                    placeholder='enter title'
                    type='text'
                />
                <button type='submit'>Add Article</button>
            </form>
        )
    }
}

export default AddArticleForm