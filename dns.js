var dgram = require('dgram');

var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
	//console.log("got: " + msg + " from " + rinfo.address);
	var id = msg[0] << 8;
	id += msg[1];
	console.log("id:"+id);

	if( msg[2]&0x1000 )
		console.log("qr:response");
	else
		console.log("qr:query");

	var qdcount = msg[4] << 8;
	qdcount += msg[5];
	console.log("qdcount:"+qdcount);
	
	var ancount = msg[6] << 8;
	ancount += msg[7];
	console.log("ancount:"+ancount);

	

});

server.on("listening", function () {
	  console.log("server listening " + server.address().address);
})

server.bind(53);

