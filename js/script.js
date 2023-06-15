$(document).ready(function () {

    var timeBlocks = $('.time-block');
    var saveBtns = $('.saveBtn');
    var currentDayEl = $('#currentDay');

    function displayCurrentDay() {
        var currentDay = dayjs().format('dddd, MMMM D, YYYY');
        currentDayEl.text(currentDay);
    }

    function getEvents() {

        var events = localStorage.getItem('events');
        var parsed = JSON.parse(events);

        return parsed || {};
    }

    function saveEvent(hour, eventDescription) {

        var events = getEvents();
        events[hour] = eventDescription;
        localStorage.setItem('events', JSON.stringify(events));
    }

});