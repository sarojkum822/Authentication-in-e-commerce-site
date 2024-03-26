import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModal from "../modals/userModal.js";
import JWT from 'jsonwebtoken';

export const registerController = async (req,res) => {
        try {

            const {name,email,password,phone,address} = req.body;

            if(!name){
                res.send({message:'Name is Required'})
            }

            if(!email){
                res.send({message:'email is Required'})
            }
            if(!password){
                res.send({message:'password is Required'})
            }
            if(!phone){
                res.send({message:'phone is Required'})
            }
            if(!address){
                res.send({message:'address is Required'})
            }

            //check user
            const existingUser = await userModal.findOne({email});

            //existing user

            if(existingUser){
                return res.send(200).send({
                    sucess:false,
                    message:"Already Registered Please Login"
                })
            }


            //register user
            const hashedPassword= await hashPassword(password);

            //save user
            const user =await new userModal({name,email,password:hashedPassword,phone,address}).save();

            res.status(201).send({
                success:true,
                message:'User registered sucessfully',
                user,
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).send({
                sucess:false,
                message:'Error in Registeration',
                error    
            })
            
        }
}

//post login

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        const user = await userModal.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'Email not found' });
        }

        const match = await comparePassword(password, user.password);
        
        if (!match) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Login failed', error });
    }
};


export const testController=async(req,res)=>{
    try {
       res.send("protected route");
    } catch (error) {
        console.log(error);
    }
}
