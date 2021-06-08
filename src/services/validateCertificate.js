export function validateCertificate(affiliateId, examType) {
  return fetch(
    "http://localhost:9000/api/getStatus?affiliateid=" +
      affiliateId +
      "&examType=" +
      examType
  ).then(data => data.json());
}
