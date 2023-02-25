import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  basicDetails: {
    fName: String,
    dob: {
      type: String,
      default: "N/A",
    },
    socialCategory: {
      type: String,
      default: "N/A",
    },,
    maritialStatus: {
      type: String,
      default: "N/A",
    },
    phyChanged: {
      type: String,
      default: "N/A",
    }
  },
  credentials: {
    username: String,
    email: String,
    password: String,
  },
  contactDetails:{
    mobileNo:{
      type:String,
      default:"N/A"
    },
    email: String,
    city:{
      type:String,
      default:"N/A"
    },
    state:{
      type:String,
      default:"N/A"
    }
  },
  educationDetails:{
    ssc:{
      board:{
        type:String,
        default:"N/A"
      },
      school:{
        type:String,
        default:"N/A"
      },
      passingYear:Number,
      markType:String,
      percentage:Number
    },
    diploma:{
      board:{
        type:String,
        default:"N/A"
      },
      school:{
        type:String,
        default:"N/A"
      },
      passingYear:Number,
      markType:String,
      percentage:Number
    }
  },
  preferences:{
    university:{
      type:String,
      default:"N/A"
    },
    branch:{
      type:String,
      default:"N/A"
    },
    collegeType:{
      type:String,
      default:"N/A"
    },
    needLoan:{
      type:String,
      default:"N/A"
    }
  }
});
export default mongoose.models.user || mongoose.model("user", userSchema);
