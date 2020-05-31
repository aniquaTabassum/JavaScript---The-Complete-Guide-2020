class Component{
  constructor(type)
  {
    this.type = type
  
  }

  retrieveListElements()
  {
    return document.querySelectorAll(`#${this.type}-projects li`)
  }

  
}



class Main{
  constructor(type)
  {
    this.type = type
  }
  init()
  {
    this.element = new Component(this.type)
    this.elementList = this.element.retrieveListElements()
    return this.elementList
  }


  finishButtonHandler = (switchFrom, item, switchTo)=>
  {
    //console.log(item.id)
    //console.log(this)
    this.switchElement(item, switchFrom, switchTo)
  }
  addEventListeners(switchingObject)
  {
    
   for(var item of this.elementList)
   {
     var btn = item.querySelector("button:last-of-type")
     btn.addEventListener("click", this.finishButtonHandler.bind(null,this, item, switchingObject))
   }
  }

  startAddingEventListeners(switchHandlerFunction)
  {
    //console.log(this)
    //this.switchHandler = switchHandlerFunction
    //this.switchHandler()
    switchHandlerFunction()
  }

  removeElement(itemToRemove, listToRemoveFrom)
  {
  
    listToRemoveFrom.elementList = Array.from(listToRemoveFrom.elementList).filter(item => item.id!=itemToRemove.id)
    
  }

  addElement(itemToAdd, listWhereToAdd)
  {
    listWhereToAdd.elementList = Array.from(listWhereToAdd.elementList)
    listWhereToAdd.elementList.push(itemToAdd)  
  }
  removeFromDOM(item)
  {
    item.parentNode.removeChild(item)
  }

  addToDom(item,type)
  {
    var btn = item.querySelector("button:last-of-type")
    btn.textContent = type === "finished"? "Activate" : "Finish"
    var parent = document.querySelector(`#${type}-projects ul`)
    parent.appendChild(item)
    item.scrollIntoView({behavior : "smooth"})
  }
  switchElement(item, passedList, switchList)
  {
   this.removeElement(item, passedList)
   this.addElement(item, switchList)
   
   //console.log(passedList.elementList)
   //console.log(switchList.elementList)
   this.clearEventListeners(item)
   this.addNewEventListener(item, passedList, switchList)
   this.removeFromDOM(item)
   this.addToDom(item, switchList.type)
  }
 
  
  clearEventListeners(item)
  {
  
    var itemBtn = item.querySelector("button:last-of-type")
    itemBtn.replaceWith(itemBtn.cloneNode(true))

  }
  
  addNewEventListener(item, switchList, passList)
  {
    var btn = item.querySelector("button:last-of-type")
    btn.addEventListener("click", this.finishButtonHandler.bind(null,passList,item, switchList))
  }
}

const active = new Main("active")
activeList = active.init()
const finished = new Main("finished")
finishedList = finished.init()
console.dir(activeList)
active.startAddingEventListeners(active.addEventListeners.bind(active, finished))
finished.startAddingEventListeners(finished.addEventListeners.bind(finished, active))
