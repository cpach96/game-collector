fetch('localhost:3000') .then(function(response) {
  return response.json();
}) .then(function(json) {
  console.log(json)
});
 