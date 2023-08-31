const saveBtn = document.querySelector('#saveBtn')
const eventName = document.querySelector('#eventName')
const eventHost = document.querySelector('#eventHost')
const eventLocation = document.querySelector('#eventLocation')
const eventDate = document.querySelector('#eventDate')

let eventObject = JSON.parse(localStorage.getItem('eventObject')) ?? []

saveBtn.addEventListener('click',(event)=>{
    if(eventName.value && eventHost.value && eventLocation.value && eventDate.value){
        event.preventDefault()
        if (eventObject!=null) {
            eventObject.push(
                {
                    'eventName' : eventName.value,
                    'eventHost' : eventHost.value,
                    'eventLocation' : eventLocation.value,
                    'eventDate' : eventDate.value,
                    'lastModified' : eventDate.value
                }
            );
        } else {
            eventObject = [
                {
                    'eventName' : eventName.value,
                    'eventHost' : eventHost.value,
                    'eventLocation' : eventLocation.value,
                    'eventDate' : eventDate.value,
                    'lastModified' : eventDate.value
                }
            ];
        }
        localStorage.setItem('eventObject' , JSON.stringify(eventObject))
        localStorage.setItem('reloadIndex', 'true');
        window.history.back();
        // window.location.href = '../index.html'
    }
})