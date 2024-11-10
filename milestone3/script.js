var form = document.getElementById('submission-form');
var submissionDisplayElement = document.getElementById('submission-form-display');
form.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    event.preventDefault();
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var fathername = ((_b = document.getElementById('father-name')) === null || _b === void 0 ? void 0 : _b.value) || '';
    var cnic = ((_c = document.getElementById('cnic')) === null || _c === void 0 ? void 0 : _c.value) || '';
    var email = ((_d = document.getElementById('email')) === null || _d === void 0 ? void 0 : _d.value) || '';
    var phone = ((_e = document.getElementById('phone')) === null || _e === void 0 ? void 0 : _e.value) || '';
    var education = ((_f = document.getElementById('education')) === null || _f === void 0 ? void 0 : _f.value) || '';
    var experience = ((_g = document.getElementById('experience')) === null || _g === void 0 ? void 0 : _g.value) || '';
    var skills = ((_h = document.getElementById('skills')) === null || _h === void 0 ? void 0 : _h.value) || '';
    var submissionHTML = "\n\n<h2><b>Submission</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Fathername:</b>").concat(fathername, "</p>\n<p><b>Cnic:</b>").concat(cnic, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    if (submissionDisplayElement) {
        submissionDisplayElement.innerHTML = submissionHTML;
        submissionDisplayElement.style.display = 'block';
    }
    else {
        console.error('The submission display element is missing');
    }
});