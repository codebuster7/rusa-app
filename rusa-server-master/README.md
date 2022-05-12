# Basckend

# MongoDB
- https://sqlserverguides.com/mongodb-data-directory-data-db-not-found/
- Local : mongodb://localhost:27017/<db>
- `mongod --ipv6 `
- http://localhost:5000/api/v1/users

# Schema


```json
// courseID , centreID , areaID , 
 {
    "_id": "Object('123Abc')",

    "course": "Maharashtra State Development of Educators and Enhancement in Delivery (MS-DEED) Program",

    "centre": "Centre for Multidisciplinary Curriculum and Pedagogy",

    "area":{
     	"region": "Pune",
      "district": "Kolhapur",
    },

    "register": {
        "name": "patil manisha",
        "category": "Parent",
        "email": "manisha@gmail.com",
        "number": "123",
        "gender": "female",
        "qualification": {
          "name": "Bsc",
          "course": "IT"
        },
        "stream": {
          "name": "Science",
          "other": "",
          "year": ""
        },
        "designation": {
          "name": "",
          "other": ""
        },
        "teaching": ""
      },

      "institute": {
        "university": "Institute of Chemical Technology, Mumbai",
        "type": "Government College",
        "name": "St Lawrence",
        "address": "Lokmanya Nagar",
        "head": "Patil Sir",
        "number": "123",
        "email": "stlawrence@gmail.com",
        "expectation": "nice to meet you"
      },

      "date": "May, 2022"
  }

```
# Deployment

## Heroku
```sh
> touch Procfile
> 

```