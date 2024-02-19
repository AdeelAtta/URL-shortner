const uniqueid = require('uniqueid')
const urlModel = require(`../model/shorturl`)

async function handleRedirectUrl(req, res) {

    const entry = await urlModel.findOne({short:req.params.short});

    if(!entry) return res.status(404).end(`URL not Found`)
    return res.redirect(`https://www.google.com`);

}

async function handleAddNewUrls(req, res) {

    const url = req.body.url;
    const short = uniqueid(null,`adeel`)
    if(!url){
        return res.status(400).json(`URL is required`);
    }

     await urlModel.create({ url: url, short: short, visitHistory:[]});

    return res.json(short);
}



module.exports = {
     handleRedirectUrl,
    handleAddNewUrls
}