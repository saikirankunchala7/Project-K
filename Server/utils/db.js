import mysql from 'mysql' 

const con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:'kunchala7',
    database:'saikiran'

})


con.connect(function(err){
    if (err){
        console.log(err)
        console.log('Connection Error')
    }else{
        console.log('Connected')
    }
})

export default con