const shareIcon = document.querySelector("#img-share");
const imgProtral = document.querySelector("#img-protral");
const nameDetail = document.querySelector("#name");
const dateDetail = document.querySelector("#date");
const icons = document.querySelectorAll(".icon");
const shareText = document.querySelector("#share");
const infoContainer = document.querySelector(".info-container");
const detailContainer = document.querySelector(".detail-container");
const iconContainer = document.querySelector(".icon-container");
const p = document.querySelector(".text-container p");
const mainContainer = document.querySelector(".mian-container");

if (window.matchMedia("(min-width: 1440px)").matches) {
    shareIcon.addEventListener("click", shareDesktop);
} else shareIcon.addEventListener("click", shareMoblie);


function shareMoblie() {
    imgProtral.style.display = "none";
    nameDetail.style.display = "none";
    dateDetail.style.display = "none";
    shareText.style.display = "flex";
    for (let icon of icons) {
        icon.style.display = "block";
    }
    detailContainer.style.display = "flex";
    detailContainer.style.flexDirection = "row";
    detailContainer.style.alignItems = "center";
    detailContainer.style.paddingRight = "3rem";
    infoContainer.style.backgroundColor = "hsl(217, 19%, 35%)";
    infoContainer.style.margin = 0;
    infoContainer.style.padding = "1rem 2rem";
    infoContainer.style.borderRadius = "0 0 1rem 1rem";
    iconContainer.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIcon.style.fill = "white";
    p.style.marginBottom = "1.5rem"
}

function shareDesktop() {
    // Check if share-container already exists
    let shareContainer = document.querySelector(".share-container");
    if (shareContainer) {
        shareContainer.remove(); // Remove existing share-container
        return; // Exit function to prevent creating a new one
    }
    shareContainer = document.createElement("div");
    shareContainer.classList.add("share-container");
    infoContainer.append(shareContainer);
    shareContainer.append(shareText);
    for (let icon of icons) {
        shareContainer.append(icon);
        icon.style.display = "block";
    }
    shareText.style.display = "flex";

}