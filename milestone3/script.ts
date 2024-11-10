const form = document.getElementById('submission-form') as HTMLFormElement;
const submissionDisplayElement = document.getElementById('submission-form-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

const name = (document.getElementById('name') as HTMLInputElement)?.value ||''
const fathername = (document.getElementById('father-name') as HTMLInputElement)?.value || ''
const cnic = (document.getElementById('cnic') as HTMLInputElement)?.value || ''
const email = (document.getElementById('email') as HTMLInputElement)?.value || ''
const phone= (document.getElementById('phone') as HTMLInputElement)?.value || ''
const education = (document.getElementById('education') as HTMLTextAreaElement)?.value || ''
const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || ''
const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value || ''

const submissionHTML = `

<h2><b>Submission</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Fathername:</b>${ fathername}</p>
<p><b>Cnic:</b>${cnic}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone:</b>${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;


if (submissionDisplayElement){
    submissionDisplayElement.innerHTML = submissionHTML;
    submissionDisplayElement.style.display = 'block';
}else {
    console.error('The submission display element is missing');
}
})