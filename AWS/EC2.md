## Using virtual servers: EC2

### 1.1 Exploring a virtual server

A virtual server is part of a physical server that’s isolated by software from other
virtual servers on the same physical server; it consists of CPUs, memory, networking
interfaces, and storage. The physical server is also called the host server, and
the virtual servers running on it are called guests. A hypervisor is responsible for
isolating the guests from each other and for scheduling requests to the hardware.

Typical use cases for a virtual server are as follows:
- Hosting a web application
- Executing enterprise applications
- Transforming or analyzing data

#### 1.1.1 Launching a virtual server

It takes only a few clicks to launch a virtual server:

- 1 Open the AWS Management Console at https://console.aws.amazon.com.
- 2 Make sure you’re in the N. Virginia (US East) region, because
we optimized our examples for this region.
- 3 Find the EC2 service in the navigation bar under Services and click it.
- 4 To start the wizard for launching a virtual server, click Launch Instance.

#### 1.1.2 Connecting to a virtual server

Installing additional software and running commands on your virtual server can be
done remotely. To log in to the virtual server, you have to figure out its public IP address:

- 1 Click the EC2 service in the navigation bar under Services and click Instances in
the submenu at left to jump to an overview of your virtual server.
- 2 Select the virtual server from the table by clicking it. Figure 3.12 shows the
server overview and the available actions.
- 3 Click Connect to open the instructions for connecting to the virtual server.
- 4 Figure 3.13 shows the dialog with instructions to connect to the virtual server. Find
the public IP address of your virtual server, such as 52.4.216.201 in our example.

With the public IP address and your key, you can connect to your virtual server. Continue
with the next sections, depending on your OS on your local machine.

LINUX AND MAC OS X

Open your terminal and type `ssh -i $PathToKey/mykey.pem ubuntu@$PublicIp`,
replacing ``$PathToKey` with the path to the key file you downloaded in section 1.8.3
and ``$PublicIp` with the public IP address shown in the connect dialog in the AWS
Management Console. Answer Yes to the security alert regarding the authenticity of
the new host.

#### 1.2.1 Showing logs from a virtual server

If you need to find out what your virtual server was doing during and after startup,
there’s a simple solution. AWS allows you to show the server’s logs with the help of the
Management Console (the web interface you use to start and stop virtual servers). Follow
these steps to open your virtual server’s logs:

- 1 Open the EC2 service from the main navigation, and select Instances from the
submenu.
- 2 Select the running virtual server by clicking the row in the table.
- 3 In the Actions menu, choose Instance Settings > Get System Log.

A window opens and shows you the system logs from your virtual server that would
normally be displayed on a physical monitor during startup (see figure 3.15).

This is a simple and efficient way to access your server’s system logs without a SSH connection.
Note that it will take several minutes for a log message to appear in the log
viewer.

#### 1.2.2 Monitoring the load of a virtual server

AWS can help you answer another question: is your virtual server close to its maximum
capacity? Follow these steps to open the server’s metrics:

- 1 Open the EC2 service from the main navigation and select Instances from the
submenu.
- 2 Select the running virtual server by clicking the row in the table.
- 3 Select the Monitoring tab at lower right.
- 4 Click the Network In chart to dive into the details.

You’ll see a graph that shows the virtual server’s utilization of incoming networking
traffic, similar to figure 3.16. There are metrics for CPU usage, network usage, and
disk usage. Unfortunately, there is no metric for memory usage. The metrics are
updated every five minutes if you use basic monitoring or every minute if you enable
detailed monitoring of your virtual server. Detailed monitoring incurs a cost for some
of the instance types.
Metrics and logs will help you monitor and debug your virtual servers. Both tools
can help ensure that you’re providing high-quality services in a cost-efficient manner.

### 1.3 Shutting down a virtual server

To avoid incurring charges, you should always turn off unused virtual servers. You can
use the following four actions to control a virtual server’s state:

- Start—You can always start a stopped virtual server. If you want to create a completely
new server, you’ll need to launch a virtual server.
- Stop—You can always stop a running virtual server. A stopped virtual server isn’t
billed and can be started later. If you’re using network-attached storage, your
data persists. A stopped virtual server doesn’t incur charges, except for attached
resources like network-attached storage.
- Reboot—Have you tried turning it off and on again? If you need to reboot your
virtual server, this action will help. You won’t lose any data when rebooting a virtual
server, and all software is still installed after a reboot.
- Terminate—Terminating a virtual server means deleting it. You can’t start a virtual
server that you’ve already terminated. The virtual server is deleted,
together with dependencies like network-attached storage and public and private
IP addresses. A terminated virtual server doesn’t incur charges.

**WARNING** The difference between stopping and terminating a virtual server is
important. You can start a stopped virtual server. This isn’t possible with a terminated
virtual server. If you terminate a virtual server, you delete it.

### 1.4 Changing the size of a virtual server

It’s always possible to change the size of a virtual server. This is an advantage of the
cloud and gives you the ability to scale vertically. If you need more computing power,
increase the size of the server.
In this section, you’ll learn how to change the size of a running virtual server. To
begin, follow these steps to start a small virtual server:

- 1 Open the AWS Management Console and choose the EC2 service.
- 2 Start the wizard to launch a new virtual server by clicking the Launch Instance
button.
- 3 Select Ubuntu Server 14.04 LTS (HVM) as the AMI for your virtual server.
- 4 Choose the instance type t2.micro.
- 5 Click Review and Launch to start the virtual server.
- 6 Check the summary for the new virtual server and click the Launch button.
- 7 Choose the option Choose an Existing Key Pair, select the key pair mykey, and
click Launch Instances.
- 8 Switch to the overview of EC2 instances and wait for the new virtual server’s state
to switch to Running.

You’ve started a virtual server with the instance type t2.micro. This is one of the smallest
virtual servers available on AWS.
Use SSH to connect to your server, as shown in the previous section, and execute
`cat /proc/cpuinfo` and `free -m` to gain information about the server’s CPU and memory.

Your virtual server can use a single CPU core and offers 992 MB of memory.
If you need more CPUs, more memory, or more networking capacity, there are
many other sizes to choose from. You can even change the virtual server’s instance
family and version. To increase the size of your virtual server, you first need to stop it:
- 1 Open the AWS Management Console and choose the EC2 service.
- 2 Click Instances in the submenu to jump to an overview of your virtual servers.
- 3 Select your running virtual server from the list by clicking it.
- 4 Choose Instance State > Stop from the Actions menu.

After waiting for the virtual server to stop, you can change the instance type:

- 1 Choose Change Instance Type from the Actions menu under Instance Settings.
As shown in figure 3.18, a dialog opens in which you can choose the new
instance type for your virtual server.
- 2 Select m3.large for Instance Type.
- 3 Save your changes by clicking Apply.

You’ve now changed the size of your virtual server and are ready to start it again.

To do so, select your virtual server and choose Start from the Actions menu under
Instance State. Your virtual server starts with more CPUs, more memory, and more networking
capabilities. The public and private IP addresses have changed. Grab the new
public IP address to reconnect via SSH; you’ll find it in the virtual server’s details view.

Use SSH to connect to your server, and execute `cat /proc/cpuinfo` and `free -m` to
gain information about its CPU and memory.

### 1.5 Allocating a public IP address

You’ve already launched some virtual servers while reading this book. Each virtual
server was connected to a public IP address automatically. But every time you
launched or stopped a virtual server, the public IP address changed. If you want to
host an application under a fixed IP address, this won’t work. AWS offers a service
called Elastic IP addresses for allocating fixed public IP addresses.
You can allocate and associate a public IP address to a virtual web server with the
following steps:

- 1 Open the Management Console and go to the EC2 service.
- 2 Choose Elastic IPs from the submenu. You’ll see an overview of public IP
addresses, as shown in figure 3.21.
- 3 Allocate a public IP address by clicking Allocate New Address.

Now you can associate the public IP address with a virtual server of your choice:

- 1 Select your public IP address and choose Associate Address from the Actions
menu. A dialog similar to figure 3.22 appears.
- 2 Enter your virtual server’s instance ID in the Instance field. Your web server is
the only virtual server running at the moment, so you can begin typing i- and
use auto-completion to choose the server ID.
- 3 Click Associate to finish the process.

Your virtual server is now accessible through the public IP address you allocated at the
beginning of this section. Point your browser to this IP address, and you should see
the placeholder page as you did in section 3.5.
Allocating a public IP address can be useful if you have to make sure the endpoint
to your application doesn’t change, even if you have to replace the virtual server
behind the scenes. For example, assume that virtual server A is running and has an associated Elastic IP address. The following steps let you replace the virtual server with
a new one without interruption:

- 1 Start a new virtual server B to replace running server A.
- 2 Install and start applications and all dependencies on virtual server B.
- 3 Disassociate the Elastic IP from virtual server A, and associate it with virtual
server B.

Requests using the Elastic IP address will now be routed to virtual server B without
interruption.
You can also connect multiple public IP addresses with a virtual server by using
multiple network interfaces, as described in the next section. This can be useful if you
need to host different applications running on the same port or if you want to use a
unique fixed public IP address for different websites.
WARNING IPv4 addresses are rare. To prevent stockpiling Elastic IP addresses,
AWS will charge you for Elastic IP addresses that aren’t associated with a
server. You’ll clean up the allocated IP address at the end of the next section.
