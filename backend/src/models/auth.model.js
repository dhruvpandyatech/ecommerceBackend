import mongoose, { BaseCollection, mongo } from "mongoose";
import { lowercase, maxLength, minLength, number, string } from "zod";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        minLength:5,
        required:true,
        trim:true,
        maxLength:60
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        select:false
    },
    phone:{
        type:String,
        match:/^[6-9]\d{9}$/
    },
    role:{
        type:String,
        enum:["user","admin","seller"],
        default:"user",
        index:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    avatar:{
        url:String,
        publicId:String
    },
    shopName:{
        type:String
    },
    addresses:[{
        label:{
            type:String,
            maxLength:120,
            trim:true
        },
        fullName:{
            type:String,
            maxLength:120,
            trim:true
        },
        phone:{
            type:String,
            maxLength:10,
            trim:true
        },
        city:{
            type:String,
            maxLength:120,
            trim:true
        },
        state:{
            type:String,
            maxLength:120,
            trim:true
        },
        pincode:{
            type:Number,
            maxLength:120,
            trim:true
        },
        isDefault:{
            type:Boolean,
            default:false
        }
    }]},
    {timestamps:true}
)


const UserModel = mongoose.model("user",userSchema);
export default UserModel;
// const category = mongoose.Schema({
//     name:{type:String,required:true,trim:true,},
//     slug:{type:String,
//         required:true,
//         unique:true,
//         lowercase:true,
//         index:true
//     },
//     image:{
//         url:String,
//         publicId:String,
//     },
//     parent:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Category",
//         default:null,
//         index:true
//     },
//     position:{
//         type:Number,
//         default:0
//     },
//     isActive:{
//         type:Boolean,
//         default:true
//     }

// })