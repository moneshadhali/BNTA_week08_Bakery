const Cake = ({cakeName, ingredients, price, rating,itemSold, onButtonClick}) => {
    const createIngredients = (ingredients) => {
        ingredients.map((ingredient) => {
            return(
                <li>{ingredient}</li>
            )
        })
    }
    const handleSaleOfCake = () => {
        onButtonClick(itemSold+1);
    }
    return ( 
        <>
            <h2>Cake name: {cakeName} </h2>
            <p>Ingredients:</p>
            {/* <ul>{createIngredients}</ul> */}
            <p>price: {price}</p>
            <p>rating: {rating}</p>
            <p>Item Sold: {itemSold}</p>
            <button onClick={handleSaleOfCake}>Sell Item</button>
        </>
    );
}
 
export default Cake;