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

function updateTitle(date) {
    listItems(date)
    const today = new Date();
    if (date < today) {
        title.textContent = "Past Events";
    } else if (date > today) {
        title.textContent = "Upcoming Events";
    } else {
        title.textContent = "Today's Events";
    }
}
updateTitle(Date())
