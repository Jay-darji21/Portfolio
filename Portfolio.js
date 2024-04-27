const work = {
    "google" : [
        "Government Engineering College, Gandhinagar",
        "August 2022 - Present",
        " Since August 2022, I'm a student of 1st year Information technology at Gec,Gandhinagar."
    ],
    "microsoft" : [
        "Noble School of Science,Naroda,Ahemedabad",
        "June 2020 - March-2022",
        "I've completed my 11-12th science + Gujcet from noble school of science,Naroda,Ahemedabad with 88.13pr in HSC and 94.01pr in Gujcet."
    ],
    "facebook" : [
        "Navyug Vidhyalay,Naroda,Ahemedabad",
        "June 2019-March-2020",
        "I've completed my 9-10th at Navyug vidhyalay,Naroda,Ahemedabad with 96.48pr in SSC."
    ],
    "netflix" : [
        "Navyug Vidhyalay,Naroda,Ahemedabad",
        "std 1-std 8",
        "I've complete my primary schooling at Navyug Vidhyalay,Naroda,Ahemedabad"
       
    ],
}

function updateWork(id) {
    document.getElementById("role").innerHTML = work[id][0];
    document.getElementById("time-line").innerHTML = work[id][1];
    document.getElementById("desc").innerHTML = work[id][2];
}

