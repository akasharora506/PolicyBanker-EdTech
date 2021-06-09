export async function getTimeRemaining(aff_id, course_id, chapter_id) {
    const url = `http://localhost:5000/api/remTime?aff_id=${aff_id}&course_id=${course_id}&chapter_id=${chapter_id}`;
    return await fetch(url).then(resp => resp.json());
}