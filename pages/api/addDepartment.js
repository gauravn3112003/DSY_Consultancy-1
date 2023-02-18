import initDB from "../../Helpers/initDB";
import colleges from "../../Modal/colleges";
initDB();

export default async (req, res) => {
  const { courseName, instituteCode, annalFee, choiceCode } = req.body;

  const filter = { instituteCode: instituteCode };

  try {
    const checkDep = await colleges.findOne({
      department: { $elemMatch: { choiceCode } },
    });

    const clgName = await colleges.findOne({
      instituteCode: instituteCode,
    });
    if (checkDep) {
      return res.status(422).json({ error: "department already added" });
    }

    let dep = {
      courseName,
      annalFee,
      choiceCode,
      cName: clgName.name,
    };
    const update = { $push: { department: dep } };

    const addDep = await Colleges.findOneAndUpdate(filter, update);
    res.status(201).json({ msg: "department Added", addDep });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
