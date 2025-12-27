const cloudImages = document.querySelectorAll('.cloud-set img');
const roadElements = document.querySelectorAll('.road-element');


function setRandomCloudPosition(imageElement) {
    const randomTop = Math.random() * 60;
    imageElement.style.top = randomTop + '%';
    
    const randomLeft = Math.random() * 90; 
    imageElement.style.left = randomLeft + '%';
}

function setRandomRoadElementPosition(imageElement) {
    const randomLeft = Math.random() * 90; 
    imageElement.style.left = randomLeft + '%';
}

cloudImages.forEach(setRandomCloudPosition);
roadElements.forEach(setRandomRoadElementPosition);