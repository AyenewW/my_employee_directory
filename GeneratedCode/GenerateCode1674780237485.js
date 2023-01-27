

class Solution {
  isMatch(s, p) {
    // Write your code here
    let i = 0;
    let j = 0;
    let star = -1;
    let match = 0;
    while (i < s.length) {
      if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
        i++;
        j++;
      } else if (j < p.length && p[j] === '*') {
        star = j;
        match = i;
        j++;
      } else if (star !== -1) {
        j = star + 1;
        match++;
        i = match;
      } else {
        return false;
      }
    }
    while (j < p.length && p[j] === '*') {
      j++;
    }
    return j === p.length;
  }
}

