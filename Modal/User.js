import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    credentails: {
      username: String,
      email: String,
      role: {
        type: String,
        default: "user",
      },
      password: String,
      fName: String,
    },
    basicDetails: {
      dob: {
        type: String,
        default: "N/A",
      },
      socialCategory: {
        type: String,
        default: "N/A",
      },
      maritialStatus: {
        type: String,
        default: "N/A",
      },
      phyChanged: {
        type: String,
        default: "N/A",
      },
    },
    contactDetails: {
      mobileNo: {
        type: String,
        default: "N/A",
      },
      email: String,
      city: {
        type: String,
        default: "N/A",
      },
      state: {
        type: String,
        default: "N/A",
      },
    },
    educationDetails: {
      ssc: {
        board: {
          type: String,
          default: "N/A",
        },
        school: {
          type: String,
          default: "N/A",
        },
        passingYear: {
          type: Number,
          default: 0,
        },
        markType: {
          type: String,
          default: "Percetage",
        },
        percentage: {
          type: Number,
          default: 0,
        },
      },
      diploma: {
        board: {
          type: String,
          default: "N/A",
        },
        school: {
          type: String,
          default: "N/A",
        },
        passingYear: {
          type: Number,
          default: 0,
        },
        markType: {
          type: String,
          default: "Percetage",
        },
        percentage: {
          type: Number,
          default: 0,
        },
      },
    },
    preferences: {
      university: {
        type: String,
        default: "N/A",
      },
      branch: {
        type: String,
        default: "N/A",
      },
      collegeType: {
        type: String,
        default: "N/A",
      },
      needLoan: {
        type: String,
        default: "N/A",
      },
    },
  },
  { timestamps: true }
);
export default mongoose.models.user || mongoose.model("user", userSchema);
