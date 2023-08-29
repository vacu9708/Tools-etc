### Create a topic
~~~
docker exec -it <kafka-container-id> kafka-topics --bootstrap-server <bootstrap-server>:<port> --create --topic <topic-name> --partitions <number-of-partitions> --replication-factor <replication-factor> --config <configurations>
~~~
#### `Example`
~~~
docker exec -it broker kafka-topics --bootstrap-server broker:9092 --create --topic email --partitions 2
~~~
### Delete a topic
~~~
docker exec -it <kafka-container-id> kafka-topics --bootstrap-server <bootstrap-server>:<port> --delete --topic <topic-name>
~~~
#### `Exampel`
~~~
docker exec -it broker kafka-topics --bootstrap-server broker:9092 --create --delete email
~~~
### Check a topic
~~~
docker exec -it broker kafka-topics --bootstrap-server broker:9092 --describe --topic email
~~~
### Check a group
~~~
docker exec -it broker kafka-consumer-groups --bootstrap-server broker:9092 --describe --group email_senders
~~~
