import initDB from "../../Helpers/initDB";
import Colleges from "../../Modal/Colleges";
initDB();

export default async (req, res) => {
  const {
    fullName,
    dob,
    socialCategory,
    gender,
    martialStatus,
    phyChanged,
    insCode,
  } = req.body;

  try {
    if (!imageUrl || !instituteCode) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const clgName = await Colleges.findOne({
      instituteCode: instituteCode,
    });
    if (!clgName) {
      return res.status(404).json({ error: "This Institute not Exists" });
    }

    const filter = { instituteCode: instituteCode };
    const update = { $push: { images: imageUrl } };
    const addImages = await Colleges.findOneAndUpdate(filter, update);
    res.status(201).json({ msg: "Image Added", addImages });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
