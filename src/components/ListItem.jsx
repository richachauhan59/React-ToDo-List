import React from 'react'
import './ListItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default function ListItems(props){
    const items = props.items
    const ListItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input
                type="text"
                id={item.key}
                value={item.text}
                onChange={(e) => props.EditItem(e.target.value, item.key)}
                />

            <span>
                <FontAwesomeIcon 
                onClick={() => props.deleteItem(item.key)} 
                className="faicon" icon="trash" />
            </span>
            
            </p>
        </div>
    })
    
    return (
        <div>
            {ListItems}
        </div>
    )
}