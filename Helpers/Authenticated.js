import jwt from "jsonwebtoken";

function Authenticated(icomponent) {
  return (req, res) => {
    const { Authorization } = req.headers;
    if (!Authorization) {
      return res.status(401).json({ error: "You must logged in" });
    }

    try {
      jwt.verify(
        Authorization,
        process.env.JWT_SECRET,
        function (err, decoded) {
          if (err) {
            return res.status(401).json({ error: "You must logged in" });
          }
          if (decoded) {
            req.decoded = decoded;
            return icomponent(req, res);
          }
        }
      );
    } catch (err) {
      console.log(err);
      return res.status(401).json({ error: "Internal Server Error" });
    }
  };
}

export default Authenticated;
