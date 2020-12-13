import React from 'react'

import ArticleItem from './ArticleItem'

function ArticleList(props) {
    return (
        <ul>
            {props.items.map((item, i) => 
                <ArticleItem 
                    key={i}
                    item={item}
                    onDeleteItem={props.onDeleteItem}
                />
            )}
        </ul>
    )
}

ArticleList.defaultProps = {
    items: []
}

export default ArticleList