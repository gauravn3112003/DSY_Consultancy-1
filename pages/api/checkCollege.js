import initDB from "../../Helpers/initDB";
import colleges from "../../Modal/colleges";
initDB();

export default async (req, res) => {
  const { instituteCode } = req.body;

  const filter = { instituteCode: instituteCode };

  try {
    const checkInstitute = await colleges.findOne(filter);
    if (checkInstitute) {
      return res
        .status(201)
        .json({ error: "College already Exists", code: instituteCode });
    } else {
      return res
        .status(201)
        .json({ msg: "College not Exists", code: instituteCode });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
