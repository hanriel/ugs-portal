let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

updateTime();

function updateTime() {
    const now = new Date();
    const currentTime = now.getHours() + '<span class="blink_me">:</span>' + ((now.getMinutes() < 10 ? '0' : '') + now.getMinutes());
    const currentDate = now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() +  "<br>" + daysOfWeek[now.getDay()-1];

    document.querySelector('#time').innerHTML = currentTime;
    document.querySelector('#date').innerHTML = currentDate;
}

setInterval(updateTime, 30000);
