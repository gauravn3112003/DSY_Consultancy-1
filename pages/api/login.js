import initDB from "../../Helpers/initDB";
import User from "directsecondyearadmission/Modal/User";
var CryptoJS = require("crypto-js");
import jwt from "jsonwebtoken";
initDB();
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await signUpUser(req, res);
      break;
  }
};

// To Add College
const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(401).json({ error: "Please fill all the fields" });
    }
    const checkUserEmail = await User.findOne({
      "credentails.email": email,
    });
    if (!checkUserEmail) {
      return res.status(401).json({ error: "User Not Found" });
    }
    var bytes = CryptoJS.AES.decrypt(
      checkUserEmail.credentails.password,
      "secret key 123"
    );
    var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    if (
      checkUserEmail.credentails.email == email &&
      password == decryptedPass
    ) {
      const token = jwt.sign(
        {
          userId: User._id,
          userData: checkUserEmail,
        },
        "secretKeyJWT",
        {
          expiresIn: "7d",
        }
      );

      // const decoded = jwt.verify(token, "secretKeyJWT");
      // const payload =
      return res.status(200).json({ msg: "Login Successfull", token });
    } else {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
