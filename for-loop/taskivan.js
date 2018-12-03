function listAll(min, max) {
  var result = " ";
  for (var a = min; min <= max; min++) {
    result = result + min + " ";
  }
  return result.trim();
}

function listBetweenDesc(min, max) {
  var result = "";
  max = max - 1;
  for (var a = max; max > min; max--) {
    result = result + max + " ";
  }
  return result.trim();
}

