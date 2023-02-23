import initDB from "../../../Helpers/initDB";
import Colleges from "../../../Modal/Colleges";
initDB();
export default async function handler(req, res) {
  const { id } = req.query;
  const College = await Colleges.findById(id);
  res.json(College);
}
