import React, {useState} from 'react'
import '../../styles/ListItem.css'


export default function ListChallenge (){
    const [activeItem, setActiveItem] = useState({})
    
    const handleClick = (element) =>{
        setActiveItem(element)
    }

    const menu = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

    return(
        <ul>
            {menu.map((item, index) => (
                <li className={`btn ${activeItem === index + 1 ? 'active' : null}`}
                onClick={() => handleClick(index+1)}>
                    {item}
                    </li>
        ))}
        </ul>
    )
}