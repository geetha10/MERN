import React, {Component} from "react";

class ListComponent extends Component{

    render(){
        const list=this.props.toDoList;
        return (
            <div>
                <h3>Things I need to do:</h3>
                {
                    list.map((a, i) => {
                        return (
                            <div key={i}>
                                <li>{i+1} - {a}</li>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default ListComponent;