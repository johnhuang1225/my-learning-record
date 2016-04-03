## Redis

Redis is often used in Express.js applications for session persistence, because storing sessions
in a physical storage keeps apps from losing users’ data when a system is restarted or redeployed. It also enables the use of multiple RESTful servers because they can connect to the same Redis server. In addition, Redis can be used for queues and scheduling tasks (e.g., e-mail jobs).

Redis itself is a stand-alone service. Therefore, to use Redis with Express.js, we need two things:

1. Redis server: A database server that can listen on a particular port and be accessed via the Redis console or applications
2. [Connect-redis](https://github.com/tj/connect-redis): An NPM module that enables Express.js to use the Redis store and includes the [redis module](https://github.com/NodeRedis/node_redis).

#### Resources

- [Redis Doc](http://redis.io/documentation)
- [Try Redis](http://try.redis.io/)
