# Messaging patterns
- `Publish/Subscribe` allows broadcasting messages to multiple subscribers interested in a particular topic or channel.
- `Request/Response` enables synchronous communication between a requester and a responder, where a response is expected.
- `Point-to-Point` ensures messages are processed by a single receiver, providing ordered and reliable message delivery.

# Kafka
Kafka is an open-source distributed streaming platform designed to handle high-throughput, fault-tolerant, and scalable data streaming applications.<br>
Kafka provides a publish-subscribe model for decoupled asynchronous processing, where producers publish data to Kafka topics, and consumers subscribe to those topics to consume the data.

### key features of Kafka:
- Publish-Subscribe messaging: Kafka allows producers to publish messages to one or more topics, and consumers can subscribe to those topics to receive the messages.
- Distributed architecture: Kafka is designed to be highly scalable and fault-tolerant. It can be deployed in a distributed manner across multiple nodes or servers, allowing for horizontal scaling and high availability.
- Message persistence: Kafka stores messages on disk, providing durability and fault tolerance. Messages can be retained for a configurable amount of time, enabling consumers to replay or process historical data.
- Fault tolerance and Replication: Kafka uses a distributed commit log architecture, where messages are replicated across multiple brokers(leader and followers) to ensure fault tolerance and data redundancy.
- Stream processing: Kafka can be integrated with stream processing frameworks like Apache Flink, Apache Spark, or Apache Samza to perform real-time data processing on the streaming data.

### Usage examples
Used for asynchronous processing in a decoupled computer
- Sending large traffic of emails 
- Processing large queries

# Kafka cluster
![image](https://github.com/vacu9708/Tools-etc/assets/67142421/bf734bec-5d32-4a35-b8e1-1472d6576886)<br>
### ZooKeeper
ZooKeeper is used for managing the brokers' metadata and maintaining cluster state.<br>
A microservice sends a message to a Kafka broker to publish it, not to ZooKeeper.
### Broker
Each Kafka broker is responsible for managing one or more Kafka topics.<br>
Brokers handle operations related to topics, such as topic creation and partition assignment.<br>
Only one leader broker handles all reads and writes for a specific topic while its follower brokers replicate the data.(So, a broker should handle similar topics) 
### Topic
A Kafka topic is a channel to which messages are sent by producers and from which messages are consumed by consumers.
### Partitions
A Kafka topic can be divided into multiple partitions, which are the basic unit of parallelism and scalability in Kafka.
### Consumer group
A Kafka consumer group consists of one or more consumers. The group ensures that each message is consumed by one consumer within the group, helping in load balancing.<br>
Without the consumer group, each consumer within a group could potentially read all messages from all partitions of the topic.<br>
- If you have more consumers than partitions, then some of your consumers will be idle.
- If you have more partitions than consumers, more than one partition may get assigned to a single consumer.
#### `Example`
Let's say there is a Kafka topic called "insertOrder" with 3 partitions and a consumer group called "orderInserters" with 3 consumers.<br>
When a message is published into insertOrder, only one of the 3 consumers in the group reads that message.

# Load balancing
1. Create consumers within a consumer group
2. Create a topic with as many partitions as the number of consumers within a consumer group
Kafka will automatically perform load balancing across multiple consumers.
### Caution
Kafka performs load balancing based on the workload of messages not on the workload of each consumer.<br>
Allow multiple concurrent consumer threads for I/O wait.
