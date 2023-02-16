import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const collegeSchema = new Schema(
  {
  Name: String,
  InstituteCode: Number,
  Iframe: String,
  CollegeUnder: String,
  CollegeType: String,
  University: String,
  Department: [
    {
      CourseName: String,
      AnnalFee: Number,
      ChoiceCode: Number,
      CName: String,
      Categories: [
        {
          Category: {
            type: String,
            default: "Open",
          },
          Min: {
            type: String,
            default: "0",
          },
          Max: {
            type: String,
            default: "0",
          },
          AFees: {
            type: String,
            default: "0",
          },
          ASeats: {
            type: String,
            default: "0",
          },
        },
        {
          Category: {
            type: String,
            default: "ST",
          },
          Min: {
            type: String,
            default: "0",
          },
          Max: {
            type: String,
            default: "0",
          },
          AFees: {
            type: String,
            default: "0",
          },
          ASeats: {
            type: String,
            default: "0",
          },
        },

        {
          Category: {
            type: String,
            default: "OBC",
          },
          Min: {
            type: String,
            default: "0",
          },
          Max: {
            type: String,
            default: "0",
          },
          AFees: {
            type: String,
            default: "0",
          },
          ASeats: {
            type: String,
            default: "0",
          },
        },

        {
          Category: {
            type: String,
            default: "NT",
          },
          Min: {
            type: String,
            default: "0",
          },
          Max: {
            type: String,
            default: "0",
          },
          AFees: {
            type: String,
            default: "0",
          },
          ASeats: {
            type: String,
            default: "0",
          },
        },

        {
          Category: {
            type: String,
            default: "VJ",
          },
          Min: {
            type: String,
            default: "0",
          },
          Max: {
            type: String,
            default: "0",
          },
          AFees: {
            type: String,
            default: "0",
          },
          ASeats: {
            type: String,
            default: "0",
          },
        },

        {
          Category: {
            type: String,
            default: "SC",
          },
          Min: {
            type: String,
            default: "0",
          },
          Max: {
            type: String,
            default: "0",
          },
          AFees: {
            type: String,
            default: "0",
          },
          ASeats: {
            type: String,
            default: "0",
          },
        },

        {
          Category: {
            type: String,
            default: "EWS",
          },
          Min: {
            type: String,
            default: "0",
          },
          Max: {
            type: String,
            default: "0",
          },
          AFees: {
            type: String,
            default: "0",
          },
          ASeats: {
            type: String,
            default: "0",
          },
        },

        {
          Category: {
            type: String,
            default: "SEBC",
          },
          Min: {
            type: String,
            default: "0",
          },
          Max: {
            type: String,
            default: "0",
          },
          AFees: {
            type: String,
            default: "0",
          },
          ASeats: {
            type: String,
            default: "0",
          },
        },
      ],
    },
  ],

  Location: {
    AddressLine: String,
    Taluka: String,
    District: String,
    City: String,
    Latitude: String,
    Longitude: String,
  },
  Rating: String,
  Contacts: {
    ContactNo: Number,
    Website: String,
    Email: String,
  },
  ApprovedBy: String,
  Image: String,
  TopRecruiters: String,
  FullDescription: String,
  UpdatedDate: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.models.college || mongoose.model("college", collegeSchema);
