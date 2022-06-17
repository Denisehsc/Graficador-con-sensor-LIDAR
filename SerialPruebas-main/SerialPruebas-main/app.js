// Use a Readline parser para ver la lectura de los datos
//Se agrega la biblioteca de Serial Port
const { SerialPort, ReadlineParser } = require('serialport')

// Use a `\r\n` as a line terminator
//Se crea la instancia parser utilizando la propiedad ReadlineParser
const parser = new ReadlineParser({
  delimiter: '\r\n',
})

//Se crea la instancia port  para designar el puerto con el que se hará 
//la comunicacion
const port = new SerialPort({
  path: '/dev/ttyACM0',
  baudRate: 115200,
})


port.pipe(parser)

//Se hace la interrupcion y se muestra en  consola que el puerto esta abierto
//Se usa el metodo on de la instancia port
port.on('open', () => console.log('Port open'))


// con el metodo on de la instancia parser muestra los datos que esta recibiendo
//los datos que llegan se guardan en data
parser.on('data',(data) => 
  console.log(data)
)


//con el método on de la instancia port, muestra si el puerto esta cerrado
port.on('close',() => console.log('Port close'))


