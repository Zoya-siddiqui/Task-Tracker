const asynchandler = (functionname)=> async(req , res , next)=>{

    try{
        await functionname(req , res ,next)
    }
    catch(error)
    {
        const statusCode = error.statusCode || 500;
            res.status(statusCode).json({
                success: false,
                messsage: error.message
            })
    }

}

export default asynchandler  // name must not be same file imageting can be same not be same
//export {asyn} can export mulitile while importin shoulb be exect same 