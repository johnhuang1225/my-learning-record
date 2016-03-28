## Amazon Web Services

### What is cloud computing?

> Cloud computing is a model for enabling ubiquitous, convenient, on-demand network
access to a shared pool of configurable computing resources (e.g., networks, servers,
storage, applications, and services) that can be rapidly provisioned and released with
minimal management effort or service provider interaction. — The NIST Definition of Cloud Computing,
National Institute of Standards and Technology

##### Clouds are often divided into the following types

- Public : A cloud managed by an organization and open to use by the general

- public : Private—A cloud that virtualizes and shares the IT infrastructure within a single organization

- Hybrid : A mixture of a public and a private cloud

##### Cloud computing services also have several classifications

- Infrastructure as a service (IaaS) : Offers fundamental resources like computing,
storage, and networking capabilities, using virtual servers such as Amazon EC2,
Google Compute Engine, and Microsoft Azure virtual machines

- Platform as a service (PaaS) : Provides platforms to deploy custom applications to
the cloud, such as AWS Elastic Beanstalk, Google App Engine, and Heroku

- Software as a service (SaaS) : Combines infrastructure and software running in
the cloud, including office applications like Amazon WorkSpaces, Google Apps
for Work, and Microsoft Office 365

### Creating a key pair

To access a virtual server in AWS, you need a key pair consisting of a private key and a
public key. The public key will be uploaded to AWS and inserted into the virtual server.
The private key is yours; it’s like your password, but much more secure. Protect your
private key as if it’s a password. It’s your secret, so don’t lose it—you can’t retrieve it.
To access a Linux server, you use the SSH protocol; you’ll authenticate with the
help of your key pair instead of a password during login.

The following steps will guide you to the dashboard of the EC2 service, which offers
virtual servers, and where you can obtain a key pair:
- 1 Open the AWS Management Console at https://console.aws.amazon.com.
- 2 Click Services in the navigation bar, find the EC2 service, and click it.
- 3 Your browser shows the EC2 Management Console.

Follow these steps to create a new key pair:

- 1 Click Key Pairs in the navigation bar under Network & Security.
- 2 Click the Create Key Pair button on the page.
- 3 Name the Key Pair `mykey`. If you choose another name, you must replace the
name in all the following examples!

During key-pair creation, you downloaded a file called `mykey.pem`. You must now prepare
that key for future use. Depending on your operating system, you may need to do
things differently, so please read the section that fits your OS.

###### LINUX AND MAC OS X

The only thing you need to do is change the access rights of `mykey.pem` so that only
you can read the file. To do so, run `chmod 400 mykey.pem` in the terminal. You’ll learn
about how to use your key when you need to log in to a virtual server for the first time
in this book.

### Creating a billing alarm

Before you use your AWS account in the next chapter, we advise you to create a billing
alarm. If you exceed the Free Tier, an email is sent to you. The book warns you whenever
an example isn’t covered by the Free Tier. Please make sure that you carefully follow
the cleanup steps after each example. To make sure you haven’t missed something
during cleanup, please create a billing alarm as advised by AWS: http://mng.bz/M7Sj.
