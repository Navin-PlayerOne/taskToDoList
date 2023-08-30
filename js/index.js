
//event page dynamic script


let eventData = JSON.parse(localStorage.getItem('eventObject'))
let todoContainer = document.querySelector('#todoContainer')

let indexArray = [] //to track the filtered element for deleting in case of deleting in todays event page

//if current date is passed it will show the event corresponding to that day else it will show all the events
function listItems(currentDate){
    indexArray = []
    try {
        let allContent = document.querySelectorAll('.content')
        allContent.forEach(content=>{                            //remove the All previous lists
            content.remove()
        })
        let eventData = JSON.parse(localStorage.getItem('eventObject'))
        if(currentDate){
            eventData =  eventData.filter((eachEvent,index) => {
                const date1 = new Date(eachEvent.eventDate);
                const date2 = new Date(currentDate);
                console.log("date 1 "+date1)
                console.log("date 2 "+date2)
                if (date1.getDate() === date2.getDate() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getFullYear() === date2.getFullYear()){
                    indexArray.push(index)
                    return true;
                }
                else{
                    return false;
                }
            });
            console.log(eventData)
        }
        else{
            for(let i =0 ;i<eventData.length;i++){
                indexArray.push(i)
            }
        }
        eventData.forEach((eachEvent)=>{
            const contentMenu = document.createElement('button')
            contentMenu.classList.add('contentMenu')
            contentMenu.innerHTML = `<svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 16C1.45 16 0.979001 15.804 0.587001 15.412C0.195001 15.02 -0.000664968 14.5493 1.69779e-06 14C1.69779e-06 13.45 0.196002 12.979 0.588001 12.587C0.980001 12.195 1.45067 11.9993 2 12C2.55 12 3.021 12.196 3.413 12.588C3.805 12.98 4.00067 13.4507 4 14C4 14.55 3.804 15.021 3.412 15.413C3.02 15.805 2.54933 16.0007 2 16ZM2 10C1.45 10 0.979001 9.804 0.587001 9.412C0.195001 9.02 -0.000664968 8.54934 1.69779e-06 8C1.69779e-06 7.45 0.196002 6.979 0.588001 6.587C0.980001 6.195 1.45067 5.99934 2 6C2.55 6 3.021 6.196 3.413 6.588C3.805 6.98 4.00067 7.45067 4 8C4 8.55 3.804 9.021 3.412 9.413C3.02 9.805 2.54933 10.0007 2 10ZM2 4C1.45 4 0.979001 3.804 0.587001 3.412C0.195001 3.02 -0.000664968 2.54934 1.69779e-06 2C1.69779e-06 1.45 0.196002 0.979002 0.588001 0.587002C0.980001 0.195002 1.45067 -0.000664969 2 1.69779e-06C2.55 1.69779e-06 3.021 0.196001 3.413 0.588001C3.805 0.980001 4.00067 1.45067 4 2C4 2.55 3.804 3.021 3.412 3.413C3.02 3.805 2.54933 4.00067 2 4Z" fill="black"/>
                                    </svg>`

            const subMenuUi = document.createElement('div')
            subMenuUi.classList.add('sub-menu')
            subMenuUi.innerHTML = `<div class="option1">
                                    <div class="icon">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3043 0.75 14.863 0.75C15.4217 0.75 15.8923 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.571 18.275 4.113C18.2917 4.655 18.1083 5.11733 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z" fill="black"/>
                                        </svg>                                
                                    </div>
                                    <div class="sub-menu-item">Update</div>
                                </div>
                                <div class="option2">
                                    <div class="icon">
                                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="black"/>
                                        </svg>                                                               
                                    </div>
                                    <div class="sub-menu-item">Delete</div>
                                </div>`
            let content = document.createElement('div')
            let contentHeader = document.createElement('div')
            let p = document.createElement("p");
            let contentDate = document.createElement('div')
            contentDate.classList.add('contentDate')


            content.classList.add('content')
            contentHeader.classList.add('contentHeader')
            p.innerHTML = eachEvent['eventName'];
            contentHeader.appendChild(p)
            contentHeader.appendChild(contentMenu)
            contentHeader.appendChild(subMenuUi)
            content.appendChild(contentHeader)
            contentDate.innerHTML = eachEvent['eventDate'];
            content.appendChild(contentDate)
            todoContainer.appendChild(content)
})
            const noevent = document.querySelector('.noevent')
            if(eventData.length==0){
                noevent.style = "display : block";
            }
            else{
                noevent.style = "display : none";
            }
            createPopUp()
            addDeleteEvent()
    } catch (error) {
        console.log('no data')
        
    }
}

function createPopUp(){
    // Select the target node that you want to observe
    const targetNode = document.getElementById('todoContainer');
    const menuButton = document.querySelectorAll('.contentMenu')
    const subMenu = document.querySelectorAll('.sub-menu')


    // for showing and hiding the menu

    menuButton.forEach((element,index)=>{
        element.addEventListener('click',()=>{
            console.log('its clicking dude')
            if(subMenu[index].style.opacity==0){
                subMenu[index].style = "opacity: 1;visibility: visible;"
            }
            else{
                subMenu[index].style = "opacity: 0;visibility: hidden;"
            }
        })
    })
}

const addButton = document.querySelector('#addbutton')

try {
    addButton.addEventListener('click',()=>{
        window.location.href = '../html/adddetails.html'
    })
} catch (error) {
    console.log('bro this request is from todays event')
}

function addDeleteEvent(){
    // deleting an event
    const deleteButtons = document.querySelectorAll('.option2')
    deleteButtons.forEach((eachDeleteButton,index)=>{
        eachDeleteButton.addEventListener('click',(ele)=>{
            console.log(index,ele)
            let allContent = document.querySelectorAll('.content')
            allContent[index].remove()
            let eventData = JSON.parse(localStorage.getItem('eventObject'))
            eventData.splice(indexArray[index],1)
            localStorage.setItem('eventObject' , JSON.stringify(eventData))
            location.reload()
        })
    })
}
addDeleteEvent()

createPopUp()
