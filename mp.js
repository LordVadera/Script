let obj = JSON.parse($response.body);

console.log("-----DEBUG-----");
console.log($request.body);
console.log("-----DONE-----");

obj.code = "2302";
obj.job_complete = true;
obj.job_success = true;

$done({body: JSON.stringify(obj)});
