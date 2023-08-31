//date formatter
function formatDate(date) {
    const day = date.getDate();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = date.getMonth();
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${monthNames[monthIndex]} ${year}`;
}

const dateTag = document.querySelector('.date');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const title = document.querySelector('.title');
let i = 0;

dateTag.textContent = formatDate(new Date());

previous.addEventListener('click', () => {
    i--;
    const previousDate = new Date();
    previousDate.setDate(previousDate.getDate() + i);
    dateTag.textContent = formatDate(previousDate);
    updateTitle(previousDate);
});

next.addEventListener('click', () => {
    i++;
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + i);
    dateTag.textContent = formatDate(nextDate);
    updateTitle(nextDate);
});

function isSameDate(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

function updateTitle(date) {
    listItems(date);
    const today = new Date();
    
    if (isSameDate(date, today)) {
        title.textContent = "Today's Events";
    } else if (date < today) {
        title.textContent = "Past Events";
    } else {
        title.textContent = "Upcoming Events";
    }
}
updateTitle(new Date())

window.onpageshow = function(event) {
    if (event.persisted) {
        location.reload();
    }
};
