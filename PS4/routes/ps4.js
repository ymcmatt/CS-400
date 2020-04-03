var express = require('express');
var router = express.Router();


const fetch = require("node-fetch");
const apiURL = "https://api.covid19api.com/total/country/us/status/confirmed";

fetch(apiURL)
.then((response)=>{
    return response.json();
})
.then((data =>{
    router.get('/', (req, res, next) => {
        // console.log(data.length)
        res.render('ps4', { cases: data[data.length-1].Cases})
    });
}))



module.exports = router;
