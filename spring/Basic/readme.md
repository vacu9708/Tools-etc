# Java basic
### Interface
In Java, an interface defines a set of requirements that a class implementing that interface must provide.<br>

# Spring core
### Inversion of control
Instead of a program controlling the objects it uses, the control is shifted to a separate framework.<br>
[Dependency injection](https://github.com/vacu9708/Fundamental-knowledge/tree/main/Development%20methodology/Object%20Oriented%20Programming) is automated by the spring annotation **@Autowired**.<br>
@Autowired are included in some annotations such as @Component, @Controller, @Service, etc in Spring.

### Auto allocation of classes
Spring scans for classes annotated with @Component (and other stereotype annotations like @Service, @Repository, etc.) and creates instances of those classes as beans.<br>
#### @Component, @Service, @Repository
All of these indicate that the class is a candidate for auto-detection as a Spring bean.<br>
While the three annotations have different names, they are technically equivalent in terms of functionality. The different names help in semantic clarity.<br>
>@Controller is not for semantic clarity but specifically used for classes that serve as controllers in the MVC architecture, handling HTTP requests.

# MVC pattern
- **Model**: is data layer responsible for database.
- **View**: is responsible for rendering the data passed by the Controller
- **Controller**: refers to a component responsible for routing incoming requests, invoking the service associated with a specific URL, and generating responses to the View.
- **Service**: is responsible for the business logic for the **Controller** to use.
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
