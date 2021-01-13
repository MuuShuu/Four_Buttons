var btnBlack = document.querySelector('#btnBlack');
        
    btnBlack.addEventListener('click', function(){

        const bigSquare = document.querySelector('.black.square-100')

        if (bigSquare) {
        
            bigSquare.parentNode.removeChild(bigSquare)
    
        } else {

            const smallSquare = document.querySelector('.black.square-50')

            if (smallSquare) {

                smallSquare.classList.remove('square-50')
                smallSquare.classList.add('square-100')

            } else {

                const newElement = document.createElement('div');
        
                newElement.classList.add('black')
                newElement.classList.add('square-50')
    
                document.body.appendChild(newElement);
            }
        }
    })


var btnRed = document.querySelector('#btnRed');
        
    btnRed.addEventListener('click', function(){

        const bigSquere = document.querySelector('.red.square-100')

        if (bigSquere) {
        
            bigSquere.parentNode.removeChild(bigSquere)
    
        } else {

            const smallSquere = document.querySelector('.red.square-50')

            if (smallSquere) {

                smallSquere.classList.remove('square-50')
                smallSquere.classList.add('square-100')

            } else {

                const newElement = document.createElement('div');
        
                newElement.classList.add('square-50');
                newElement.classList.add('red');
    
                document.body.appendChild(newElement);
            }
        }
    })


var btnBlue = document.querySelector('#btnBlue');
        
    btnBlue.addEventListener('click', function(){

        const bigSquere = document.querySelector('.blue.square-100')

        if (bigSquere) {
        
            bigSquere.parentNode.removeChild(bigSquere)
    
        } else {

            const smallSquere = document.querySelector('.blue.square-50')

            if (smallSquere) {

                smallSquere.classList.remove('square-50')
                smallSquere.classList.add('square-100')

            } else {

                const newElement = document.createElement('div');
        
                newElement.classList.add('square-50')
                newElement.classList.add('blue');
    
                document.body.appendChild(newElement);
            }
        }
    })


var btnGreen = document.querySelector('#btnGreen');
        
    btnGreen.addEventListener('click', function(){

        const bigSquere = document.querySelector('.green.square-100')

        if (bigSquere) {
        
            bigSquere.parentNode.removeChild(bigSquere)
    
        } else {

            const smallSquere = document.querySelector('.green.square-50')

            if (smallSquere) {

                smallSquere.classList.remove('square-50')
                smallSquere.classList.add('square-100')

            } else {

                const newElement = document.createElement('div');
        
                newElement.classList.add('square-50')
                newElement.classList.add('green');
    
                document.body.appendChild(newElement);
            }
        }
    })