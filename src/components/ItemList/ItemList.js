import React from "react";
import Item from "../Item/Item";

function ItemList(props) {
    console.log("Itmems list props", props);
    return (
        <div className="list-group">
            {props.items.map(i => <Item key={i.id} title={i.ip} subtitle={i.name} time={i.lastActivity}/>)}
        </div>
    );
}

export default ItemList;