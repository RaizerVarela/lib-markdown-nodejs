const fetch = require('node-fetch')

async function validateStatus(arrayURLs){
  const arrayStatus = await Promise.all(arrayURLs.map(async url => {
    const res = await fetch(url)
    return res.status
  }))
  return arrayStatus
}

function arrayURLs(arrayLinks){
  return arrayLinks.map(objectLink => Object.values(objectLink).join())
}

async function validateURL(arrayLinks){
  const links = arrayURLs(arrayLinks)
  const statusLinks = await validateStatus(links)
  return statusLinks
}

module.exports = validateURL