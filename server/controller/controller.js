const Userdb = require('../model/model')


//Create and save new user
exports.createUser = (req, res)=>{
    //Validate user
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty "})
        return;
    }
    //New user
    const user = new Userdb(req.body)
    
    //Save user
    user.save().then((data)=>{
        res.redirect('/add_user')
    }).catch((err)=>{
        res.status(500).send({
            message : err.message || "Something went wrong"
        })
    })
    

}

//Retrieve and return all users / retrieve a single user
exports.findUser = (req, res)=>{
    if(req.query.id){
        const id = req.query.id
        Userdb.findById({ _id : id })
        .then((data)=>{
            if(!data){
                res.status(400).send({ message : 'User was not found'})
            }else{
                res.send(data)
            }
        }).catch((err)=>{
            res.status(500).send({
                message : "No user found"
            })
        })    
    }else{
        Userdb.find().then((data)=>{
            if(!data){
                res.status(400).send({ message : 'User was not found'})
            }else{
                res.send(data)
            }
        }).catch((err)=>{
            res.status(500).send({
                message : "No user found"
            })
        })
    }

}

//Update a new identified user by user id
exports.updateUser = async (req, res)=>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty "})
        return;
    }
    const userId = req.params.id
    Userdb.findByIdAndUpdate(userId, req.body, { useFindAndModify : false })
    .then((data)=>{
        if(!data){
            res.status(400).send({ message : 'Can not update date'})
        }else{
            res.send(data)
        }
    })
    .catch((err)=>{
        res.status(500).send({ message : 'Error in updating of user information'})
    })
    
//   res.json(req.body)  
}

exports.deleteUser = (req, res)=>{
    const userId = req.params.id
    Userdb.findByIdAndDelete(userId)
    .then((data)=>{
        if(!data){
            res.status(400).send({ message : 'Can not find the user'})
        }else{
            res.send(data)
        }
    })
    .catch((err)=>{
        res.status(500).send({ message : 'Could not delete' , err})
    })
}