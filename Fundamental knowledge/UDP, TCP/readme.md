# UDP (User Datagram Protocol)
UDP is a simple communication protocol. There is no need to establish a connection prior to data transfer.<br>
**Features of UDP**: unreliable, unordered, fast
**Why packets can be unorder?**: it is because packets may take different routes to reach their destination, and some of these routes may be longer than others.

![image](https://user-images.githubusercontent.com/67142421/178133335-70ef1d74-9b94-4d5f-bb30-f166eb2f93a0.png)

* Length: the length of UDP including the header and the data. It is a 16-bits field.
* Checksum: used to check data for errors.(only checks errors. does not control errors.)
This is all of UDP. We can see how simple it is, It is lighter and faster than TCP but unreliable.<br>

## When to use UDP?
- For real-time applications such as games, real-time broadcasting, etc which cannot tolerate delays. In this case other methods like time-stamp are used for reliability without ACK packets.
- For simple request-response communication when the size of data is small and hence there is lesser concern about flow and error control.
- DNS

# TCP (Transmission Control Protocol)
TCP ensures the reliable delibery of packets using handshakes, acknowledgments, flow control and congestion control.<br>
1. A connection is established by a 3-way handshake
2. TCP segments data into small packets to send.
3. The connection is terminated by a 4-way handshake.

## 3-way handshake
A process to establishes a reliable connection between two devices over a network.

![image](https://user-images.githubusercontent.com/67142421/223976212-ecc67af5-a969-4b56-bf09-d728357b96db.png)

>Sequence numbers are randomly generated to prevent sequence number guessing attacks.
### Simplified process
1. client: is server ready? (SYN)
2. server: yes, is client ready? (SYN-ACK)
3. client: yes (ACK)
4. A reliable connection is established now that both are ready
### Process
>The process is blocked until ACK is received.
1. **Client** generates its initial sequence number M and sends a SYN(M) packet to **Server**. **Ex(Client's initial sequence number M: 1000)**
2. If the packet is intact, **Server** generates its initial sequence number N and responds to **Client** with a SYN(N)-ACK(M+1) packet, where M+1 indicates that it was sent right after M. **Ex(Server's initial sequence number N: 2000, acknowledgement number M+1: 1001)**
3. **Client** sends ACK(N+1) to **Server**. **Ex(Client's acknowledgement number N+1: 2001)**
4. A reilable connection is established by using the 2 initial sequence numbers to generate their subsequent sequence numbers.

## Data exchange
- Client and server analyze each incoming sequence number for checking packet errors and flow control and acknowledge each packet as it arrives.
- They continue to send as many packets as **flow control** allows until they receive an ACK packet or until the communication times out.

## Flow control and Congestion control
- **Flow control**: ensures that the server can handle the incoming data by regulating the rate at which the client transfers data.<br>
- **Congestion control**: regulates the rate at which TCP sends data over the ***network*** based on the current state of the ***network***.

## 4-way handshake
TCP connection tear-down is performed with a 4-way handshake.

![image](https://user-images.githubusercontent.com/67142421/178133057-8290aaef-1b2d-4c66-8c49-69b35f40e2b8.png)

1. Client sends FIN and enters the FIN_WAIT_1 state. While in the FIN_WAIT_1 state, Client waits for **ACK**.
2. Server responds with **ACK** to the Client.
3. When Client receives **ACK**, it enters the FIN_WAIT_2 state. While in the FIN_WAIT_2 state, Client waits for **FIN**.
4. Server sends the **FIN** to the Client after some time when Server sends the **ACK** above. (because of some closing process in the B).
5. Client receives **FIN** and responds with **ACK** to Server and enters the TIME_WAIT state because A may still be receiving data.
6. Server receives **ACK** and closes the connection. After the wait, Client too.
