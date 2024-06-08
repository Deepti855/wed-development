const students = {
    Khabib: { homePhone: "5576844", permanent: "Dagestan, Russia" },
    Manny: { permanent: "General Santos, Philippines" },
    Connor: { temporary: "Khasibazar, Kathmandu", permanent: null },
    Buakaw: { temporary: "Pepsicola, Bhaktapur", email: "r.buakaw@gmai.com" },
    Paddy: { permanent: undefined }
};
console.log("Khabib’s home phone number:", students.Khabib.homePhone);
console.log("Manny’s Permanent address:", students.Manny.permanent);
console.log("Connor’s temporary address:", students.Connor.temporary);
console.log("Buakaw’s Temporary address:", students.Buakaw.temporary);
console.log("Buakaw’s email:", students.Buakaw.email);
console.log("Paddy’s permanent address:", students.Paddy.permanent);
console.log("Connor’s Permanent address:", students.Connor.permanent);
