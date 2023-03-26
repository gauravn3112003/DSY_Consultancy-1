import initDB from "../../Helpers/initDB";
import Colleges from "../../Modal/Colleges";
import Authenticated from "directsecondyearadmission/Helpers/Authenticated";

initDB();
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchUsers(req, res);
      break;
    case "POST":
      await checkColleges(req, res);
      break;
  }
};
const checkColleges = Authenticated(async (req, res) => {
  const { instituteCode } = req.body;
  const filter = { instituteCode: instituteCode };
  try {
    const checkInstitute = await Colleges.findOne(filter);
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
});
