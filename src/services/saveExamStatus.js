export function saveExamStatus(affiliateId, course_id, score) {
  return fetch("http://localhost:5000/api/result", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      aff_id: affiliateId,
      course_id: course_id,
      score: score
    })
  }).then(data => data.json());
}
