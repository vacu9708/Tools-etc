# UDP (User Datagram Protocol)
UDP is an unreliable and connectionless protocol. So, there is no need to establish a connection prior to data transfer, which speeds up transmissions.

This is all of UDP. We can see how simple it is, It is lighter and faster than TCP but unreliable.<br>
![image](https://user-images.githubusercontent.com/67142421/178133335-70ef1d74-9b94-4d5f-bb30-f166eb2f93a0.png)<br>
* Length: the length of UDP including the header and the data. It is a 16-bits field.
* Checksum: used to check data for errors.(only checks errors. does not control errors.)

## When to use UDP?
* used for real-time applications such as games, real-time broadcasting, etc which cannot tolerate delays
* Used for simple request-response communication when the size of data is small and hence there is lesser concern about flow and error control.
* DNS

# TCP (Transmission Control Protocol)
The TCP is used to ensure the successful delibery of packets.<br>
* establishes a connection by a 3-way handshake and terminates it by a 4-way handshake.
* slower than UDP(UDP is low latency)
* performs flow control and congestion control

## 3-way handshake
![image](https://user-images.githubusercontent.com/67142421/178132002-1b60b862-4723-4def-9b8a-594f42bfd82e.png)

* The **sequence number** is used to keep track of every byte sent to ensure reliable transmission. If a TCP packet contains 100bytes, 
then the sequence number of the next packet will start with 101.
* SYN stands for Synchronize sequence number and ACK stands for Ackknowledgement.

1. The client sends a SYN with a sequence number "a".
2. If the data does not contain errors, server responds to the client request with an SYN(b) and ACK(a+1) signal, where a+1 ensures that it was sent right after a.
3. Client sends ACK(b+1) to the server and they both establishes a reliable connection.

## 4-way handshake
![image](https://user-images.githubusercontent.com/67142421/178133057-8290aaef-1b2d-4c66-8c49-69b35f40e2b8.png)

1. Client sends FIN and enters the FIN_WAIT_1 state. While in the FIN_WAIT_1 state, the client waits for **ACK**.
2. Server responds with **ACK** to the client.
3. When the client receives **ACK**, it enters the FIN_WAIT_2 state. While in the FIN_WAIT_2 state, the client waits for **FIN**.
4. The server sends the **FIN** to the client after some time when the server sends the **ACK** above. (because of some closing process in the server).
5. The client receives **FIN** and responds with **ACK** to the server and enters the TIME_WAIT state because client may still be receiving data.
6. The server receives **ACK** and closes the connectionm. After the wwait, client too.

## Flow control and Congestion control
Receiver buffer has a limited size, so TCP provides a means for the receiver to govern the amount of data sent by the sender, which is called Flow control.<br>
Flow control limits the rate at which a sender transfers data. This is done to ensure reliable delivery.<br>
**Congestion control** : a method to handle the speed difference between a sender and a network. (Flow control is done between sender and receiver)
