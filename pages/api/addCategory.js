import initDB from "../../Helpers/initDB";
import colleges from "../../Modal/colleges";
initDB();

export default async (req, res) => {
  const { category, min, max, aFees, aSeats, choiceCode } = req.body;
  let studentCategory = {
    category,
    min,
    max,
    aFees,
    aSeats,
  };

  const filter = { department: { $elemMatch: { choiceCode } } };
  const update = { $push: { "department.$.categories": studentCategory } };
  try {
    const checkCat = await colleges.findOne({
      department: {
        $elemMatch: {
          choiceCode,
          categories: {
            $elemMatch: { category },
          },
        },
      },
    });
    if (checkCat) {
      return res.status(422).json({ error: "Category already added" });
    }
    const addCat = await Colleges.findOneAndUpdate(filter, update);
    res.status(201).json({ msg: "Category Added" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
