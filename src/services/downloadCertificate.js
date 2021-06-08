export function downloadCertificate(affiliateId) {
  return fetch(
    "http://10.78.30.28/salespoint_slim_api/v1/getagentdetails/" + affiliateId
  ).then(data => data.json());
}
