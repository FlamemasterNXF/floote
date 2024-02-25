//Important Constants for Loading
const TABS = ["ex", "items", "merge"]

const uHTML = {
    update(){

    },
    load(){
        //Load Tab Displays
        for (let i = 0; i < TABS.length; i++) {
            DOM(`${TABS[i]}Page`).style.display = 'none'
        }
        switchTab('ex')
    }
}