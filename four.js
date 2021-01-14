const buttons = document.getElementById('btns');

function getColor(event){
    if (event.target.tagName !== 'BUTTON') return;
    const btnColor = event.target.dataset.color
    const bigSquare = document.querySelector('.' + btnColor + '.square-100')
    
    if (bigSquare) {
        bigSquare.parentNode.removeChild(bigSquare)
    } else {
        const smallSquare = document.querySelector('.' + btnColor + '.square-50')

        if (smallSquare) {
            smallSquare.classList.remove('square-50')
            smallSquare.classList.add('square-100')
        } else {
            const newElement = document.createElement('div');  
            newElement.classList.add(btnColor)
            newElement.classList.add('square-50')
            document.body.appendChild(newElement);
        }
    }
}

buttons.addEventListener('click', getColor);
       
