# REST_API_NodeJs
Demo of REST API using NodeJs

## Reading all courses
### example 
GET
http://localhost:3000/api/courses/

## Reading specific course using ID
### example
GET
http://localhost:3000/api/courses/1 

## // To add new course
### example 
POST
http://localhost:3000/api/courses/
Json body
{
    "name":"Course 10"
}

## Update Course details.
### example 
PUT
http://localhost:3000/api/courses/1

Json body
{
    "name":"Course One"
}

## Delete Course 
### example 
DELETE
http://localhost:3000/api/courses/1

