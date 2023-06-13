## Messaging patterns
- `Publish/Subscribe` allows broadcasting messages to multiple subscribers interested in a particular topic or channel.
- `Request/Reply` enables synchronous communication between a requester and a responder, where a response is expected.
- `Point-to-Point` ensures messages are processed by a single receiver, providing ordered and reliable message delivery.

## Kafka
Kafka is an open-source distributed streaming platform designed to handle high-throughput, fault-tolerant, and scalable data streaming applications.<br>
Kafka provides a publish-subscribe model for real-time data streams, where producers publish data to Kafka topics, and consumers subscribe to those topics to consume the data.

### key features of Kafka:
- Publish-Subscribe Messaging: Kafka allows producers to publish messages to one or more topics, and consumers can subscribe to those topics to receive the messages.
- Distributed Architecture: Kafka is designed to be highly scalable and fault-tolerant. It can be deployed in a distributed manner across multiple nodes or servers, allowing for horizontal scaling and high availability.
- Message Persistence: Kafka stores messages on disk, providing durability and fault tolerance. Messages can be retained for a configurable amount of time, enabling consumers to replay or process historical data.
- Fault Tolerance and Replication: Kafka uses a distributed commit log architecture, where messages are replicated across multiple brokers (servers) to ensure fault tolerance and data redundancy.
- Stream Processing: Kafka can be integrated with stream processing frameworks like Apache Flink, Apache Spark, or Apache Samza to perform real-time data processing on the streaming data.
- Scalability: Kafka is designed to handle large-scale streaming workloads. It can handle high message throughput and support thousands of concurrent producers and consumers.
- Ecosystem Integration: Kafka has a rich ecosystem with various client libraries available for different programming languages. It integrates with popular data processing frameworks, databases, and other tools, making it a versatile platform for building data-intensive applications.
