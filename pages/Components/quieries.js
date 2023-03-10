import React, { useEffect, useState } from "react";
export const collegeByUnder = (selectedunder, colleges) => {
  if (!selectedunder.length) {
    return colleges;
  }
  return colleges.filter((under) => selectedunder.includes(under.collegeUnder));
};
