## Distributed Data Protocol (DDP)

Accessing web applications is usually done over HTTP, which by definition is a protocol for exchanging documents. Although it does have advantages for transferring documents, HTTP has several shortcomings when passing data only, so Meteor uses a dedicated protocol based on JSON called DDP. DDP is a standard way to pass data over WebSockets bidirectionally, without the overhead of encapsulating documents. This protocol is the foundation for all reactive functionality and is one of the core elements of Meteor.

DDP is a standard approach to solving the biggest problem facing client-side JavaScript developers: querying a server-side database, sending the results down to the client, and then pushing changes to the client whenever anything changes in the database.
