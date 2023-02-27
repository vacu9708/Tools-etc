# Making a sign-in, sign-up page using node.js
![image](https://user-images.githubusercontent.com/67142421/162634838-bb3d818c-31e9-4217-a003-c29cd38b5165.png)

### Prevention of invalid access without login (Using HTTP session)
![image](https://user-images.githubusercontent.com/67142421/162635003-6d9956c3-8694-4dd4-b9d1-0ae062a4be75.png)

### Login failed
![image](https://user-images.githubusercontent.com/67142421/162635397-484b62c6-194f-4bf1-9099-5971ec812aa9.png)

### Login successful
![image](https://user-images.githubusercontent.com/67142421/162635411-bb41b52f-ee48-4f9d-9967-6aea64851aa6.png)
![image](https://user-images.githubusercontent.com/67142421/162635425-82307748-aac9-4af4-9f40-829d9205f78e.png)

### Emitting a request from python
node.js
~~~javascript
backend.post("/process/detection", (req, res) => { // Request from python
    console.log(req.body);
    socket.emit('message from python', req.body.message);
});
~~~
python
~~~Python
import requests

data = {"message": "From python: Detected"}
requests.post('http://127.0.0.1:3000/process/detection', json=data)
~~~
![image](https://user-images.githubusercontent.com/67142421/162635472-34aeb9cb-8a5f-4864-832c-1e30e544b33a.png)

### Register page
![image](https://user-images.githubusercontent.com/67142421/162635570-8d604cf5-dc28-41ec-b736-bb2d5e361080.png)<br>
![image](https://user-images.githubusercontent.com/67142421/162635619-843bf79b-ad3a-4b1b-9dac-5c148cb6d58b.png)<br>
![image](https://user-images.githubusercontent.com/67142421/162635605-c584204c-88dd-41be-a7be-16a5093d581a.png)

