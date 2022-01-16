# REST API JS

> Study Repository

Hello, welcome.
:arrow_right: In this repository is recorded my progress in learning apis with Node and related technologies.

## Concept
- The acronym for API is Application Programming Interface is basically a set of rules and standards established by an application, so that other applications can use the features of this app.

- Intermediary for information exchange.

## Example
- Client
- Waiter (requests, take your orders to the kitchen) (API)
- kitchen (Server)

# REST

## Concept
- The acronym for REST is Representational State Transfer, it defines some obligations in data transfers and the transfer is made in a symbolic, figurative, representative and didactic way.

## How is data transferred?
**Usually the HTTP protocol is used!!!**

### Resources would then be: An entity or an object.

## 6 Restrictions to be RESTFUL
- Uniform Interface: Maintain uniformity, consistency, a pattern in the construction of the interface. Our API needs to be consistent for those who are going to consume. You need to make sense for the customer and not be confused. So, things like: the correct use of HTTP verbs; coherent endpoints (all plural endpoints, for example); use only one communication language (JSON) and not several at the same time; always send responses to customers; are examples of applying a uniform interface.

- Client-server: Separation of the client and data storage (server), so we can have a portability of our system, using React for WEB and React Native for the smartphone, for example.

- Stateless: Each request that the client makes to the server, must contain all the information necessary for the server to understand and respond (RESPONSE) to the request (REQUEST). Example: The user's session must be sent in all requests, to know if that user is authenticated and able to use the services, and the server cannot remember that the client was authenticated in the previous request. In our courses, we have by default to use tokens for communications.

- Cacheable: The responses to a request must be made explicit when saying whether that request may or may not be cached by the customer.

- Layered System: The client accesses an endpoint, without needing to know the complexity, what steps are needed for the server to answer the request, or what other layers the server will be dealing with, for the request to be answered.

- Code on demand (OPTIONAL): It allows our application to take codes, such as javascript, for example, and execute them on the client.

## Example
### Restaurant has to:
- Be clean
- That serves well
- Give you what you asked for
### The customer cannot:
- Arrive screaming
- Swear

**Good habits!!!**

# RESTFUL

## Concept
- RESTFUL, is the application of REST standards.

## Good habits
- Use HTTP verbs for our requests.
- Use plural or singular when creating endpoints? DOES NOT MATTER! use a pattern !!
- Do not leave a slash at the end of the endpoint
- Never leave the customer unanswered!

## Verbs HTTP
- GET: Receive data from a Resource.
- POST: Send data or information to be processed by a Resource.
- PUT: Update data of a Resource.
- DELETE: Delete a Resource

## Responses Status
- **1xx:**: Information
- **2xx:** Success
  - **200:** Ok
  - **201:** Created
  - **204:** Has no PUT POST DELETE content
- **3xx:** Redirection
- **4xx:** client error
  - **400:** Incorrect request
  - **404:** not found!
- **5xx:** Server error 500: Internal server error
