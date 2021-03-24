var merge = function (intervals) {
  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let j = i + 1;
    let n = intervals.length;
    while (j < n) {
      let [start, end] = intervals[i];
      let [nextStart, nextEnd] = intervals[j];
      if (nextStart > end) break;
      intervals[i][1] = nextEnd > end ? nextEnd : end;
      intervals.splice(j, 1);
      n = intervals.length;

    }
  }
  return intervals;
};
