## Distributed Data Protocol (DDP)

To define DDP, it is simply a REST over Web socket.

It is a socket implementation that can transfer JSON data to and fro (duplex).

MeteorJS uses Socket.io internally to establish a socket connection between the client and the server.

However, neither the client nor the server knows to whom they are talking to. All they know is to talk DDP over the socket.
