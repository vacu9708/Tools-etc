### Create a topic
~~~
docker exec -it <kafka-container-id> kafka-topics --bootstrap-server <bootstrap-server>:<port> --create --topic <topic-name> --partitions <number-of-partitions> --replication-factor <replication-factor> --config <configurations>
~~~
### Delete a topic
~~~
docker exec -it <kafka-container-id> kafka-topics --bootstrap-server <bootstrap-server>:<port> --delete --topic <topic-name>
~~~
