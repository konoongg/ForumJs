const User = require('./models/users')
const Role = require('./models/roles')

const start = async ()=>{
    try{
        const userRole = new Role()
        const adminRole = new Role({value: "admin"})
        await userRole.save()
        await adminRole.save()
    } catch(e){
        console.log(e)
    }


} 