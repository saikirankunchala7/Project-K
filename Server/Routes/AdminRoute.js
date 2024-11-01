import express from 'express'; 
import con from "../utils/db.js";
import jwt from 'jsonwebtoken';

const router = express.Router() ;

router.post("",(req,res) => {
    const sql = "SELECT * FROM admin WHERE email= ? and password= ?" ;
    con.query(sql,[req.body.email,req.body.password],(err,result) => {
        if (err) return  res.json({loginStatus:false,Error:'Query Error'})
            if (result.length>0){
                console.log(result)
                const email= result[0].email ;
                const token=jwt.sign({role:"admin",email:email},"jwt_secret_key",{expiresIn:'1d'});
                res.cookie("token",token) 
                return  res.json({loginStatus:true})
            }
            else{
                console.log(err)
                return  res.json({loginStatus:false,Error:'Wrong Email or Password'})

            }
    })

    // console.log(req.body)

})

export {router as adminRouter}