import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

// creating a instace of the Express application
const app = express();

// its middelware setup to parse url encodded data
//when we send data to the serve the server accept url encodded data ts javectiption object by using this the server understacnd the data  format 
app.use(express.urlencoded({extended : true}))

// middleware to parse json data from incomming request To let the server understand and work with JSON data sent by clients.
app.use(express.json())
app.use(cookieParser());

// cors = > cors origin resouseces sgaring  htere be put that if the requise form perticural url then response   To allow your frontend to access the backend, you need to enable CORS on the backend. allow to share the resocess or cummunicate froontend to the backen d
app.use(cors({
    origin: ["https://task-tracker-frontend-mauve.vercel.app", "http://localhost:5173"],
    credentials: true,
}));


app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.all('*', (req, res) => {
    res.status(404).send('OOPS! 404 Page not found')
})

// routes
import userRouter from './routes/user.routes.js'
app.use('/api/user' , userRouter)


export {app};