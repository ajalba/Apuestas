var apuesta = require("./Apuesta.js"),
assert= require("assert");

var nueva_apuesta = new apuesta.Apuesta('Abel','2-1','200');
assert(nueva_apuesta, "Creada apuesta");
assert.strictEqual(nueva_apuesta.as_string(), "Abel:2-1:200","Creado");
assert.notStrictEqual(nueva_apuesta.get_usuario(), 'sudo', "User correcto");
assert.strictEqual(nueva_apuesta.get_cantidad(), "200", "Cantidad tope de apuesta");
console.log("Todos los tests done");