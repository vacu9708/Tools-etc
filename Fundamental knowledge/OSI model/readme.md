## Router VS Switch
A **switch** is used to connect computers within a network, while a **router** is used to connect multiple networks together.<br>
In a home network, a single router is usually all that is required for connecting devices to the Internet.<br>

![image](https://user-images.githubusercontent.com/67142421/178091500-8d4a7114-0dfb-453b-9c43-cf390349dcb7.png)

### Why does the OSI model matter?
Because it allows for understanding how the communication works stage by stage and facilitates only modifying the stage where a problem occured.

### 1. Physical layer
>Ex) repeater, cable, hub
only transmits data.

### 2. Data link layer
>Ex) bridge, switch
* error control : makes sure data transfer is error-free.
* physcal addressing : when a packet arrives in a network, it is the responsibility of data link layer to transmit it to the host using its MAC address.
* flow control : coordinates the amount of data that can be sent.

### 3. Network layer
>Ex) routher, IP
The primary function of the network layer is to enable different networks to be interconnected by forwarding packets to network routers, which rely on algorithms to determine the best paths for the data to travel.
* Routing: Routing algorithms determine which route is suitable from source to destination.
* Logical Addressing: In order to identify each device on internetwork uniquely, the network layer defines an addressing scheme(IP)

### 4. Transport layer
>Ex) TCP, UDP, gateway
The data in the transport layer is referred to as Segments. It is responsible for the End to End Delivery of the complete message. The transport layer also provides the acknowledgement of the successful data transmission and re-transmits the data if an error is found.<br>
- gateway: allows for connection between discrete networks

### 5. Session layer
>Ex) Socket
This layer is responsible for the establishment of connection, maintenance of sessions, authentication, and also ensures security.

### 6. Presentation layer
>Ex) compression(JPEG, MPEG), encryption
The presentation layer is responsible for presenting the data to the application layer. This includes a format translation.

### 7. Application layer
>Ex) HTTP, DNS
an abstraction layer that specifies the communications protocols and interface methods used by hosts.
