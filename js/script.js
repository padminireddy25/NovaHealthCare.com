/* =========================================================
   NOVA HEALTH CARE
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("open");

    });


    /* Close menu after clicking a navigation link */

    const navLinks = navbar.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("open");

        });

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    if (!navbar || !menuBtn) {
        return;
    }

    const clickedInsideNavbar =
        navbar.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);

    if (
        !clickedInsideNavbar &&
        !clickedMenuButton
    ) {

        navbar.classList.remove("open");

    }

});


/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 5px 25px rgba(20,40,60,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .stat, .hero-offer, .package-card, .trust-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


/* =========================================================
   PACKAGE MODAL DATA
========================================================= */

const packageData = {

    package1: {

        icon: "🦋",

        tag: "THYROID PROFILE",

        title: "Jaanch Thyroid Profile",

        subtitle: "Thyroid Testing Package",

        price: "₹585/-",

        details: `
            <p>
                Thyroid profile package for convenient
                diagnostic testing.
            </p>

            <div class="test-list">

                <div>✓ Thyroid Profile Testing</div>

                <div>✓ Laboratory Diagnostic Analysis</div>

                <div>✓ Accurate Laboratory Reporting</div>

            </div>
        `

    },


    package2: {

        icon: "🩺",

        tag: "HEALTH CHECK",

        title: "Aarogyam A Pro Package",

        subtitle: "12 Parameters",

        price: "₹999/-",

        details: `
            <p>
                A health check package covering
                important basic diagnostic profiles.
            </p>

            <div class="test-list">

                <div>✓ Lipid Basic</div>

                <div>✓ Thyroid Basic</div>

                <div>✓ Liver Basic</div>

                <div>✓ Kidney Basic</div>

            </div>
        `

    },


    package3: {

        icon: "❄️",

        tag: "WINTER SPECIAL",

        title: "Aarogyam Winter Basic Package",

        subtitle: "68 Tests",

        price: "₹1,500/-",

        details: `
            <p>
                Comprehensive testing package covering
                multiple important health parameters.
            </p>

            <div class="test-list">

                <div>✓ Vitamin Testing</div>

                <div>✓ Diabetes Testing</div>

                <div>✓ Thyroid Testing</div>

                <div>✓ Lipid Profile</div>

                <div>✓ Liver Profile</div>

                <div>✓ Kidney Profile</div>

                <div>✓ Iron & Electrolytes</div>

                <div>✓ CBC</div>

            </div>
        `

    },


    package4: {

        icon: "🔬",

        tag: "DIAGNOSTIC",

        title: "Package 4",

        subtitle: "Diagnostic Testing Package",

        price: "₹420/-",

        details: `
            <p>
                Diagnostic package based on the
                provided package information.
            </p>

            <div class="test-list">

                <div>✓ Diagnostic Laboratory Testing</div>

                <div>✓ Laboratory Analysis</div>

                <div>✓ Diagnostic Reporting</div>

            </div>
        `

    },


    package5: {

        icon: "🧬",

        tag: "HEALTH PACKAGE",

        title: "Jaanch Postpartum Health Checkup - Basic",

        subtitle: "50 Parameters",

        price: "₹1,600/-",

        details: `
            <p>
                A health check package designed to help
                understand the body's response to hormonal
                changes post pregnancy.
            </p>

            <div class="test-list">

                <div>✓ 50 Parameters</div>

                <div>✓ Hormonal Health Assessment</div>

                <div>✓ General Diagnostic Testing</div>

            </div>
        `

    },


    package6: {

        icon: "🧪",

        tag: "HEALTH CHECK",

        title: "Jaanch - PCOD (Mini)",

        subtitle: "50 Parameters",

        price: "₹2,350/-",

        details: `
            <p>
                Comprehensive PCOD testing package
                covering several important profiles.
            </p>

            <div class="test-list">

                <div>✓ Hormonal Testing</div>

                <div>✓ Insulin Testing</div>

                <div>✓ Thyroid Testing</div>

                <div>✓ Diabetic Testing</div>

                <div>✓ Lipid Profile</div>

            </div>
        `

    },


    package7: {

        icon: "❤️",

        tag: "SPECIAL OFFER",

        title: "Aarogyam Monsoon Basic Package",

        subtitle: "68 Tests",

        price: "₹1,270/-",

        details: `
            <p>
                Comprehensive health package covering
                multiple diagnostic profiles.
            </p>

            <div class="test-list">

                <div>✓ Vitamin Testing</div>

                <div>✓ Diabetes Testing</div>

                <div>✓ Thyroid Testing</div>

                <div>✓ Lipid Profile</div>

                <div>✓ Liver Profile</div>

                <div>✓ Kidney Profile</div>

                <div>✓ Iron & Electrolytes</div>

                <div>✓ CBC</div>

            </div>
        `

    },


    package8: {

        icon: "🌟",

        tag: "SPECIAL PACKAGE",

        title: "Complete Health Check With Vitamins",

        subtitle: "122 Parameters",

        price: "₹2,099/-",

        details: `
            <p>
                Complete health check covering vitamins
                and several important diagnostic profiles.
            </p>

            <div class="test-list">

                <div>✓ Vitamin Testing</div>

                <div>✓ Diabetes Testing</div>

                <div>✓ Thyroid Testing</div>

                <div>✓ Liver Profile</div>

                <div>✓ Kidney Profile</div>

                <div>✓ Lipid Profile</div>

                <div>✓ CBC</div>

                <div>✓ Other Diagnostic Profiles</div>

            </div>
        `

    }

};


/* =========================================================
   OPEN PACKAGE MODAL
========================================================= */

function openPackageModal(packageId) {

    const packageInfo = packageData[packageId];

    if (!packageInfo) {
        return;
    }


    const modalIcon =
        document.getElementById("modalIcon");

    const modalTag =
        document.getElementById("modalTag");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalSubtitle =
        document.getElementById("modalSubtitle");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalDetails =
        document.getElementById("modalDetails");


    if (modalIcon) {
        modalIcon.textContent = packageInfo.icon;
    }

    if (modalTag) {
        modalTag.textContent = packageInfo.tag;
    }

    if (modalTitle) {
        modalTitle.textContent = packageInfo.title;
    }

    if (modalSubtitle) {
        modalSubtitle.textContent = packageInfo.subtitle;
    }

    if (modalPrice) {
        modalPrice.textContent = packageInfo.price;
    }

    if (modalDetails) {
        modalDetails.innerHTML = packageInfo.details;
    }


    document.body.classList.add("modal-open");

}


/* =========================================================
   CLOSE PACKAGE MODAL
========================================================= */

function closePackageModal() {

    document.body.classList.remove("modal-open");

}


/* =========================================================
   CLOSE MODAL WITH ESCAPE KEY
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closePackageModal();

    }

});


/* =========================================================
   PREVENT MODAL BOX CLICK FROM CLOSING MODAL
========================================================= */

const modalBox =
    document.querySelector(".package-modal-box");

if (modalBox) {

    modalBox.addEventListener("click", function (event) {

        event.stopPropagation();

    });

}


/* =========================================================
   WHATSAPP BUTTON
========================================================= */

const whatsappButton =
    document.querySelector(".whatsapp-btn");

if (whatsappButton) {

    whatsappButton.addEventListener("click", function () {

        const phoneNumber = "919513771333";

        const message =
            "Hello Nova Health Care, I would like to know more about your diagnostic services.";

        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(
            whatsappURL,
            "_blank"
        );

    });

}
/* =========================================================
   APPOINTMENT FORM
========================================================= */

const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("patientName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const date =
            document.getElementById("appointmentDate").value;

        const time =
            document.getElementById("appointmentTime").value;

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone || !date || !time || !service) {

            alert("Please fill in all required fields.");

            return;

        }


        const whatsappMessage =
            "Hello Nova Health Care,%0A%0A" +
            "I would like to book an appointment.%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Date: " + encodeURIComponent(date) + "%0A" +
            "Time: " + encodeURIComponent(time) + "%0A" +
            "Service: " + encodeURIComponent(service) +
            (message
                ? "%0AAdditional Message: " +
                  encodeURIComponent(message)
                : "");


        const whatsappURL =
            "https://wa.me/919513771333?text=" +
            whatsappMessage;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}
<script>

document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("appointmentForm");

    form.addEventListener("submit", function(event){

        event.preventDefault();


        const name = document.getElementById("patientName").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("appointmentDate").value;
        const time = document.getElementById("appointmentTime").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;


        const text = 
`Hello Nova Health Care,

I want to book an appointment.

Name: ${name}
Phone: ${phone}

Date: ${date}
Time: ${time}

Service: ${service}

Message:
${message}`;


        const whatsappNumber = "919513771333";


        const url = 
        "https://wa.me/" + whatsappNumber + 
        "?text=" + encodeURIComponent(text);


        window.location.href = url;


    });

});

</script>