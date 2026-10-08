    function setFeeStructure(id, value) {
        const field = document.getElementById("feesStucture_" + id);
        if (field) {
            field.value = value;
        }
    }

    function setDownloadBrochure(id, value) {
        const field = document.getElementById("downloadBrochure_" + id);
        if (field) {
            field.value = value;
        }
    }

    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param) || '';
    }

    document.addEventListener("DOMContentLoaded", function () {
      const utm_source = getQueryParam('utm_source');
      const utm_medium = getQueryParam('utm_medium');
      const utm_campaign = getQueryParam('utm_campaign');

      // Set UTM values in hidden inputs
      // document.querySelector('input[name="utm_source"]').value = utm_source;
      // document.querySelector('input[name="utm_medium"]').value = utm_medium;
      // document.querySelector('input[name="utm_campaign"]').value = utm_campaign;
      document.getElementById('utm_source_1').value = utm_source;
      document.getElementById('utm_medium_1').value = utm_medium;
      document.getElementById('utm_campaign_1').value = utm_campaign;

      document.getElementById('utm_source_2').value = utm_source;
      document.getElementById('utm_medium_2').value = utm_medium;
      document.getElementById('utm_campaign_2').value = utm_campaign;

      document.getElementById('utm_source_3').value = utm_source;
      document.getElementById('utm_medium_3').value = utm_medium;
      document.getElementById('utm_campaign_3').value = utm_campaign;

      document.getElementById('utm_source_4').value = utm_source;
      document.getElementById('utm_medium_4').value = utm_medium;
      document.getElementById('utm_campaign_4').value = utm_campaign;

      document.getElementById('utm_source_5').value = utm_source;
      document.getElementById('utm_medium_5').value = utm_medium;
      document.getElementById('utm_campaign_5').value = utm_campaign;

      document.getElementById('utm_source_100').value = utm_source;
      document.getElementById('utm_medium_100').value = utm_medium;
      document.getElementById('utm_campaign_100').value = utm_campaign;
    });

    const branchConfig = {

    "Contai": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery",
                "LKG",
                "UKG",
                "E-CHAMPS-1",
                "E-CHAMPS-2",
                "E-CHAMPS-3",
                "E-CHAMPS-4",
                "E-CHAMPS-5",
                "VI",
                "VII",
                "VIII",
                "IX",
                "XI"
            ],
        }
    },

    "Andal": {
        reservation: ["Day Scholar", "Hostel"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ],
            "Hostel": [
                "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

    "Andul": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

    "Asansol": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

     "Bally": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },
   
    "Barasat": {
        reservation: ["Day Scholar", "Hostel (Only Boys)"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": [
                "E-CHAMPS-3", "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

    "Bardhaman": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

     "Basirhat": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII"
            ]
        }
    },

     "Berhampore (Murshidabad)": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII"
            ]
        }
    },

    "Bhawanipur": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII"
            ]
        }
    },


    "Coochbehar": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII"
            ]
        }
    },

    "Credmont International School": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII"
            ]
        }
    },

"Dagapur": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII"
            ]
        }
    },

     "Darjeeling": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },
    "Durgapur": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

     "Fulbari": {
        reservation: ["Day Scholar", "Hostel (Only Boys)"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": [
                "E-CHAMPS-3", "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },
    
     "Haldia": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

    "Howrah": {
        reservation: ["Day Scholar", "Hostel"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": ["E-CHAMPS-3", "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"]
        }
    },

    "Jiaganj": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII"
            ]
        }
    },
    
    "Joka": {
        reservation: ["Day Scholar", "Hostel"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": [
                "E-CHAMPS-3", "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

    "Kalimpong": {
        reservation: ["Day Scholar", "Hostel (Only Boys)"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": [
                "E-CHAMPS-3", "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

    "Kalimpong 12th mile": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

    "Kalyani-town": {
        reservation: ["Day Scholar", "Hostel (Only Girls)"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": [
                "E-CHAMPS-3", "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

     "Khidderpore": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX"
            ]
        }
    },

    "Krishnanagar City": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

    "Maheshtala": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

     "Midnapore": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII"
            ]
        }
    },

     "New Market (Esplanade)": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

     "New Town": {
        reservation: ["Day Scholar", "Hostel"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": [
                "E-CHAMPS-3", "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

    "Park Circus": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

    "Raghunathpur": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX"
            ]
        }
    },

    "Raiganj (Uttar dinajpur)": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

    "Ramchandrapur (Sonarpur)": {
        reservation: ["Day Scholar" , "Hostel (Only Boys)"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": [
                "E-CHAMPS-3", "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

    "Ranaghat (Nadia)": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

    "Rishra": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

    "Siliguri": {
        reservation: ["Day Scholar", "Hostel (Only Girls)"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ],
            "Hostel": [
                "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

   "Silpara (Behala)": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },
   
    "Sodepur (kalyani Express)": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

   "Sonarpur": {
        reservation: ["Day Scholar", "Hostel"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ],
            "Hostel": [
                "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI", "XII"
            ]
        }
    },

    "Ulluberia": {
        reservation: ["Day Scholar"],
        classes: {
            "Day Scholar": [
                "Nursery", "LKG", "UKG",
                "E-CHAMPS-1", "E-CHAMPS-2", "E-CHAMPS-3",
                "E-CHAMPS-4", "E-CHAMPS-5",
                "VI", "VII", "VIII", "IX", "XI"
            ]
        }
    },

};

/* =========================================================
   ALL ACTUAL BRANCHES
========================================================= */

const allBranches = Object.keys(branchConfig).filter(
    branch => branch !== "Contai"
);


/* =========================================================
   INITIALIZE ALL FORMS
   Form 1, 2, 3
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    [1, 2, 3].forEach(function (id) {

        const branch = document.getElementById("branch_" + id);
        const city = document.getElementById("city_" + id);

        if (branch) {
            branch.innerHTML = `
                <option value="">Select Branch</option>
                <option value="Contai">Contai</option>
                <option value="Other Branch">Other Branch</option>
            `;
        }

        /*
         * City completely removed from flow
         */
        if (city) {
            city.removeAttribute("required");
            city.style.display = "none";

            const cityLabel = document.querySelector(
                'label[for="city_' + id + '"]'
            );

            if (cityLabel) {
                cityLabel.style.display = "none";
            }
        }

        /*
         * Reset dependent dropdowns
         */
        resetDependentFields(id);
    });
});

/* =========================================================
   RESET BOARD / RESERVATION / CLASS
========================================================= */

function resetDependentFields(id) {

    const board = document.getElementById("board_" + id);
    const reservation = document.getElementById("reservation_type_" + id);
    const classes = document.getElementById("class_" + id);

    if (board) {
        board.innerHTML = `
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
        `;
    }

    if (reservation) {
        reservation.innerHTML = `
            <option value="">Select Reservation Type</option>
        `;
    }

    if (classes) {
        classes.innerHTML = `
            <option value="">Select Class</option>
        `;
    }
}


/* =========================================================
   BRANCH CHANGE
========================================================= */

function getRefresh(val, id) {
    const branchSelect = document.getElementById("branch_" + id);
    const hiddenBranch = document.getElementById("hidden_branch_" + id);

    if (!branchSelect) {
        return;
    }

    // User selected Other Branch
    if (val === "Other Branch") {

        let options = `
            <option value="">Select Branch</option>
            <option value="Contai">Contai</option>
        `;

        allBranches.forEach(function (branch) {
            options += `
                <option value="${branch}">${branch}</option>
            `;
        });

        // Replace dropdown options
        branchSelect.innerHTML = options;

        // Reset selected value
        branchSelect.value = "";

        if (hiddenBranch) {
            hiddenBranch.value = "";
        }

        resetDependentFields(id);

        // Automatically open dropdown
        setTimeout(function () {
            branchSelect.focus();

            if (typeof branchSelect.showPicker === "function") {
                branchSelect.showPicker();
            }
        }, 100);

        return;
    }

    // Normal branch selected
    if (hiddenBranch) {
        hiddenBranch.value = val || "";
    }

    resetDependentFields(id);
}


/* =========================================================
   BOARD CHANGE
   Branch based Reservation Type
========================================================= */

function getReservationType(val, id) {

    const branchSelect = document.getElementById("branch_" + id);
    const reservationSelect = document.getElementById(
        "reservation_type_" + id
    );
    const classSelect = document.getElementById("class_" + id);

    if (!branchSelect || !reservationSelect || !classSelect) {
        return;
    }

    const branch = branchSelect.value;
    const config = branchConfig[branch];

    reservationSelect.innerHTML = `
        <option value="">Select Reservation Type</option>
    `;

    classSelect.innerHTML = `
        <option value="">Select Class</option>
    `;

    if (!config) {
        return;
    }

    config.reservation.forEach(function (reservation) {

        const option = document.createElement("option");

        option.value = reservation;
        option.textContent = reservation;

        reservationSelect.appendChild(option);
    });
}


/* =========================================================
   RESERVATION TYPE CHANGE
   Branch + Reservation → Class
========================================================= */

function getCourse(val, id) {

    const branchSelect = document.getElementById("branch_" + id);
    const classSelect = document.getElementById("class_" + id);

    if (!branchSelect || !classSelect) {
        return;
    }

    const branch = branchSelect.value;
    const config = branchConfig[branch];

    classSelect.innerHTML = `
        <option value="">Select Class</option>
    `;

    if (!config || !config.classes[val]) {
        return;
    }

    config.classes[val].forEach(function (className) {

        const option = document.createElement("option");

        option.value = className;
        option.textContent = className;

        classSelect.appendChild(option);
    });
}

let otpVerified = {};  // per form tracking

// SEND OTP
function sendOTP(id) {

  const btn = document.querySelector(`#frm_admission_open_${id} button[onclick="sendOTP(${id})"]`);
  const btnText = btn.querySelector(".otp-btn-text");
  const sendingText = btn.querySelector(".otp-sending-text"); //new text add here
  const loader = btn.querySelector(".otp-loader");

  // 🔥 START LOADER
  btn.disabled = true;
  btnText.classList.add("hidden");
    if (sendingText) sendingText.classList.remove("hidden");
  loader.classList.remove("hidden");


  const name = document.getElementById("name_" + id);
  const phone = document.getElementById("phone_" + id);
  const parent_email = document.getElementById("parent_email_" + id);
  
  const branch = document.getElementById("branch_" + id);
  const board = document.getElementById("board_" + id);
  const reservation_type = document.getElementById("reservation_type_" + id);
  const classes = document.getElementById("class_" + id);
  const utm_source = document.getElementById("utm_source_" + id);
  const utm_medium = document.getElementById("utm_medium_" + id);
  const utm_campaign = document.getElementById("utm_campaign_" + id);
  const redirect_from = document.getElementById("redirect_from_" + id);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (name.value.trim() === "") {
    stopLoader(); alert("Enter Name");
    return;
  }
  else if (!/^[6-9][0-9]{9}$/.test(phone.value)) {
    stopLoader(); alert("Enter a valid phone number");
    return;
  }
  
  else if (branch.value === "") {
    stopLoader(); alert("Select Branch");
    return;
  }
  else if (board.value === "") {
    stopLoader(); alert("Select Board");
    return;
  }
  else if (reservation_type.value === "") {
    stopLoader(); alert("Select Reservation Type");
    return;
  }
  else if (classes.value === "") {
    stopLoader(); alert("Select Class");
    return;
  }

  fetch("/send-otp.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      phone: phone.value,
      parent_email: parent_email.value,
      
      branch: branch.value,
      board: board.value,
      reservation_type: reservation_type.value,
      classes: classes.value,
      utm_source: utm_source.value,
      utm_medium: utm_medium.value,
      utm_campaign: utm_campaign.value,
      redirect_from: redirect_from.value
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === true) {

        document.getElementById("DBid_" + id).value = data.lead_id;

        document.getElementById("otpSection_" + id).style.display = "block";
        document.getElementById("otp_message_" + id).innerHTML =
          "<span class=\"inline-block text-green-700 text-sm font-medium\">OTP sent successfully.</span>";

        document.getElementById("hidden_branch_" + id).value = branch.value;
        name.readOnly = true;
        phone.readOnly = true;
        parent_email.readOnly = true;

        
        branch.disabled = true;
        board.disabled = true;
        reservation_type.disabled = true;
        classes.disabled = true;

        document.getElementById("getOtpSection_" + id).style.display = "none";
        document.getElementById("verifyOtpBtn_" + id).style.display = "none";
        document.getElementById("about-get-btn-" + id).style.display = "block";

      } else {
        document.getElementById("otp_message_" + id).innerHTML = "<span class=\"inline-block text-red-700 text-sm font-medium\">" + (data.message || "Something went wrong.") + "</span>";
      }
    })
    .finally(() => {
        stopLoader();
    });
  function stopLoader() {
    btn.disabled = false;
    btnText.classList.remove("hidden");
    if (sendingText) sendingText.classList.add("hidden");
    loader.classList.add("hidden");
  }
}

// VERIFY OTP
function verifyOTP(id) {
  const phone = document.getElementById("phone_" + id).value.trim();
  const DBid = document.getElementById("DBid_" + id).value.trim();
  const userOTP = document.getElementById("otp_input_" + id).value.trim();
  const msgEl = document.getElementById("otp_message_" + id);
  const verifyBtn = event && event.target ? event.target : null;

  if (!/^[6-9][0-9]{9}$/.test(phone)) {
    msgEl.innerHTML = "<span class=\"inline-block text-red-700 py-1.5 text-sm font-medium\">Enter a valid phone first.</span>";
    return;
  }
  if (!/^\d{6}$/.test(userOTP)) {
     msgEl.innerHTML = "<span class=\"inline-block text-red-700 py-1.5 text-sm font-medium\">Enter the 6-digit OTP.</span>";
    return;
  }

  msgEl.innerHTML = "<span class=\"inline-block text-gray-700 text-sm font-medium\">Verifying...</span>";

  fetch("/verify-otp.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone: phone, otp: userOTP, DBid:DBid })
  })
    .then(res => res.json())
    .then(data => {
      if (data && data.status === true) {
        otpVerified[id] = true;
        document.getElementById("otp_verified_" + id).value = "1";
        document.getElementById("otp_input_hidden_" + id).value = userOTP;
        msgEl.innerHTML = "<span class=\"inline-block text-green-700 bg-green-50 rounded-lg px-3 py-1.5 text-sm font-medium\">OTP Verified ✔</span>";
        document.getElementById("phone_" + id).readOnly = true;
        const verifyOtpBtn = document.getElementById("verifyOtpBtn_" + id);
        if (verifyOtpBtn) {
          verifyOtpBtn.style.display = "none";
        }
        const submitBtn = document.getElementById("about-get-btn-" + id);
        if (submitBtn) {
          document.getElementById("otp_input_" + id).readOnly = true;
          submitBtn.style.display = "block";
        }
      } else {
        otpVerified[id] = false;
        document.getElementById("otp_verified_" + id).value = "0";
        const reason = data && data.message ? data.message : "Incorrect OTP";
       msgEl.innerHTML = "<span class=\"inline-block text-red-700 text-sm font-medium\">" + reason + " ❌</span>";
      }
    })
    .catch(err => {
      console.error("verify-otp error:", err);
      otpVerified[id] = false;
      document.getElementById("otp_verified_" + id).value = "0";
      msgEl.innerHTML = "<span style='color:red;'>Server error — try again.</span>";
    });
}

// SUBMIT → VERIFY → SUBMIT
function handleSubmit(id, event) {
  const verified = document.getElementById("otp_verified_" + id).value;

  if (verified === "1") return true;

  event.preventDefault();

  const phone = document.getElementById("phone_" + id).value;
  const otp = document.getElementById("otp_input_" + id).value;
  const DBid = document.getElementById("DBid_" + id).value;
  if (otp.length !== 6) {
    alert("Enter valid 6-digit OTP");
    return;
  }

  fetch("/verify-otp.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone: phone, otp: otp, DBid: DBid })
  })
    .then(res => res.json())
    .then(data => {
      if (data.status) {

        document.getElementById("otp_verified_" + id).value = "1";

        document.getElementById("otp_message_" + id).innerHTML =
"<span class=\"inline-block text-green-700 text-sm font-medium\">OTP Verified ✔</span>";

        document.getElementById("phone_" + id).readOnly = true;
        document.getElementById("otp_input_" + id).readOnly = true;

        document.getElementById("frm_admission_open_" + id).submit();

      } else {
        document.getElementById("otp_message_" + id).innerHTML =
         "<span class=\"inline-block text-red-700 text-sm font-medium\">Invalid OTP ❌</span>";
      }
    });
}
