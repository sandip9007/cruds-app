const axios = require('axios')

exports.anyName = (req, res)=>{
axios.get('http://localhost:3200/api/users/').then((response)=>{
    console.log(response)
    res.render('index', {
        
        user : response.data
    })
})

}

exports.add_user = (req, res)=>{
    res.render('add_user')
}


exports.update_user = (req, res)=>{
    // axios.get('http://localhost:3200/api/users/',{params : {id:req.query.id}})
    axios.get('http://localhost:3200/api/users?id='+req.query.id)
    .then((userdata)=>{
        res.render("update_user", {user : userdata.data})
        console.log(userdata.data)
    }).catch(()=>{

    })
    // res.render('update_user')
}

