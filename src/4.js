let school_list = ["ABC School", "DEF School", "GHI School"];

function getSchool(name) {
  let schools = school_list;
  for (var i = 0; i < schools.length; i++) {
    if (schools[i] == name) {
      return schools[i];
    }
  }
  return "No such school found!";
}
