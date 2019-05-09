import React from "react";
import Item from "../Item/Item";

function ItemList(props) {
    return (
        <div className="list-group">
            {props.items.map(i => <Item key={i.id} title={i.title} subtitle={i.subtitle} time={i.time}/>)}
        </div>
    );
}

export default ItemList;