const Cake = ({cakeName, ingredients, price, rating,itemSold, onButtonClick}) => {
    
    const createIngredients = ingredients.map((ingredient, index)=>{
        return(
            <li key={index}>{ingredient}</li>
        )
    });

    const handleSaleOfCake = () => {
        onButtonClick(itemSold+1);
    }
    return ( 
        <div className="cake">
            <h3>Cake name: {cakeName} </h3>
            <p>Ingredients:</p>
            <ul>{createIngredients}</ul>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            {/* <p>Item Sold: {itemSold}</p> */}
            <button onClick={handleSaleOfCake}>Sell Cake</button>
        </div>
    );
}
 
export default Cake;