diffusion-node-client
=====================

This is a minimal implementation of the Diffusion DPT protocol for Node.js. It
is not supported by Push Technology and the code here is provided on an
"as-is" basis and may contain bugs. It is *not* intended for production
systems.

The Diffusion Node Client is released under the LGPL.

This library is of little use without a running instance of a Diffusion™
server to connect to. See http://www.pushtechnology.com for product details.

Features
--------

- Connect to a Diffusion server, and have multiple connections per Node.js instance.
- Connect with credentials, and change credentials on the fly.
- Subscribe to topics, and unsubscribe from them.
- Fetch topic state.
- Send messages to topics.
- Transparently handle inbound fragmented messages.

Samples
-------

Sample programs can be found in the src/samples directory.
