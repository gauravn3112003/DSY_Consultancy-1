export const collegeByUnder = (selectedunder, colleges, district) => {
  let filterCollege = !selectedunder.length
    ? colleges
    : colleges.filter((clgDetail) =>
        selectedunder.includes(clgDetail.collegeUnder)
      );

  if (filterCollege.length == 0) {
    return colleges;
  }
  // Sorting by district
  return district == ""
    ? filterCollege
    : filterCollege.filter((filterClg) =>
        district.includes(filterClg.location.district)
      );
};
