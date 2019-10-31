import React, {useEffect,useState}from 'react';
import axios from 'axios';
//const apiKey = "2PguwmDGdo6UNhzofuq466bBqZ4dFN6t8oOnDNfg"

export default function Home(props){
  const [error,isError] = useState(false);
  const [sucess, isSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')



function queryCrimeAPI(){
var request = require('request');
   request({
        method: 'GET',
        url:`https://api.crimeometer.com/v1/incidents/raw-data?lat=40.730610&lon=-73.935242&distance=10mi&datetime_ini=1997-07-22T10:00:45.000Z&datetime_end=2019-09-26T10:00:30.000Z&page=2`,
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '2PguwmDGdo6UNhzofuq466bBqZ4dFN6t8oOnDNfg'
        }
      },//end of axios.get object
   function (response,body) {
     console.log('Status:', body.statusCode);
     //console.log('Headers:', JSON.stringify(response.headers));
     console.log('response',response);
     console.log('Response: ', body);

     if(body.status !==200){
       isError(true);
       setErrorMessage(`${body.statusCode}: ${'Error'}`);
     }else{
       isSuccess(true);
     }
     return response
     return body
  });
   

}//end of query function

queryCrimeAPI();

return(
  <h1>Checking what is being displayed in the console</h1>
)




} //end of export default function Home
