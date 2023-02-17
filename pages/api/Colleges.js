import initDB from "../../Helpers/initDB";
import Colleges from "../../Modal/Colleges";
initDB();
export default async (req, res) => {
  switch (req.method) {
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
    const checkCollege = await Colleges.findOne({ InstituteCode });
    if (checkCollege) {
      return res.status(422).json({ error: "Already College Added" });
    }
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
    res.status(201).json({ msg: "College Added", college });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
