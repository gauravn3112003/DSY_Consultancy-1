import initDB from "../../../Helpers/initDB";
import User from "directsecondyearadmission/Modal/User";
initDB();
export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "This Institute not Exists" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
