function BasketItem (props) {
const {id,
    name,
    price,
    quantity,
     removeFromBasket = Function.prototype, 
     addQuantity = Function.prototype, 
     decQuantity = Function.prototype} = props

return <li className="collection-item">
    {name} <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i> x {quantity} <i className="material-icons basket-quantity" onClick={() => addQuantity(id)}>add</i> = {price * quantity}
    <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
        </span>
    
    </li>


}

export {BasketItem}