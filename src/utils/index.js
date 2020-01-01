const replaceNullToEmpty = data => 
  JSON.parse(
    JSON.stringify(data)
    .replace(/\:null/gi, "\:\"\"")
  )

export { replaceNullToEmpty }