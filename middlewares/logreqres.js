const fs = require(`fs`);

const handleLogReqRes = async (req,res,next)=>{

    const log = `${new Date().getTime()} ${req.method} ${req.url} \n `
    fs.appendFileSync(`log.text`,log)
    next()

}

module.exports = handleLogReqRes