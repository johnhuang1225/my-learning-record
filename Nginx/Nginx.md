### Installing Nginx

You can install Nginx on Ubuntu using the `apt-get` package manager, like this:

```
apt-get install nginx
```

That should install the latest version of Nginx on your Ubuntu server.

### Starting Nginx

Once you have installed Nginx, you will need to start it. You do so using this command:

```
/etc/init.d/nginx start
```

To verify that Nginx is running, try directing a browser to the IP address (or domain name) of your Ubuntu server.

### The Nginx Configuration File

The Nginx main configuration file is located at:

```
/etc/nginx/nginx.conf
```

The Nginx configuration file may include other configuration files. Thus you can divide your configuration into multiple smaller, reusable configuration files, which are all included in the main Nginx configuration file.

To configure Nginx we must make changes to the Nginx configuration file. Make a copy of the original config file before making changes to it. That way you can always go back to the original in case you mess up the copy. Here is how you make a copy of the original Nginx configuration file:

```
cp  /etc/nginx/nginx.conf  /etc/nginx.conf.orig
```

The file `/etc/nginx.conf.orig` now contains a copy of the original Nginx configuration file.
