const express = require('express');
const Joi = require('joi');


const router = express();

function nameValidator(courseName){
    const nameSchema = Joi.object({
        name : Joi.string().min(3).required()
    })
    return nameSchema.validate(courseName);
}


var courses = [
    {id:1,name:"course-1"},
    {id:2,name:"course-2"},
    {id:3,name:"course-3"},
    {id:4,name:"course-4"},
]

// Reading all courses
/*
example 
GET
http://localhost:3000/api/courses/
*/
router.get('/', (req, res) => {
    res.send(courses);
});

// Reading specific course using ID
/*
example 
GET
http://localhost:3000/api/courses/1
*/
router.get('/:id',(req, res) => {
    var course = courses.find(c => c.id === parseInt(req.params.id));
    
    if(!course) return res.status(404).send("Not found!!"); 
    
    res.send(course);
});

// Adding new course
/*
example 
POST
http://localhost:3000/api/courses/

Json body
{
    "name":"Course 10"
}
*/
router.post('/',(req, res)=>{
    const {error} = nameValidator(req.body);

    if(error){
        return res.status(404).send(error.message)
    }

    var course = {
        id: (courses.length + 1),
        name: req.body.name
    };

    courses.push(course);
    res.send(course).status(200)
});

// Update Course details.
/*
example 
PUT
http://localhost:3000/api/courses/1

Json body
{
    "name":"Course One"
}
*/

router.put('/:id',(req, res)=>{
    // find course
    console.log(req.params.id);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("Course not found !")
    
    // validate
    const {error} = nameValidator(req.body);
    if(error){
        return res.status(404).send(error.message)
    }

    console.log(req.body)
    course.name = req.body.name;
    res.send(course).status(200)
});


// Delete Course
/*
example 
DELETE
http://localhost:3000/api/courses/1

*/
router.delete('/:id',(req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course) return res.status(404).send("Course not found !")
    
    var index = courses.indexOf(course);
    
    courses.splice(index,1);

    res.send(course).status(200)
});



module.exports = router