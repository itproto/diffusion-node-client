/*
 * diffusion-node-client
 * Copyright (c) 2014, Push Technology Ltd., All rights reserved.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.0 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.
 */

var diffusion = require('DiffusionClient');

var connectionDetails = {
    host : 'localhost',
    port : 8080,
    // Request an Event Publisher connection instead of a Client connection.
    event_publisher : true
};

var callbacks = {
    onConnect : function(connected) {
        // Event Publishers do not support "subscribe", so we don't do that.
        // They can still receive direct messages from a Publisher.

        // Must send Delta messages from an Event Publisher.
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

