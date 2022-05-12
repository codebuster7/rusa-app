//> CRUD : Create , Reade , Update , Delete

const User = require("../models/user");
const { userValidation } = require("../models/validation");

//- Create
const createUser = async (req, res) => {
    try {
        //1. if grp: self then validate or just validate other suff accept register
        //2. diff schema : register later loop validation , course,area , institute
            // console.log(req.body)
            // User Validation
            const value = await userValidation.validateAsync(req.body);
            const users = await User.create(value)
            // console.log(value.error)
            await users.save();
            // console.log('created')
            res.send("Success");
        // Already Exists
        // const exists = await User.find({'data.register.email'})
        // if(exists){

        // }
        // create user

    } catch (err) {
        res.json({ error: err });
    }
};


//- Read All
// try getting all documents async;ly
const getAllUser = async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
        // console.log(User);
    } catch (err) {
        res.json({ error: err });
    }
};

//- Read Specific
//- if Program is not available then send err
// get users specific to course || centre
const getUser = async (req, res) => {
    try {
        let id = req.params.centreID;
        let subid = req.params.courseID;
        console.log(req.params)
        const data = await User.find({ 'centreID': id, 'courseID': subid }, { 'data': 1 })
        // const data = await User.find({id:id,subid:subid},{name:1})
        res.json(data);
    } catch (err) {
        // res.send(err)
        res.json({ error: err });
    }
};


//- Update
//- update(Original,New)
//- if id is not avaliable send err

const editUser = async (req, res) => {
    try {
        const update = await User.updateOne({ _id: req.params.id }, { Program: "Program 33" });
        // const Programs = await Program.find();
        console.log("Updated : " + update);
        if (update == "") {
            // return res.status(404).json({error: "Program is not available"})
            return res.status(404).json({ error: "not available" });
        } else {
            return res.send("Updated +");
        }
    } catch (err) {
        res.json({ error: err.message });
    }
};


//- Delete
const removeUser = async (req, res) => {
    //- try deleting a specific id
    try {
        const remove = await User.deleteOne({ _id: req.params.id });
        console.log("remove : " + remove);
        //- if id is not available then send err
        //- else delete the id
        if (remove == "") {
            // return res.status(404).json({error: "Program is not available"})
            return res.status(404).json({ error: "ID not available" });
        } else {
            return res.send("Deleted -");
        }
    } catch (err) {
        res.json({ error: err.message });
    }
};

module.exports = {
    createUser,
    getUser,
    getAllUser,
    editUser,
    removeUser,
};