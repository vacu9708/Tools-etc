# Basics
- Inversion of control: Instead of a program controlling the objects it uses, the control is shifted to a separate framework.
- ## Dependency Injection
  [Dependency Inversion](https://github.com/vacu9708/Fundamental-knowledge/blob/main/Etc/Object%20Oriented%20Programming) is automated by the spring annotation **@Autowired**, which is called **Dependency Injection**. @Autowired is also automated in Spring.

# MVC pattern
- **Model**: is data layer responsible for database.
- **View**: is responsible for rendering the data passed by the Controller
- **Controller**: refers to a component responsible for handling incoming HTTP requests and passing an appropriate HTTP response to the View.
- **Service**: is responsible for the business logic and interacting with the Model for the **Controller** to use.
![image](https://user-images.githubusercontent.com/67142421/223227356-59a2489a-7cba-4ce4-918e-96aab28311d9.png)


# Spring container
- Spring container: manages spring beans
- Bean factory: basic spring container that is used for memory is severely constrained
- Application context: advanced spring container that most enterprise applications use

# Spring REST
- spring MVC: the oldest libary for creating RESTful web services, which is blocking by nature
- webflux: non blocking version of spring MVC that was introduced in spring 5
- webflux.fn: functional programming version of webflux

# Concepts
## Data Transfer Objects
DTOs contain data and have no behavior, meaning they are used only for data exchange and not for any business logic.<br>
DTOs are used to transfer data between the presentation layer(controller) and the service layer.
