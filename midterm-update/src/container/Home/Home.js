import React, {useEffect,useState}from 'react';
import axios from 'axios';
import Pour from './images/Pour.jpg';
//const apiKey = "2PguwmDGdo6UNhzofuq466bBqZ4dFN6t8oOnDNfg"

export default function Home(props){
  const [error,isError] = useState(false);
  const [sucess, isSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')
  const [cocktail,setCockTail] = useState('');
  const [drinkDescription, setDrinkDescription] = useState('');
  const [entireCockTail, setEntireCocktail] = useState('');
  const [isErrorTwo, setIsErrorTwo] = useState(false);
  const [successTwo, setSuccessTwo] = useState(true);
  const [errorMessageTwo, setErrorMessageTwo] = useState('');
  const [youtubeId,setYoutubeId] = useState('');
  const [myQrCode,setQrCode] = useState('');

function queryDrinkAPI(drink){

   axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${drink}`)//end of axios.get object
    .then(function(response) {
     console.log('Status:', response.status);
     console.log('response',response);
     if(response.status !==200){
       isError(true);
       setErrorMessage(`${response.status}: ${'Error'}`);
     }else{
       isSuccess(true);
     }
     setEntireCocktail(response);
     return response


  })
  .catch(function(error) {
  console.log('error: ',error);
  return error;
});

}//end of query function

function queryQRCode(){
  axios.get('http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100')
  .then(function(response) {
  	console.log("New response for QR: ",response);
    console.log('Status: ', response.status)
    if(response.status != 200){
      isErrorTwo(true);
      setIsErrorTwo(`${response.status}: ${'Error'}`);
    }else{
      successTwo(true);
    }
    setQrCode(response);
    return response
  })
  .catch(function(error) {
  	console.log('error: ',error);
    return error;
  });
}


queryQRCode();





function requeryAPI(){
  let inputvalue = document.querySelector('#drink-input').value
  setCockTail(inputvalue);
  queryDrinkAPI(inputvalue);
  console.log("Hopefully this works: ", cocktail);
}

useEffect(() =>{
const drinkDescription =  entireCockTail.data ? entireCockTail.data.ingredients[0].strIngredient: "";
setDrinkDescription(drinkDescription)
console.log("I have no idea if this will display drinktype: ",cocktail)
console.log("Lets pray: ", drinkDescription)
},[entireCockTail]);



//console.log(cocktail.data.ingredients[1].strIngredient)
//console.log("This might work: ",entireCockTail.data.ingredients[1].strIngredient)
return(
  <div className="App">
    <img className="pour_size"src={Pour}/>
    <div className="button" >
    <h1>Welcome to Cocktail Guru! Please type in a drink!</h1>
    <input id="drink-input" type="text"/>
    <button onClick ={ () => requeryAPI() }>Drink Responsibly;)</button>
    </div>

    <div className="ingredients_info">
    <div className="ingredient_child">
    <h1>{cocktail}</h1>
    <p>{cocktail} is a type of: {entireCockTail.data ? entireCockTail.data.ingredients[0].strType: ""}</p>
    <p>Is {cocktail} an alcoholic beverage? {entireCockTail.data ? entireCockTail.data.ingredients[0].strAlcohol: ""}</p>
    <p>A little bit more about {cocktail}: {entireCockTail.data ? entireCockTail.data.ingredients[0].strDescription: ""}</p>
    </div>
    </div>
    <div className="qrText">
    <h2>{myQrCode}</h2>
    <h2>Use this QR code to get a discount on our bartending gear!</h2>
    <img id="qr_code" src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="" title="" />
    </div>
  </div>
)




} //end of export default function Home
