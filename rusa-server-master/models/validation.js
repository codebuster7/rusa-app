 // joi : Joi.string().alphanum().min(3).max(30).required()
/*
- institute
- register
- valid = int + reg

*/

const Joi = require('joi');

const institute = Joi.object({
        university: Joi.string().required(),
        uni_type: Joi.string().required(),
        name: Joi.string().required(),
        address: Joi.string().required(),
        head: Joi.string().required(),
        number: Joi.string().required(),
        email: Joi.string().required(),
        expectation: Joi.string().required()
})

const register = Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string().required(),
    email: Joi.string().required(),
    number: Joi.string().required(),
    gender: Joi.string().required(),
    qualification: {
        name: Joi.string().required(),
        course: Joi.string().required()
    },
    stream: {
        name: Joi.string().allow(null, ''),
        other: Joi.string().allow(null, ''),
        year: Joi.string().allow(null, '')
    },
    designation: {
        name: Joi.string().allow(null, ''),
        other: Joi.string().allow(null, '')
    },
    teaching: Joi.string().allow(null, '')
})

const userValidation = Joi.object({
    centreID: Joi.number().required(),
    courseID: Joi.number().required(),
    data: {
        course: Joi.string().required(),
        centre: Joi.string().required(),
        area: {
            region: Joi.string().required(),
            district: Joi.string().required()
        },
        register: Joi.array().items(register),
        institute: institute,
        date: Joi.string().allow(null, '')
    }
})



const testJson = {
    "centreID": 1,
    "courseID": 6,
    "data": {
        "course": "Faculty Development Programs in Techno-pedagogy and Andragogy for Active",
        "centre": "Centre for Multidisciplinary Curriculum and Pedagogy",
        "area": {
            "region": "Nashik",
            "district": "Thane"
        },
        "register": [{
                "name": "sanskar",
                "category": "Parent",
                "email": "piyush@gmail.com",
                "number": "1234",
                "gender": "male",
                "qualification": {
                    "name": "PhD",
                    "course": "IT"
                },
                "stream": {
                    "name": "Arts (Performing Arts, Visual Arts)",
                    "other": "sdf",
                    "year": "2"
                },
                "designation": {
                    "name": "U G Faculty",
                    "other": "df"
                },
                "teaching": "0 - 5 years"
            },
            {
                "name": "Shashank",
                "category": "Parent",
                "email": "piyush@gmail.com",
                "number": "1234",
                "gender": "male",
                "qualification": {
                    "name": "PhD",
                    "course": "IT"
                },
                "stream": {
                    "name": "Arts (Performing Arts, Visual Arts)",
                    "other": "sdf",
                    "year": "2"
                },
                "designation": {
                    "name": "U G Faculty",
                    "other": "df"
                },
                "teaching": "0 - 5 years"

            },
            {
                "name": "Ratan",
                "category": "Parent",
                "email": "piyush@gmail.com",
                "number": "1234",
                "gender": "male",
                "qualification": {
                    "name": "PhD",
                    "course": "IT"
                },
                "stream": {
                    "name": "Arts (Performing Arts, Visual Arts)",
                    "other": "sdf",
                    "year": "2"
                },
                "designation": {
                    "name": "U G Faculty",
                    "other": "df"
                },
                "teaching": "0 - 5 years"

            }
        ],
        "institute": {
            "university": "Gokhale Institute of Politics &amp; Economics, Pune",
            "uni_type": "Aided Private College",
            "name": "St Lawrence",
            "address": "asdfasf",
            "head": "Silvester",
            "number": "1234567890",
            "email": "hello@gmail.com",
            "expectation": "asdasd"
        },
        "date": "Apr, 2022"
    }
}
// console.log(res.error)
module.exports = { userValidation }

// let res = testValidation.validate(testJson)
// console.log(res)