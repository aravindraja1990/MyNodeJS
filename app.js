
var http=require("http");
var options = {
			hostname:"retailbanking.mybluemix.net",
			path:"/banking/icicibank/listpayee?client_id=mypriya08@gmail.com&token=212c57fe7974&custid=33337369"
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
/*http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Hello World \n');
}).listen(8081);
console.log("Server running at http://127.0.0.1:8081/");*/

/*var fs = require("fs");
fs.readFile('test.txt', function(error, data){
	if(error)console.error(error);
	//console.log(data.toString());
});
console.log("program ended");

var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectionHandler = function connected() {
	console.log('connection successful');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectionHandler);

//Bind the data_received event with anonymous function
eventEmitter.on('data_received', function(){
	console.log('data received successfully');
});
eventEmitter.emit('connection');
console.log('Program Ended');

var buffer = new Buffer(256);
var length = buffer.write("This is sample text for verifying buffer length");
console.log("Octets written :"+ length);

var buffer1 = new Buffer("Hello");
var buffer2 = new Buffer("World");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content: "+ buffer3.toString());
var data = '';
var readStream = fs.createReadStream('test.txt');
readStream.setEncoding('UTF8');

readStream.on('data', function(chunk){
	data += chunk;
});

readStream.on('end', function(){
	console.log(data);
});
readStream.on('error', function(error){
	console.log(error.stack);
});

var data = 'New Output Stream';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');
writeStream.end();
writeStream.on('finished', function(){
	console.log('completed');
});
writeStream.on('error', function(err){
	console.log(err.stack);
});

var zlib = require('zlib');
fs.createReadStream('test.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));


console.log(__filename);

var url = require('url');
http.createServer(function(request, response){
	var pathname = url.parse(request.url).pathname;
	console.log("Request for path "+pathname+" received");
	fs.readFile(pathname.substr(1),function(err, data){
		if(err){
			console.log(err);
			response.writeHead(404, {'Content-Type':'text/html'});
		}else{
			response.writeHead(200, {'Content-Type':'text/html'});
			response.write(data.toString());
		}
	});
}).listen(8081);
console.log('server running at 8081');

const childprocess = require('child_process');
for(var i=0; i<3; i++){
	var workerProcess = childprocess.exec('node support.js '+i, function(error, stdout, stderr){
		if(error){
			console.log(error.stack);
		}
		console.log(stdout);
		console.log(stderr);
	});
	workerProcess.on('exit', function(code){
		console.log(code);
	});
}*/
