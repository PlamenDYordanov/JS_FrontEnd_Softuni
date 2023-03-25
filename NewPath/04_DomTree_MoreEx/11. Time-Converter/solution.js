function attachEventsListeners() {
    const getDays = document.getElementById('days');
    const getHours = document.getElementById('hours');
    const getMinutes = document.getElementById('minutes');
    const getSeconds = document.getElementById('seconds');
    const dayBtn = document.getElementById('daysBtn').addEventListener('click', convertDays);
    const hoursBtn = document.getElementById('hoursBtn').addEventListener('click',convertHours);
    const minutesBtn = document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    const secondsBtn = document.getElementById('secondsBtn').addEventListener('click', convertSeconds);
    
    function convertDays() {
        const currentDays = getDays.value;
        const currentHours = getHours.value = Math.floor(currentDays * 24);
        const currentMinutes = getMinutes.value = currentHours * 60;
        const currentSeconds = getSeconds.value =currentMinutes * 60;
    }
    function convertHours() {
        const currentHours = getHours.value;
        const currentDays = getDays.value = currentHours / 24;
        const currentMinutes = getMinutes.value = currentHours * 60;
        const currentSeconds = getSeconds.value = currentMinutes * 60;
    }
    function convertMinutes() {
        const currentMinutes = getMinutes.value;
        const currentHours = getHours.value = currentMinutes / 60;
        const currentDays =  getDays.value = currentHours / 24;
        const currentSecond = getSeconds.value = currentMinutes * 60
    }
    function convertSeconds() {
        const currentSecond = getSeconds.value;
        const currentMinutes = getMinutes.value = currentSecond / 60;
        const currentHours = getHours.value = currentMinutes / 60;
        const currentDays = getDays.value = currentHours / 24;
    }
    
}