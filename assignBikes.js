var assignBikes = function (workers, bikes) {
  const getDist = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

  const dists = [];
  for (let i = 0; i < workers.length; i++) {
    for (let j = 0; j < bikes.length; j++) {
      const d = getDist(workers[i], bikes[j]); //get back manhattan distance number
      if (dists[d] == null) dists[d] = []; //create a spot for that distance as index on dists array
      dists[d].push([i, j]); //add combo of worker index and bike index for that distance
    }
  }

  const res = [];
  for (const bucket of dists) {
    if (bucket != null) {
      for (const [i, j] of bucket) {
        if (workers[i] != null && bikes[j] != null) {
          workers[i] = null;
          bikes[j] = null;
          res[i] = j;
        }
      }
    }
  }
  return res;
};