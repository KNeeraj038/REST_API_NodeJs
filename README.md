# REST_API_NodeJs
Demo of REST API using NodeJs

## Reading all courses
### example 
GET request below url
http://localhost:3000/api/courses/

## Reading specific course using ID
### example
GET request below url
http://localhost:3000/api/courses/1 

## // To add new course
### example 
POST request below url
http://localhost:3000/api/courses/
Json body
{
    "name":"Course 10"
}

## Update Course details.
### example 
PUT request below url
http://localhost:3000/api/courses/1

Json body
{
    "name":"Course One"
}

## Delete Course 
### example 
DELETE request below url
http://localhost:3000/api/courses/1