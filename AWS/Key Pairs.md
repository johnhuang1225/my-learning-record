## Creating a key pair

To access a virtual server in AWS, you need a key pair consisting of a private key and a
public key. The public key will be uploaded to AWS and inserted into the virtual server.
The private key is yours; it’s like your password, but much more secure. Protect your
private key as if it’s a password. It’s your secret, so don’t lose it—you can’t retrieve it.
To access a Linux server, you use the SSH protocol; you’ll authenticate with the
help of your key pair instead of a password during login. You access a Windows server
via Remote Desktop Protocol (RDP); you’ll need your key pair to decrypt the administrator
password before you can log in.
The following steps will guide you to the dashboard of the EC2 service, which offers
virtual servers, and where you can obtain a key pair:

- 1 Open the AWS Management Console at https://console.aws.amazon.com.
- 2 Click Services in the navigation bar, find the EC2 service, and click it.
- 3 Your browser shows the EC2 Management Console.

The EC2 Management Console, shown in figure 1.25, is split into three columns. The first
column is the EC2 navigation bar; because EC2 is one of the oldest services, it has many features that you can access via the navigation bar. The second column gives you a brief
overview of all your EC2 resources. The third column provides additional information.
Follow these steps to create a new key pair:

- 1 Click Key Pairs in the navigation bar under Network & Security.
- 2 Click the Create Key Pair button on the page shown in figure 1.26.
- 3 Name the Key Pair `mykey`. If you choose another name, you must replace the
name in all the following examples!

During key-pair creation, you downloaded a file called `mykey.pem`. You must now prepare
that key for future use. Depending on your operating system, you may need to do
things differently, so please read the section that fits your OS.

LINUX AND MAC OS X

The only thing you need to do is change the access rights of `mykey.pem` so that only
you can read the file. To do so, run `chmod 400 mykey.pem` in the terminal. You’ll learn
about how to use your key when you need to log in to a virtual server for the first time
in this book.
