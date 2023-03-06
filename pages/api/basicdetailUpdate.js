import initDB from "../../Helpers/initDB";
import User from "directsecondyearadmission/Modal/User";
initDB();

export default async (req, res) => {
  const {
    fullName,
    dob,
    socialCategory,
    gender,
    maritialStatus,
    phyChanged,
    id,
  } = req.body;

  const progress = await User.findById(id);
  let newProcess = 40;
  const process = 40;
  if (progress.profileCompletion < 40) {
    newProcess = process;
  }

  try {
    if (
      !fullName ||
      !dob ||
      !socialCategory ||
      !gender ||
      !maritialStatus ||
      !phyChanged ||
      !id
    ) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }
    let credentials = {};

    let bDeatails = {
      maritialStatus: maritialStatus,
      dob: dob,
      socialCategory: socialCategory,
      phyChanged: phyChanged,
      gender: gender,
      fName: fullName,
    };

    const update = {
      profileCompletion: newProcess,
      basicDetails: bDeatails,
      "credentails.fName": fullName,
    };
    const userData = await User.findOneAndUpdate({ _id: id }, update);

    if (!userData) {
      return res.status(404).json({ error: "This User not Exists" });
    }
    res.status(201).json({
      process: progress.profileCompletion,
      msg: "User Updated Sucessfll",
      userData,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
