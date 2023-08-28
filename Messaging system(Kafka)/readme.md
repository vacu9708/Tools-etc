# Kafka
Kafka is an open-source distributed streaming platform designed to handle high-throughput, fault-tolerant, and scalable data streaming applications.<br>
Kafka provides a publish-subscribe model for decoupled asynchronous processing, where producers publish data to Kafka topics, and consumers subscribe to those topics to consume the data.

### key features of Kafka:
- Publish-Subscribe messaging: Kafka allows producers to publish messages to one or more topics, and consumers can subscribe to those topics to receive the messages.
- Distributed architecture: Kafka is designed to be highly scalable and fault-tolerant. It can be deployed in a distributed manner across multiple nodes or servers, allowing for horizontal scaling and high availability.
- Message persistence: Kafka stores messages on disk, providing durability and fault tolerance. Messages can be retained for a configurable amount of time, enabling consumers to replay or process historical data.
- Fault tolerance and Replication: Kafka uses a distributed commit log architecture, where messages are replicated across multiple brokers (servers) to ensure fault tolerance and data redundancy.
- Stream processing: Kafka can be integrated with stream processing frameworks like Apache Flink, Apache Spark, or Apache Samza to perform real-time data processing on the streaming data.

# Usage examples
Used for decoupled asynchronous processing
- Sending large traffic of emails in a separate service
- Processing large queries in a separate service

# Kafka cluster
- **ZooKeeper manages Kafka brokers**: ZooKeeper is a centralized coordination service that Kafka relies on for managing and coordinating the Kafka brokers within a Kafka cluster. It helps maintain metadata, tracks the live brokers, handles leader election, and enables synchronization and coordination among the brokers.
- **Kafka brokers manage Kafka Topics**: Each Kafka broker within a cluster is responsible for managing one or more Kafka topics. Brokers handle operations related to topics, such as topic creation, metadata management, partition assignment, leader election, data distribution, and replication.
- **Kafka brokers manage partitions of topics**: Kafka topics are divided into multiple partitions, and each partition is managed by Kafka brokers. Partitions are the basic unit of parallelism and scalability in Kafka. Brokers handle partition assignment, data distribution, leader election, and replication for each partition. Each partition is stored and replicated across multiple brokers to provide fault tolerance and scalability.

# Messaging patterns
- `Publish/Subscribe` allows broadcasting messages to multiple subscribers interested in a particular topic or channel.
- `Request/Response` enables synchronous communication between a requester and a responder, where a response is expected.
- `Point-to-Point` ensures messages are processed by a single receiver, providing ordered and reliable message delivery.
