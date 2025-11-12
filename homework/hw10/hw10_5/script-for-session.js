let divSession = document.getElementById('session');

let times = JSON.parse(localStorage.getItem('sessionsList')) || [];
for (let time of times) {
    let actualDate = new Date(time);
    let pTimes = document.createElement('p');
    pTimes.innerHTML = actualDate.toString();
    divSession.appendChild(pTimes);
}