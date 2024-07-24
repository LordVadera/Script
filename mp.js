let obj = JSON.parse($response.body);

console.log("-----DEBUG-----");
console.log($request.body);
console.log("-----DONE-----");

obj.code = "2302";
obj.job_complete = true;
obj.job_success = true;
obj.result.ResultText = "Enroll User";
obj.result.SmileJobID = "0000001897";
obj.result.PartnerParams.job_id = "52d0de86-be3b-4219-9e96-8195b0018944";
obj.result.PartnerParams.user_id = "e54e0e98-8b8c-4215-89f5-7f9ea42bf650";
obj.result.PartnerParams.job_type = 4;
obj.result.ConfidenceValue = "100";

$done({body: JSON.stringify(obj)});
