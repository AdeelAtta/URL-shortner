const express = require(`express`);

const connectToMongoDB = require(`./connect`)
const handleLogReqRes = require(`./middlewares/logreqres`)
const handleUrlRoutes = require(`./routes/shorturl`)

const app = express()
const PORT = 3000

connectToMongoDB(`mongodb://127.0.0.1:27017/urlshortner`).then(()=>{console.log(`MongoDB Connected!`)});


app.use(`/`,handleLogReqRes);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(`/url`,handleUrlRoutes)

app.get(`/`,(req,res)=>{
    res.end(`Welcome to API`)
})


app.listen(PORT,()=>{
    console.log(`server started! on \n http://localhost:${PORT}`)
})