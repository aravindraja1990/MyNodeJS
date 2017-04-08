var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
var baseDirectory = __dirname   // or whatever base directory you want
var https = require('https');

var port = 3000

http.createServer(function (request, response) {
   try {
     var requestUrl = url.parse(request.url)

     // need to use path.normalize so people can't access directories underneath baseDirectory
     var fsPath = baseDirectory+path.normalize(requestUrl.pathname)
	 console.log(baseDirectory);
	  console.log(fsPath.indexOf("\getPayee"));
	if(fsPath.indexOf("\getPayee")!==-1){
		fsPath = "http://retailbanking.mybluemix.net/banking/icicibank/listpayee?client_id=mypriya08@gmail.com&token=212c57fe7974&custid=33337369";
		console.log('inside'+fsPath);
		var options = {
			hostname:"retailbanking.mybluemix.net/banking/icicibank",
			path:"/listpayee?client_id=mypriya08@gmail.com&token=212c57fe7974&custid=33337369"

		}
		
		http.get(options, function(res){
		var body = '';

		res.on('data', function(chunk){
        body += chunk;
		});

		res.on('end', function(){
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse);
		});
		}).on('error', function(e){
			console.log("Got an error: ", e);
		});
	}	
     response.writeHead(200)
     var fileStream = fs.createReadStream(fsPath)
     fileStream.pipe(response)
     fileStream.on('error',function(e) {
         response.writeHead(404)     // assume the file doesn't exist
         response.end()
     })
   } catch(e) {
     response.writeHead(500)
     response.end()     // end the response so browsers don't hang
     console.log(e.stack)
   }
}).listen(port)

console.log("listening on port "+port)