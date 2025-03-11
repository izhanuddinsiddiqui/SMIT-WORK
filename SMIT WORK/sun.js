function updateVisualizer(){
    const currentHour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    const iconElement = document.getElementById('icon');
    const body = document.body

    if (currentHour >= 6 && currentHour < 19){
        body.classList.add('day');
        body.classList.remove('night')
        iconElement.innerHTML = '🌞';
        greetingElement.innerText = 'Good Day!'
    } else {
        body.classList.add('night');
        body.classList.remove('Day');
        iconElement.innerHTML = '🌙';
        greetingElement.innerText = 'Good Night!';
    }
}
updateVisualizer();