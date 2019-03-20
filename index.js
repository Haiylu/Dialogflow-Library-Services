/*
const functions=require('firebase-functions')
const {dialogflow}=require('actions-on-google')

const WELLCOME_INTENT='Default Welcome Intent'
const FALLBACK_INTENT='Default Fallback Intent'
const LIBRARY_SERVICES_INTENT='Library_Services'

const app=dialogflow()
app.intent(WELLCOME_INTENT, (conv)={
	conv.ask("Wellcome to UVA Library Services! Ask for archives info") 		
})
app.intent(FALLBACK_INTENT, (conv)=> {
	conv.ask("I didn't understand your request")	
})
app.intent(LIBRARY_SERVICES_INTENT, (conv) =>{
     conv.ask("http://small.library.virginia.edu/collections/university-of-virginia-archives/")
})
exports.dialogflowFirebaseFulfillment=functions.https.onRequest(app)

*/
const rp = require('request-promise-native');//adding reqest promise
function servicesTest(agent){//function name 
    var final=" ";
    var hk={ url:'https://api.devhub.virginia.edu/v1/library/services/', //calling url with rp
                 headers:
              { 'User-Agent': 'Request-Promise'},JSON: true};
           
return rp(hk)
    		.then(function (services) {
			console.log(services);
        		//final = services.siteLink;//finding the json array in the json file
			//console.log(final);
			console.log(services);
			//agent.add(final);
	var title=agent.Services_name;//iterating through JsonArray
	console.log("title " + title);
	/*for(var i=0; i<services.length;i++){
		if(title==services[i].title){
		//console.log(title);
		return services[i].siteLink;
    		}
	}*/
})
		.catch(function (err) {//checking for error 
			console.log(err);
    		});
	return Promise.resolve(agent);//if resolve return agent 
}
module.exports = {
		servicesTest:servicesTest//module exporting agent
}


