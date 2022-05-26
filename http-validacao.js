const fetch = require('node-fetch')

function handleError(err){
  throw new Error(erro.message)
}

async function validateStatus(arrayURLs){
  try{
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
      const res = await fetch(url)
      return res.status
    }))
    return arrayStatus
  } catch (err){
    handleError(err)
  }
}

function arrayURLs(arrayLinks){
  return arrayLinks.map(objectLink => Object.values(objectLink).join())
}

async function validateURL(arrayLinks){
  const links = arrayURLs(arrayLinks)
  const statusLinks = await validateStatus(links)
  
  const results = arrayLinks.map((object, index) => ({
    ...object,
    status: statusLinks[index]
  }))
  return results
}

module.exports = validateURL