export function validateCertificate(affiliateId, course_id) {
  return fetch(
    "http://localhost:5000/api/result?aff_id=" +
      affiliateId +
      "&course_id=" +
      course_id
  ).then(data => data.json());
}
