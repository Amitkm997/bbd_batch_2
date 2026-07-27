import jwt from 'jsonwebtoken'
export const verifyToken=async(req, res,next)=>{
     try{
        const authToken=req.headers.authorization
        if(!authToken){
            return res.status(400).json({
                success:false,
                message:"Please provide token"
            })
        }
        const token=authToken.split(" ")[1];
        const decodedToken=await jwt.verify(token,"secret key");
        req.user=decodedToken;
        next();
     }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
     }
}