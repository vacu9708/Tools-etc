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

### Notice!!
The sender does not stop sending packets until it receives an ACK packet from the receiver or until it times out

- **Sequence number** is used to keep track of every byte sent to ensure reliable transmission.
- If a TCP packet contains 100bytes, then the sequence number of the next packet will start with 101.

## 3-way handshake
During the handshake, the two hosts exchange control messages to agree on the parameters of the connection, such as the initial sequence number, window size, etc.

![image](https://user-images.githubusercontent.com/67142421/223919290-f64023df-7cce-4681-a3d7-b580e4c5dfd5.png)

>sequence numbers are randomly generated!
1. **Sender** sends a SYN(M) packet to **Receiver**. **Ex(sender's sequence number M: 1000)**
2. If the data is intact, **Receiver** responds to **Sender**'s request with a SYN(N)-ACK(M+1) packet, where M+1 indicates that it was sent right after M.
**Ex(receiver's sequence number N: 2000, acknowledgement number M+1: 1001)**
3. **Sender** sends ACK(N+1) to **Receiver** and they both establishes a reliable connection. **Ex(sender's acknowledgement number N+1: 2001)**

## Acknowledgement
**Receiver** acknowledges each packet as it arrives and sends an acknowledgment back to **Sender**.<br>
If a packet is lost or corrupted during transmission, **Sender** retransmits the packet until **Receiver** acknowledges its successful receipt.<br>

## 4-way handshake
TCP connection tear-down is performed with a 4-way handshake.<br>
![image](https://user-images.githubusercontent.com/67142421/178133057-8290aaef-1b2d-4c66-8c49-69b35f40e2b8.png)

1. Sender sends FIN and enters the FIN_WAIT_1 state. While in the FIN_WAIT_1 state, Sender waits for **ACK**.
2. Receiver responds with **ACK** to the Sender.
3. When Sender receives **ACK**, it enters the FIN_WAIT_2 state. While in the FIN_WAIT_2 state, Sender waits for **FIN**.
4. Receiver sends the **FIN** to the Sender after some time when Receiver sends the **ACK** above. (because of some closing process in the B).
5. Sender receives **FIN** and responds with **ACK** to Receiver and enters the TIME_WAIT state because A may still be receiving data.
6. Receiver receives **ACK** and closes the connection. After the wait, Sender too.

## Flow control and Congestion control
- **Flow control** between **Sender** and **Receiver**: ensures that **Receiver** can handle the incoming data by regulating the rate at which **Sender* transfers data because **Receiver**'s buffer has a limited size.<br>
Flow control is achieved by using a sliding window, where **Sender** sends data in chunks and waits for an acknowledgment from **Receiver** before sending more data.
- **Congestion control**: regulates the rate at which TCP sends data over the ***network*** based on the current state of the ***network***.
