module.exports = function(RED) {   
    function SGP30Node(config) {

      RED.nodes.createNode(this,config);
      var node = this;

      this.address = Number(config.address);
      this.bus = parseInt(config.bus, 10);

      const i2c = require('i2c-bus');
<<<<<<< HEAD
      const sgp30 = require('./sgp30_interface')
=======
      const sgp30 = require('./BreakoutGardener/modules/SGP30');
>>>>>>> 2d1b98e58bda8e16772aae9489d4d18e14d27dce

      const ic2_bus = i2c.openSync(this.bus);

      sgp30.Identify(ic2_bus, this.address); 
      
      if (sgp30.IsAvailable()) {
        sgp30.Start();
        node.status({fill:"green",shape:"ring",text:"connected"});
      } else {
        node.status({fill:"red",shape:"ring",text:"disconnected"});
      }

      node.on('input', function(msg) {

<<<<<<< HEAD
        let readings = sgp30.Get();

=======
       let readings = sgp30.Get();
>>>>>>> 2d1b98e58bda8e16772aae9489d4d18e14d27dce

        msg.payload = {
          "tvoc" : readings[0], 
          "eco2" : readings[1], 
          "ethanol" : readings[2], 
          "hydrogen" : readings[3], 
          "overall_air_quality" : readings[4]
        };
        node.send(msg);
      });

      node.on('close', function(done) {
        sgp30.Stop();
        done();
      });

    }
    RED.nodes.registerType("SGP30",SGP30Node);
<<<<<<< HEAD
}
=======
}
>>>>>>> 2d1b98e58bda8e16772aae9489d4d18e14d27dce
