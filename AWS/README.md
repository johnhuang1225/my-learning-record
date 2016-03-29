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

### Creating a billing alarm

Before you use your AWS account in the next chapter, we advise you to create a billing
alarm. If you exceed the Free Tier, an email is sent to you. The book warns you whenever
an example isn’t covered by the Free Tier. Please make sure that you carefully follow
the cleanup steps after each example. To make sure you haven’t missed something
during cleanup, please create a billing alarm as advised by AWS: http://mng.bz/M7Sj.

### Resource groups

A resource group is a collection of AWS resources. Resource is an abstract term for something
in AWS like an EC2 server, a security group, or a RDS database. Resources can be
tagged with key-value pairs. Resource groups specify what tags are needed for a
resource to belong to the group. Furthermore, a resource group specifies the
region(s) the resource must reside in. You can use resource groups to group resources
if you run multiple systems in the same AWS account.
Remember that you tagged the blogging infrastructure with the key system and
the value wordpress. From now on, we’ll use this notation for key-value pairs:
(system:wordpress). You’ll use that tag to create a resource group for your
WordPress infrastructure. In the AWS part of the navigation bar, click
Create a Resource Group.
