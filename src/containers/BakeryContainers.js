import { useState } from "react";
import Cake from "../components/Cake";

const BakeryContainers = () => {

    //Sold Cakes
    const [victoriaSpongeSold, setVictoriaSpongeSold] = useState(0);
    const [teaLoafSold, setTeaLoafSold] = useState(0);
    const [carrotCakeSold, setCarrotCakeSold] = useState(0);
    
    //Cake Array
    const [cakes, setCakes] = useState([
        {
            cakeName: "Victoria Sponge",
               ingredients: [
                   "eggs",
                  "butter",
                  "sugar",
                    "self-raising flour",
                  "baking powder",
                  "milk"
              ],
            price: 5,
            rating: 5
        },
        {
             cakeName: "Tea Loaf",
               ingredients: [
                   "eggs",
                  "oil",
                  "dried fruit",
                      "sugar",
                  "self-raising flour",
                  "strong tea",
              ],
              price: 2,
              rating: 3
        },
        {
             cakeName: "Carrot Cake",
               ingredients: [
                    "carrots",
                      "walnuts",
                  "oil",
                      "cream cheese",
                      "flour",
                  "sugar",
               ],
               price: 8,
               rating: 5
        }
    ]);
   
    let total = (victoriaSpongeSold*cakes[0].price) + (teaLoafSold*cakes[1].price) + (carrotCakeSold*cakes[2].price);
    let averageRating = Math.round(((cakes[0].rating+cakes[1].rating+cakes[2].rating)/cakes.length) * 100) / 100;
    
    return ( 
        <div className="container">
            <h1>Bakeries</h1>
            <div className="cakes">
                <Cake cakeName = {cakes[0].cakeName} 
                    ingredients = {cakes[0].ingredients} 
                    price = {cakes[0].price} 
                    rating = {cakes[0].rating}
                    itemSold = {victoriaSpongeSold}
                    onButtonClick = {setVictoriaSpongeSold}/>
                <Cake cakeName = {cakes[1].cakeName} 
                    ingredients = {cakes[1].ingredients} 
                    price = {cakes[1].price} 
                    rating = {cakes[1].rating}
                    itemSold = {teaLoafSold}
                    onButtonClick = {setTeaLoafSold}/>
                <Cake cakeName = {cakes[2].cakeName} 
                    ingredients = {cakes[2].ingredients} 
                    price = {cakes[2].price} 
                    rating = {cakes[2].rating}
                    itemSold = {carrotCakeSold}
                    onButtonClick = {setCarrotCakeSold}/>
            </div>
            <h4>Total Revenue of Bakery: {total}</h4>
            <h4>Average Rating of Bakery: {averageRating}</h4>
        </div>
    );
}
 
export default BakeryContainers;