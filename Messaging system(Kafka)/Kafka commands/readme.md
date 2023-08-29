### Delete a topic
docker exec -it broker kafka-topics --bootstrap-server broker:9092 --delete --topic email
