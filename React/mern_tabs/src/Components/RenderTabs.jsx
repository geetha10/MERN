import React from 'react'
import './RenderTabs.css'

function RenderTabs(props) {
    return (
        <div>
        {
            props.tabsList.map((tab,i) =>
            {
                console.log(tab)
                return(
                    <button className='tabs' key={i}>{tab.name}</button>
                )
            })
        }
        </div>
    )
}

export default RenderTabs