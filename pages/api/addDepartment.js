import initDB from "../../Helpers/initDB";
import Colleges from "../../Modal/Colleges";
initDB();

export default async (req, res) => {
  const { courseName, instituteCode, annalFee, choiceCode, cName } = req.body;
  let dep = {
    courseName,
    annalFee,
    choiceCode,
    cName,
  };

  const filter = { instituteCode: instituteCode };
  const update = { $push: { department: dep } };

  try {
    const checkDep = await Colleges.findOne({
      department: { $elemMatch: { choiceCode } },
    });
    if (checkDep) {
      return res.status(422).json({ error: "department already added" });
    }
    const addDep = await Colleges.findOneAndUpdate(filter, update);
    res.status(201).json({ msg: "department Added", addDep });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
