var lengthOfLongestSubstring = function(s) {
  const occ = new Set()
  let right = 0, ans = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    while (right < len && !occ.has(s.charAt(right))) {
      occ.add(s.charAt(right))
      right++
    }
    occ.delete(s.charAt(i))
    ans = Math.max(ans, right - i)
  }
  return ans
};

lengthOfLongestSubstring('pwwkew')