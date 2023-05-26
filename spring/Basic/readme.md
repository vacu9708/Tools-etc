# Java basic
### Interface and abstract class
In Java, an interface and an abstract class define a set of requirements that a class implementing that must provide. In other words, They are a "blueprint"<br>

||Abstract class|Interface|
|---|---|---|
|Purpose|Both serve as blueprints for classes||
|Instantiation|Both cannot be directly instantiated||
|Implementation|Can have both implemented methods and non-implemented methods|No implementations|
|Inheritance|Supports single inheritance|A class can implement multiple interfaces|

In summary, abstract classes are blueprints that can have implemented methods while interfaces are pure blueprints.

# Spring core
### Inversion of control
Instead of a program controlling the objects it uses, the control of object creation and management is shifted to an external container.<br>
@Component, @Service, etc instruct the Spring IoC container to create and manage an instance of that class as a bean.<br>
@Autowired is used for [Dependency injection](https://github.com/vacu9708/Fundamental-knowledge/tree/main/Development%20methodology/Object%20Oriented%20Programming), indicating that a dependency should be automatically injected by the Spring IoC container.<br>

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

# Data Transfer Objects
DTOs serve as containers for transferring data between different layers of an application. such as between the presentation layer and the service layer.<br>
The SQL query retrieves data from a database, and the results are mapped to DTOs. These DTOs are then passed between layers.<br>
DTOs include only the necessary information for transferring data without unnecessary entity-specific details such as primary keys or database-specific configuration.<br>
