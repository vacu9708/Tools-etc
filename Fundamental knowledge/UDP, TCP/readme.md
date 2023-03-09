# UDP (User Datagram Protocol)
UDP is a simple communication protocol. There is no need to establish a connection prior to data transfer.<br>
**Features of UDP**: unreliable, unordered, fast

![image](https://user-images.githubusercontent.com/67142421/178133335-70ef1d74-9b94-4d5f-bb30-f166eb2f93a0.png)

* Length: the length of UDP including the header and the data. It is a 16-bits field.
* Checksum: used to check data for errors.(only checks errors. does not control errors.)
This is all of UDP. We can see how simple it is, It is lighter and faster than TCP but unreliable.<br>

## When to use UDP?
* used for real-time applications such as games, real-time broadcasting, etc which cannot tolerate delays
* Used for simple request-response communication when the size of data is small and hence there is lesser concern about flow and error control.
* DNS

# TCP (Transmission Control Protocol)
TCP ensures the ordered, reliable delibery of packets using handshakes, acknowledgments, flow control and congestion control.<br>
1. A connection is established by a 3-way handshake
2. Once a connection is established, TCP segments data into small packets to send.
3. The connection is terminated by a 4-way handshake.
**Sequence number** is used to keep track of every byte sent to ensure reliable transmission.

## 3-way handshake
establishes a reliable connection between two devices over a network.

![image](https://user-images.githubusercontent.com/67142421/223976212-ecc67af5-a969-4b56-bf09-d728357b96db.png)

>sequence numbers are randomly generated
### Simplified process
1. client: is server ready? (SYN)
2. server: yes, is client ready? (SYN-ACK)
3. client: yes (ACK)
4. server: ok let's establish our connection
### Process
>The process is blocked until ACK is received.
1. **Client** sends a SYN(M) packet to **Server**. **Ex(Client's sequence number M: 1000)**
2. If the packet is intact, **Server** responds to **Client**'s request with a SYN(N)-ACK(M+1) packet, where M+1 indicates that it was sent right after M.
**Ex(Server's sequence number N: 2000, acknowledgement number M+1: 1001)**
3. **Client** sends ACK(N+1) to **Server** and they both establishes a reliable connection. **Ex(Client's acknowledgement number N+1: 2001)**

## On connection
- **Server** acknowledges each packet as it arrives and sends an acknowledgment back to **Client**.<br>
- The Client continues to send as many packets as possible until it receives an ACK packet from the Server or until it times out.

## 4-way handshake
TCP connection tear-down is performed with a 4-way handshake.<br>
![image](https://user-images.githubusercontent.com/67142421/178133057-8290aaef-1b2d-4c66-8c49-69b35f40e2b8.png)

1. Client sends FIN and enters the FIN_WAIT_1 state. While in the FIN_WAIT_1 state, Client waits for **ACK**.
2. Server responds with **ACK** to the Client.
3. When Client receives **ACK**, it enters the FIN_WAIT_2 state. While in the FIN_WAIT_2 state, Client waits for **FIN**.
4. Server sends the **FIN** to the Client after some time when Server sends the **ACK** above. (because of some closing process in the B).
5. Client receives **FIN** and responds with **ACK** to Server and enters the TIME_WAIT state because A may still be receiving data.
6. Server receives **ACK** and closes the connection. After the wait, Client too.

## Flow control and Congestion control
- **Flow control** between **Client** and **Server**: ensures that **Server** can handle the incoming data by regulating the rate at which **Client* transfers data because **Server**'s buffer has a limited size.<br>
Flow control is achieved by using a sliding window, where **Client** sends data in chunks and waits for an acknowledgment from **Server** before sending more data.
- **Congestion control**: regulates the rate at which TCP sends data over the ***network*** based on the current state of the ***network***.
