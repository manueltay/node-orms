# node-orms
Orms (bookshelf, sequelizer) and query builder (knex) test project

# Pre requisites
To run the applications you must have the postgres database
```
database: streambeta
host: 127.0.0.1
port: 5420
```

# Sequelizer

To initialize the project sequelizer type
 ```
 cd sequelizer-node-test
 npm init
 npm run dev:start
 ```
 
# Bookshelf

To initialize the project sequelizer type
 ```
 cd bookshelf-node-test
 npm init
 npm run dev:start
 ```
 
# Knex

To initialize the project sequelizer type
 ```
 cd knex-node-test
 npm init
 npm run dev:start
 ```
 
 # Services
 For every project the same services apply
 
 ## Contact
 Contact have the select, create, update and delete method implemented.
 
 ### Create
 ```
 POST http://localhost:8000/api/contacts/
 ```
 Body: 
 ```json
  {
	"contact": {
      "name": "Name",
      "username": "User Name",
      "type_id": "UUID_type_id",
      "date_created": "TIMESTAMP WITH TIME ZONE",
      "customer_id": "UUID_customer_id",
      "community_id": "UUID_community_id"
	}
}
 ```
 
 ### Select
 
 #### Select by Id
 ```
 GET http://localhost:8000/api/contacts/:ContactId
 ```
 #### Select all
 ```
 GET http://localhost:8000/api/contacts/
 ```
 
 ### Update
 ```
 PUT http://localhost:8000/api/contacts/:ContactId
 ```
 Body: 
 ```json
  {
	"contact": {
      "name": "Name",
      "username": "User Name",
      "type_id": "UUID_type_id",
      "customer_id": "UUID_customer_id",
      "community_id": "UUID_community_id"
	}
}
 ```
 
 ### Delete
 ```
 DELETE http://localhost:8000/api/contacts/:ContactId
 ```
