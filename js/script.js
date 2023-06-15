$(document).ready(function() {

    var timeBlocks = $('.time-block');
    var saveBtns = $('.saveBtn');
    var currentDayEl = $('#currentDay');

    function displayCurrentDay() {
        var currentDay = dayjs().format('dddd, MMMM D, YYYY');
        currentDayEl.text(currentDay);
      }

      

});