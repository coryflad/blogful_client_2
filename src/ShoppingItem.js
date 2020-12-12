import React from 'react'

function ShoppingItem(props) {
    return (
        <li>
            <h2 style={{
                textDecoration: props.item.checked ? 'line-through' : null
            }}>
                {props.item.name}
            </h2>
            <button type='button'>check</button>
            <button type='button'>delete</button>
        </li>
    )
}

ShoppingItem.defaultProps = {
    items: []
}

export default ShoppingItem