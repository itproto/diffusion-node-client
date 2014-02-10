var diffusion = require('DiffusionClient');

var connectionDetails = {
    host : 'localhost',
    port : 8080
};

var callbacks = {
    onConnect : function(connected) {
        this.subscribe('echo');

        var message = diffusion.createMessage(diffusion.MSGTYPE.DELTA);
        message.setTopic('echo');
        message.setHeaders(['xyzzy', 'banana']);
        message.setBody('Boo');
        this.sendMessage(message);
    },
    
    onMessage : function(message) {
        console.log('got message type '
                    + message.getType()
                    + ' for topic '
                    + message.getTopic());
        console.log('[' + message.getHeaders() + "] "
                    + message.getBody());
    }
};

var c1 = diffusion.createClient(callbacks);
c1.connect(connectionDetails);
