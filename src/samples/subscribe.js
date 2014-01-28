var topics = process.argv.slice(2);
if(topics.length === 0) {
    console.log('No topic specified');
    process.exit();
};

var diffusion = require('DiffusionClient');

var callbacks = {
    onConnect : function(connected) {
	console.log('Client ' + this.getClientId() + ' connected: ' + connected);
	topics.forEach(function(name) {
	    console.log('Subscribing to ' + name);
	    this.subscribe(name);
	}, this);
    },

    onMessage : function(message) {
	console.log('Received message: ', message);
    }
};

var client = diffusion.createClient(callbacks);
client.connect({ host: 'localhost', port: 8080 });

