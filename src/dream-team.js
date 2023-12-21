const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const firsChars = []
  let name = ""
  if (Array.isArray(members)) {
    for (let i = 0; i <= members.length; i++) {
      name = members[i]
      if (typeof name === "string") {
        firsChars.push(members[i].trim().charAt(0).toUpperCase())
      }
    }
  } else {
    return false
  }
  return firsChars.sort().join("")
}
createDreamTeam([" ", "   Matt", "ann", "Dmitry", "Max"])
createDreamTeam(["Olivia", 1111, "Lily", "Oscar", true, null])

module.exports = {
  createDreamTeam
}
