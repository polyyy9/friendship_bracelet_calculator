let sizeOfWrist = document.querySelector('#sizeOfWrist');
let lengthOfTies = document.querySelector('#lengthOfTies');
let numberOfThreads = document.querySelector('#numberOfThreads');
let resultText = document.querySelector('#result');

calculateButton.addEventListener('click', function(){
    let length = (sizeOfWrist.value * getAdditionalMultiplier(numberOfThreads.value)) + (lengthOfTies.value*2);
    resultText.innerHTML = `Длина нитей для фенечки - ${length} см`
})

function getAdditionalMultiplier(threads){
    if(threads < 10){
        return 4
    } else if (threads >= 10 && threads <= 20){
        return 5
    } else {
        return 6
    }
}