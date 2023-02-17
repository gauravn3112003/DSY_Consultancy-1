import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const collegeSchema = new Schema({
  name: String,
  instituteCode: Number,
  iframe: String,
  collegeUnder: String,
  collegeType: String,
  university: String,
  department: [
    {
      courseName: String,
      annalFee: Number,
      choiceCode: Number,
      cName: String,
      categories: [
        {
          category: {
            type: String,
          },
          min: {
            type: String,
          },
          max: {
            type: String,
          },
          aFees: {
            type: String,
          },
          aSeats: {
            type: String,
          },
        },
      ],
    },
  ],

  location: {
    addressLine: String,
    taluka: String,
    district: String,
    city: String,
    latitude: String,
    longitude: String,
  },
  rating: String,
  contacts: {
    contactNo: Number,
    website: String,
    email: String,
  },
  approvedBy: String,
  image: String,
  topRecruiters: String,
  fullDescription: String,
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.models.college ||
  mongoose.model("college", collegeSchema);
