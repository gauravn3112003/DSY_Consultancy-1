export const collegeByUnder = (selectedunder, colleges, district) => {
  console.log(district);

  if (district == "" && !selectedunder.length) {
    return colleges;
  }

  return colleges.filter((clgDetail) =>
    district.includes(clgDetail.location.district)
  );
  // return colleges.filter(
  //   (clgDetail) =>
  //     selectedunder.includes(clgDetail.collegeUnder) ||
  //     district.includes(clgDetail.location.district)
  // );
};
