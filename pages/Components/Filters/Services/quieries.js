import React, { useEffect, useState } from "react";

export const collegeByUnder = (selectedunder, data) => {
  const [colleges, setcolleges] = useState(data);
if (!selectedunder.length) {
    return data
}
  return colleges.filter((under) => selectedunder.includes(under.collegeUnder));
};
