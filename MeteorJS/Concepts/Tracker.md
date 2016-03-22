## Tracker

The Tracker package provides the fundamentals of functional reactive programming (FRP). At its core Tracker is a simple convention that allows reactive data sources, such as data from the database, to be connected to data consumers.

`c = a + b`

a and b are reactive data sources, and c is the consumer. A change to either a or b triggers a recomputation of c. Tracker achieves reactivity by setting up a reactive context with dependencies between data and functions, invalidating the given context whenever data changes and reexecuting functions.
