let lang = "hi";
let currency = "INR"; 
const apiKeyContry = "5b7f971fc9a6b16fcab2caa20fd6dc29";
let request=new XMLHttpRequest();

const fetchCountry = (lang) => {
    request.open('Get','http://api.countrylayer.com/v2/lang/'+lang+'?access_key='+apiKeyContry);
    request.send();
    request.onload=function(){   
        document.write("***Start fetch contry using language*** <br>");
        let data = JSON.parse(this.response);    
        for(let i in data){
            document.write(data[i].name+" <br>");
        } 

        document.write("***End fetch contry using language***");
    }
}
fetchCountry(lang);

const fetchCurrency = (currency) => {
    request.open('Get','http://api.countrylayer.com/v2/currency/'+currency+'?access_key='+apiKeyContry);
    request.send();
    request.onload=function(){   
        console.log("***Start fetch contry using currency***");
        let data = JSON.parse(this.response);    
        for(let i in data){
            document.write(data[i].name+" <br>");
        } 
        console.log("***End fetch contry using currency***");
    }
};
fetchCurrency(currency);