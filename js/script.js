const elementNoPosition = document.querySelector(".no");
const elementYesButton = document.querySelector(".yes");

const yesClick = () => {
    elementYesButton.addEventListener('click', () => {
        document.querySelector(".container-response").style.display = 'flex';
        document.querySelector(".container-initial").style.display = 'none';
        document.querySelector(".audio").play();
    })
}

// Generating 'not' random option
const randomNo = () => {
    yesClick();
    setInterval(() => {

        const screenWidth = window.screen.width * 0.8; /* 80% of the screen set in css (element options) */
        const screenHeigth = window.screen.height * 0.7; /* 70% of the screen set in css (element options) */

        // Screen > 600px
        if(screenWidth > 600) {
            // Math.random() * (max - min + 1) + min
            elementNoPosition.style.marginLeft = `${Math.random() * (screenWidth - (-screenWidth) + 1) + (-screenWidth)}px`;
            elementNoPosition.style.marginTop = `${Math.random() * (screenHeigth - (-screenHeigth) + 1) + (-screenHeigth)}px`;
        }
        else {
            elementNoPosition.style.marginLeft = `${Math.random() * (screenWidth - (-screenWidth) + 1) + (-screenWidth)}px`;
            elementNoPosition.style.marginTop = `${Math.random() * (screenHeigth - (-screenHeigth) + 1) + (-screenHeigth)}px`;
        }
    }, 200);
}
randomNo();