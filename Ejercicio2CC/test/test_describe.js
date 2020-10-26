var assert = require("assert"),
      apuesta = require("../Apuesta.js");

describe('Apuesta', function(){          
        describe('Carga', function(){           
                it('Debe estar cargada', function(){
                        assert(apuesta, "Cargado");
                });      
        });
                
        describe('Crea', function(){            
                it('Debe crear apuestas correctamente', function(){
                        var nueva_apuesta = new apuesta.Apuesta('Abel','2-1','200');
                        assert.strictEqual(nueva_apuesta.as_string(), 'Abel:2-1:200',"Creado");
                });     
        });

        describe('Verficar user', function(){
                it('Tu user no puede ser sudo', function(){
                        var nueva_apuesta = new apuesta.Apuesta('sudo','2-1', '1000');
                        assert.notStrictEqual(nueva_apuesta.get_usuario(),'sudo', "User Correcto");
                });
        });
});