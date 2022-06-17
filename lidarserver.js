var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var io = require('socket.io')(http) //require socket.io module and pass the http object (server)
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(18, 'out'); //use GPIO pin 4 as output
var lidarInterval = setInterval(lidar,500) //5seg.



http.listen(8080); //listen to port 8080

function handler (req, res) { //create server
  fs.readFile(__dirname + '/public/index3.html', function(err, file) { //read file index.html in public folder
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
    res.write(file); //write file from index.html
    return res.end();
  });
}


io.sockets.on('connection', function (socket) {// WebSocket Connection
  var lidarval = 0; //static variable for current status
   lidar( { //Watch for hardware interrupts 
    //lidarval = 0;
    //socket.emit('iot', lidarval); //send button status to client //emit(transmite)
  }

);

process.on('SIGINT', function () { //on ctrl+c
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
  process.exit(); //exit completely
});

//datolidar = value; //servidor //entera,flotante,arreglo,json (datolidar)
//(emit)transmite

//socket.on('iot', function (datolidar) { //get button status from client
 //  lidar=datolidar;
  // 
//});
