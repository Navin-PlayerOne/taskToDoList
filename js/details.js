const contHeader = document.querySelector('.cont-header')
const contBody = document.querySelector('.cont-body')
const contDate = document.querySelector('.cont-date')

const queryParams = new URLSearchParams(window.location.search);
const index = queryParams.get('index')

let eventObject = JSON.parse(localStorage.getItem('eventObject')) ?? []

const eventData = eventObject[index]

const host =  document.createElement("p");
const eventLocation =  document.createElement("p");
const lastModified =  document.createElement("p");

//assign the extracted value to the html element

contHeader.innerHTML = eventData.eventName
host.textContent = "Event Host : "+eventData.eventHost
eventLocation.textContent = "Location : "+eventData.eventLocation
lastModified.textContent = "Last modified : "+eventData.lastModified
contDate.innerHTML = eventData.eventDate

//add the p to DOM

contBody.appendChild(host)
contBody.appendChild(eventLocation)
contBody.appendChild(lastModified)