const cloudImages = document.querySelectorAll('.cloud-set img');
const roadElements = document.querySelectorAll('.road-element');
const marioElements = document.querySelectorAll('.mario-elements > div');

function setRandomCloudPosition(imageElement) {

    const randomTop = Math.random() * 55;
    imageElement.style.top = randomTop + '%';

    const randomLeft = Math.random() * 100;
    imageElement.style.left = randomLeft + '%';
}

function setRandomRoadElementPosition(imageElement) {

    const randomLeft = Math.random() * 100;
    imageElement.style.left = randomLeft + '%';

}

function setRandomMarioElementPosition(element) {
    const randomLeft = Math.random() * 100;
    element.style.left = randomLeft + '%';
}

cloudImages.forEach(setRandomCloudPosition);

roadElements.forEach(setRandomRoadElementPosition);

marioElements.forEach(setRandomMarioElementPosition);

