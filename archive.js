/* DETERMINE CURRENT CATEGORY */
const currentPage =
    window.location.pathname
        .split("/")
        .pop();

let currentCategory = "activities";

if (currentPage === "quizzes.html") {
    currentCategory = "quizzes";
}

if (currentPage === "projects.html") {
    currentCategory = "projects";
}



/* PORTFOLIO FILES */

"activities/RACELIS_COMPREHENSIVE REPORT_DCIT26.pdf"
"activities/RACELIS_COMPREHENSIVE INTERVIEW GUIDE.pdf"

const portfolioFiles = {

    /* ACTIVITIES */
    activities: [

        name: "Activity 1",
        type: "PDF",
        date: "September 13, 2026",
        path: "activities/RACELIS_COMPREHENSIVE REPORT_DCIT26.pdf"
        
        name: "Activity 2",
        type: "PDF",
        date: "September 13, 2026",
        path: "activities/RACELIS_COMPREHENSIVE INTERVIEW GUIDE.pdf"

    ],


    /* QUIZZES */
    quizzes: [

        

    ],

    /* PROJECTS & LABORATORIES */
    projects: [

        


    ]
};


/* LOAD FILES */
document.addEventListener("DOMContentLoaded", function () {

    const files =
        portfolioFiles[currentCategory] || [];

    displayFiles(files);

});


/* DISPLAY FILES */
function displayFiles(files) {

    const fileList =
        document.getElementById("fileList");

    const emptyState =
        document.getElementById("emptyState");

    if (!fileList) return;

    fileList.innerHTML = "";

    /* NO FILES */
    if (files.length === 0) {

        if (emptyState) {
            emptyState.style.display = "flex";
        }

        return;
    }

    /* FILES EXIST */
    if (emptyState) {
        emptyState.style.display = "none";
    }

    /* CREATE FILE CARDS */
    files.forEach(function (item) {

        const card = createFileCard(item);

        fileList.appendChild(card);

    });

    /* REFRESH AOS ANIMATION */
    setTimeout(function () {

        if (typeof AOS !== "undefined") {
            AOS.refreshHard();
        }

    }, 100);

}


/* CREATE FILE CARD */
function createFileCard(item) {

    const card = document.createElement("div");

    /* CARD CLASS */
    card.className = "file-card";

    /* AOS ANIMATION */
    card.setAttribute(
        "data-aos",
        "fade-up"
    );

    card.setAttribute(
        "data-aos-duration",
        "1500"
    );

    card.setAttribute(
        "data-aos-anchor-placement",
        "top-bottom"
    );

    /* FILE ICON */
    let icon = "images/document.png";

    let typeText = "PDF File";

    if (item.type === "image") {

        icon = "images/img.png";

        typeText = "Image";

    }

    /* FILE CARD HTML */
    card.innerHTML = `

        <div class="file-card-top">

            <div class="file-icon">

                <img
                    src="${icon}"
                    alt="${typeText}"
                >

            </div>

        </div>

        <h3>${escapeHTML(item.name)}</h3>

        <p class="file-type">
            ${typeText}
        </p>

        <p class="file-date">
            ${escapeHTML(item.date)}
        </p>

        <div class="file-actions">

            <button class="view-button"type="button">VIEW</button>

        </div>

    `;


    /* VIEW BUTTON */
    const viewButton = card.querySelector(".view-button");

    viewButton.addEventListener("click", function () {

            viewFile(item);

        }
    );

    return card;
}


/* VIEW FILE */
function viewFile(item) {

    if (!item.path) {

        alert("File path is missing.");

        return;
    }


    /* OPEN FILE */
    window.open(
        item.path,
        "_blank"
    );
}


/* HTML SECURITY */
function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}
