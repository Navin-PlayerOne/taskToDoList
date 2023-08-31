// const eventName = document.querySelector('#eventName')
// const eventHost = document.querySelector('#eventHost')
// const eventLocation = document.querySelector('#eventLocation')
// const eventDate = document.querySelector('#eventDate')
// const updateBtn = document.querySelector('#saveBtn')

function getUpdated(index){
    let eventObject = JSON.parse(localStorage.getItem('eventObject')) ?? []

    //restoring the data from the local storage to the form
    eventName.value = eventObject[index].eventName
    eventHost.value = eventObject[index].eventHost
    eventLocation.value = eventObject[index].eventLocation
    eventDate.value = eventObject[index].eventDate

    //change the buton to update
    saveBtn.textContent = "Update"

    saveBtn.addEventListener('click',(event)=>{
        if(eventName.value && eventHost.value && eventLocation.value && eventDate.value){
            event.preventDefault()
            eventObject[index]=
                {
                    'eventName' : eventName.value,
                    'eventHost' : eventHost.value,
                    'eventLocation' : eventLocation.value,
                    'eventDate' : eventDate.value,
                    'lastModified' : new Date()
                };
                localStorage.setItem('eventObject' , JSON.stringify(eventObject))
                // window.history.back();
                // window.location.href = '../index.html'
        }
    })
}

const queryParams = new URLSearchParams(window.location.search);
const index = queryParams.get('index')

//invoke the update method only if it comes form update request
if(index){
    getUpdated(index)
}