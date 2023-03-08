# Socket
A socket is a low-level bidirectional network interface. Sockets can be used for both TCP and UDP protocols.<br>
![image](https://user-images.githubusercontent.com/67142421/220212116-cbe091b2-27fa-49bb-a238-29883df1fbf9.png)
- socket(): creates a socket
- bind():  associates the socket with a local address
- listen(): gets the socket ready to accept client connection requests
- accept(), send(), receive(), close(): literal

# Socket example
## Server
~~~python
import socket, threading

# Create client socket where address family is IPv4 and socket type is TCP
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# To solve WinError 10048 error 
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

def bind():
    for port in range(9000,9999):
        try:
            server_socket.bind(("127.0.0.1", port))
            print(f"Bound to {port}")
            break
        except:
            continue

def request_parser(message):
    # Parsing
    params=[]
    beginning_of_string=0
    for i in range(len(message)):
        if message[i]==',': # Distinguisher found
            params.append(message[beginning_of_string:i])
            beginning_of_string=i+1
        if i==len(message)-1: # Last index
            params.append(message[beginning_of_string:])
    return params

def client_data_receiver(accepted_client, address):
    while True:
        try:
            # Wait for client's request
            message = accepted_client.recv(999).decode() # Convert the received message that is bytes to a string object and print it
        except:
            print(f'{address} disconnected')
            accepted_client.close()
            return
        params=request_parser(message)
        for i in range(len(params)):
            print(f'Received {params[i]} from {address}')
            accepted_client.sendall(f'Echo from server'.encode()) # Send the received message back to client (echo)

def client_accepter():
    while True:
        accepted_client, address = server_socket.accept() # Accept the client socket
        print(f'Connected by {address}')
        threading.Thread(target=client_data_receiver, args=(accepted_client, address)).start()

bind()
server_socket.listen() # Be ready to get incoming connection requests
client_accepter()
~~~

## Client
~~~python
import socket

# Create client socket where address family is IPv4 and socket type is TCP
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
for port in range(9000,9999):
    try:
        client_socket.connect(("127.0.0.1", port))
        print(f"Bound to {port}")
        break
    except:
        continue

while True:
    message = input()
    if message=='':
        break

    client_socket.sendall(message.encode()) # Send the message

    # Receive the echo message from server
    try:
        data = client_socket.recv(999) # Wait for client's request
        print(f'Received {data.decode()} from server') # Convert the received message that is bytes to a string object and print it
    except:
        print(f'server disconnected')
        client_socket.close()
        break
~~~

## Outout
### Client
![Untitled](https://user-images.githubusercontent.com/67142421/175810762-fe0b9567-4b82-4c07-a93c-bc6fd7c9020a.png)
### Server
![image](https://user-images.githubusercontent.com/67142421/175810768-dec44ecb-9e1f-493c-9bea-583ac71639ce.png)

# Websocket
WebSocket is a higher-level protocol specifically designed for web over TCP, which uses HTTP in the initial handshake process to establish the connection between the client and the server, and then upgrades the connection to a two-way real-time communication channel.
