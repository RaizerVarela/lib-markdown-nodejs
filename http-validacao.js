function arrayURLs(arrayLinks){
  return arrayLinks.map(objectLink => Object.values(objectLink).join())
}

function validateURL(arrayLinks){
  return arrayURLs(arrayLinks)
}

module.exports = validateURL