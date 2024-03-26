import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js'
import colors from 'colors'
import authRoutes from './Routes/authRoutes.js'
import cors from 'cors'

dotenv.config();

connectDB();


const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

const PORT = process.env.PORT || 8080;

//routes
app.use('/api/v1/auth',authRoutes);


//rest api
app.get('/',(req,res)=>{
    res.send("Ecommerce website");
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${process.env.DEV_HEAD} on port ${PORT}`.bgRed.white);
})