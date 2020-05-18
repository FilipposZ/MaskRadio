exports.getDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  return today;
}

exports.parseHTML = (HTMLstring) => {
  parsedString = HTMLstring.replace(/&quot;/g,'"').replace(/&#39;/g, '\'').replace(/&amp;/g, '&');
  return parsedString;
}
