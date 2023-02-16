import initDB from "../../Helpers/initDB";
import Colleges from "../../Modal/Colleges";
initDB();
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchBlog(req, res);
      break;
    case "POST":
      await addCollege(req, res);
      break;
  }
};

// To Add College
const addCollege = async (req, res) => {
  const {
    Name,
    InstituteCode,
    Iframe,
    CollegeUnder,
    CollegeType,
    University,
    AddressLine,
    Taluka,
    District,
    City,
    Latitude,
    Longitude,
    Rating,
    ContactNo,
    Website,
    Email,
    ApprovedBy,
    Image,
    TopRecruiters,
  } = req.body;

  try {
   const college = await new Colleges({
      Name,
      InstituteCode,
      Iframe,
      CollegeUnder,
      CollegeType,
      University,
      Location: {
        AddressLine,
        Taluka,
        District,
        City,
        Latitude,
        Longitude,
      },
      Rating,
      Contacts: {
        ContactNo,
        Website,
        Email,
      },
      ApprovedBy,
      Image,
      TopRecruiters,
    }).save();
    res.status(201).json(college);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// // Fetch All Blogs
// const fetchBlog = async (req, res) => {
//   try {
//     const blog = await Blogs.find();
//     res.status(200).json(blog);
//   } catch (err) {
//     console.log(err);
//   }
// };
