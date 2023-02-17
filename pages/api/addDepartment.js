import initDB from "../../Helpers/initDB";
import Colleges from "../../Modal/Colleges";
initDB();

export default async (req, res) => {
  const { CourseName, InstituteCode, AnnalFee, ChoiceCode, CName } = req.body;
  let dep = {
    CourseName,
    AnnalFee,
    ChoiceCode,
    CName,
  };

  const filter = { InstituteCode: InstituteCode };

  const update = { $push: { Department: dep } };
  try {
    const addDep = await Colleges.findOneAndUpdate(filter, update);
    res.status(201).json({ msg: "Department Added", addDep });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
