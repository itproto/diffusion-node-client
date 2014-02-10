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

