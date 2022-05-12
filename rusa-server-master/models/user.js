const mongoose = require("mongoose");
// User
/*
User
- course , centre , area
- register , institute
- date
*/
 
let subSchema = {
    name: {
        type: String,
        trim: true
    },
    category:{
        type: String,
        trim: true  
    },
    email: {
        type: String,
        trim: true
    },
    number: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    qualification: {
        name: {
            type: String,
            trim: true
        },
        course: {
            type: String,
            trim: true
        }
    },
    stream: {
        name: {
            type: String,
            trim: true
        },
        other: {
            type: String,
            trim: true
        },
        year: {
            type: String,
            trim: true
        }
    },
    designation: {
        name: {
            type: String,
            trim: true
        },
        other: {
            type: String,
            trim: true
        }
    },
    teaching: {
        type: String,
        trim: true
    }
}

let instituteSchema = {
            university: {
                type: String,
                trim: true
            },
            uni_type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            address: {
                type: String,
                trim: true
            },
            head: {
                type: String,
                trim: true
            },
            number: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                trim: true
            },
            expectation: {
                type: String,
                trim: true
            }
        }

const userSchema = new mongoose.Schema({
    centreID: {
        type: Number,
        trim: true
    },
    courseID: {
        type: Number,
        trim: true
    },
    data: {
        course: String,
        centre: String,
        area: {
            region: String,
            district: String,
        },
        register: [subSchema],
        institute: instituteSchema,
        date: {
            type: String,
            trim: true
        }
    }
});



/*const regSchema = new mongoose.Schema({
    centreID: {
        type: Number,
        trim: true
    },
    courseID: {
        type: Number,
        trim: true
    },

    data: {

        course: String,
        centre: String,

        area: {
            region: String,
            district: String,
        },

        register: [{
            name: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                trim: true
            },
            number: {
                type: String,
                trim: true
            },
            gender: {
                type: String,
                trim: true
            },
            qualification: {
                name: {
                    type: String,
                    trim: true
                },
                course: {
                    type: String,
                    trim: true
                }
            },
            stream: {
                name: {
                    type: String,
                    trim: true
                },
                other: {
                    type: String,
                    trim: true
                },
                year: {
                    type: String,
                    trim: true
                }
            },
            designation: {
                name: {
                    type: String,
                    trim: true
                },
                other: {
                    type: String,
                    trim: true
                }
            },
            teaching: {
                type: String,
                trim: true
            }
        }],

        institute: {
            university: {
                type: String,
                trim: true
            },
            uni_type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            address: {
                type: String,
                trim: true
            },
            head: {
                type: String,
                trim: true
            },
            number: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                trim: true
            },
            expectation: {
                type: String,
                trim: true
            }
        },
        date: {
            type: String,
            trim: true
        }
    }
});*/

/*const userSchema = new mongoose.Schema({
    id: Number,
    subid: Number,
    name: String,
    email: String
})*/

module.exports =  mongoose.model("users", userSchema);