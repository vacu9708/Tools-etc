# Basics
- Inversion of control: Instead of a program controlling the objects it uses, the control is shifted to a separate framework.
- [Dependency Inversion](https://github.com/vacu9708/Fundamental-knowledge/edit/main/Etc/Object%20Oriented%20Programming/readme.md#L199) is automated by the spring annotation **@autowired**, which is called **Dependency Injection**.


# Spring container
- Spring container: manages spring beans
- Bean factory: basic spring container that is used for memory is severely constrained
- Application context: advanced spring container that most enterprise applications use

# REST
- spring MVC: the oldest libary forcreating RESTful web services, which is blocking by nature
- webflux: non blocking version of spring MVC that was introduced in spring 5
- webflux.fn: functional programming version of webflux
