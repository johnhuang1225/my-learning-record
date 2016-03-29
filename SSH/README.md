## SSH

##### What Is SSH?

One essential tool to master as a system administrator is SSH.

SSH, or Secure Shell, is a protocol used to securely log onto remote systems. It is the most common way to access remote Linux and Unix-like servers, such as VPS instances.

##### Basic Syntax

The tool on Linux for connecting to a remote system using SSH is called, unsurprisingly, `ssh`.

The most basic form of the command is:

```
ssh remote_host
```

The `remote_host` in this example is the IP address or domain name that you are trying to connect to.

This command assumes that your username on the remote system is the same as your username on your local system.

If your username is different on the remote system, you can specify it by using this syntax:

```
ssh remote_username@remote_host
```

Once you have connected to the server, you will probably be asked to verify your identity by providing a password.

To exit back into your local session, simply type:

```
exit
```

##### How To Create SSH Keys

SSH keys should be generated on the computer you wish to log in from. This is usually your local computer.

Enter the following into the command line:

```
ssh-keygen -t rsa
```

Press enter to accept the defaults. Your keys will be created at ``~/.ssh/id_rsa.pub` and ``~/.ssh/id_rsa`.

Change into the .ssh directory by typing:

```
cd ~/.ssh
```

Look at the permissions of the files:

```
ls -l
```

```
-rw-r--r-- 1 demo demo  807 Sep  9 22:15 authorized_keys
-rw------- 1 demo demo 1679 Sep  9 23:13 id_rsa
-rw-r--r-- 1 demo demo  396 Sep  9 23:13 id_rsa.pub
```

As you can see, the `id_rsa` file is readable and writable only to the owner. This is how it should be to keep it secret.

The `id_rsa.pub` file, however, can be shared and has permissions appropriate for this activity.

##### How To Transfer Your Public Key to the Server

You can copy the public key to the remote server by issuing this command:

```
ssh-copy-id remote_host
```

This will start an SSH session, which you will need to authenticate with your password.

After you enter your password, it will copy your public key to the server's authorized keys file, which will allow you to log in without the password next time.

##### The standard SSH port

```
22
```
