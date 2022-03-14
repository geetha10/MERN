import React from 'react'
import boxStyle from './box.module.css'

function BoxesContainer(props) {
    const boxList=props.boxList;
    return (
        <div >
            <p>BoxContainer</p>
            <p>{JSON.stringify(boxList)}</p>
            <div className={boxStyle.box} >
            {
                boxList.map((box, i) =>{
                    let style={backgroundColor: box.color, width:(box.size+"px"), height:(box.size+"px"), margin:"15px"} 
                    return(
                        <div key={i} style={style}> 
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default BoxesContainer