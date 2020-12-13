import React from 'react'

import './App.css'

class AddArticleForm extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.onAddItem(e.target.itemToAdd.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                    name='itemToAdd'
                    placeholder='enter title'
                    type='text'
                />
                <button type='submit'>Add Article</button>
            </form>
        )
    }
}

export default AddArticleForm