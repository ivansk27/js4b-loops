function listAll(min, max) {
  var result = " ";
  for (var a = min; a <= max; a++) {
    result = result + a + " ";
  }
  return result.trim();
}

function listBetweenDesc(min, max) {
  var result = "";
  // max = max - 1;
  for (var a = max - 1; a> min; a--) {
    result = result + a + " ";
  }
  return result.trim();
}

