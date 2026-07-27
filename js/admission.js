// Admission form: client-side validation + mock submit with a generated reference ID.
// No backend here — this simulates what a real submission flow feels like.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('admissionForm');
  if (!form) return;

  const formCard = document.getElementById('formCard');
  const successCard = document.getElementById('successCard');
  const successMsg = document.getElementById('successMsg');
  const refIdEl = document.getElementById('refId');

  const validators = {
    studentName: v => v.trim().length >= 2,
    dob: v => v !== '',
    grade: v => v !== '',
    parentName: v => v.trim().length >= 2,
    phone: v => /^[6-9]\d{9}$/.test(v.trim()),
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
  };

  function setFieldValid(fieldId, isValid) {
    const group = document.getElementById('group-' + fieldId);
    if (!group) return;
    group.classList.toggle('invalid', !isValid);
  }

  function validateField(fieldId) {
    const el = document.getElementById(fieldId);
    const isValid = validators[fieldId](el.value);
    setFieldValid(fieldId, isValid);
    return isValid;
  }

  // Validate as the user leaves a field
  Object.keys(validators).forEach(fieldId => {
    const el = document.getElementById(fieldId);
    el.addEventListener('blur', () => validateField(fieldId));
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let allValid = true;
    Object.keys(validators).forEach(fieldId => {
      if (!validateField(fieldId)) allValid = false;
    });

    if (!allValid) {
      const firstInvalid = form.querySelector('.field-group.invalid input, .field-group.invalid select');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const studentName = document.getElementById('studentName').value.trim();
    const grade = document.getElementById('grade').value;

    // Generate a mock reference ID from the current timestamp
    const refId = 'SV-' + Date.now().toString().slice(-6);
    refIdEl.textContent = 'Reference ID: ' + refId;
    successMsg.textContent = `Thank you — we've logged ${studentName}'s application for ${grade}. Our admissions team will reach out by email within 3 working days.`;

    formCard.style.display = 'none';
    successCard.classList.add('show');
    successCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
