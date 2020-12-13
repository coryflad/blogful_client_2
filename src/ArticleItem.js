import React from 'react'

function ArticleItem(props) {
    return (
        <li className='articleItem'>
            <h2>Title: {props.item.title}</h2>
            <h3>Style: {props.item.style}</h3>
            <p>Content: {props.item.content}</p>
            <button
                type='button'
                onClick={() => props.onDeleteItem(props.item)}>
                Delete Article
                </button>
        </li>
    )
}

ArticleItem.defaultProps = {
    item: {}
}

export default ArticleItem