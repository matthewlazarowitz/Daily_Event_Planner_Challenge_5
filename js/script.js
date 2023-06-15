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

    function loadEvents() {
        var savedEvents = getEvents();

        timeBlocks.each(function () {
            var hour = $(this).attr('id').split('-')[1];
            var eventTextarea = $(this).find('.description');

            if (savedEvents[hour]) {
                eventTextarea.val(savedEvents[hour]);
            }
        });
    }
    function updateColors() {

        var currentHour = dayjs().hour();


        timeBlocks.each(function () {
            var hour = parseInt($(this).attr('id').split('-')[1]);

            $(this).removeClass('past present future');

            if (hour < currentHour) {

                $(this).addClass('past');
            } else if (hour === currentHour) {
                $(this).addClass('present');
            } else {
                $(this).addClass('future');
            }
        });
    }
    loadEvents();


    saveBtns.on('click', function () {
        var timeBlock = $(this).closest('.time-block');
        var hour = timeBlock.attr('id').split('-')[1];
        var eventDescription = timeBlock.find('.description').val().trim();

        saveEvent(hour, eventDescription);
    });

    updateColors();

    setInterval(updateColors, 60000);

    displayCurrentDay();
});