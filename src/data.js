//Easy Decimal Creation
const D = x => new Decimal(x)

//Version Flags
const VERSION = "0.2"
const SAVE_PATH = () => "nxfFlootesave"

//create all the variables in a data object for saving
function getDefaultObject() {
    return {
        nav: {current:"ex", last:"ex"},

        circle: {progress: 0},
        items: [[], [], [], [], [], []],

        lastTick: 0,
        loadedVersion: VERSION,
        offline: true,
    }
}
let data = getDefaultObject()

//saving and loading
function save(){
    try{ window.localStorage.setItem(SAVE_PATH(), JSON.stringify(data)) }
    catch (e) {
        createAlert('Error', `Save failed.\n${e}`, 'Dang.');
        console.error(e);
    }
}
function load() {
    let savedata = JSON.parse(window.localStorage.getItem(SAVE_PATH()))
    if (savedata !== undefined) fixSave(data, savedata)
    return fixOldSaves()
}

//fix saves
function fixSave(main=getDefaultObject(), data) {
    if (typeof data === "object") {
        Object.keys(data).forEach(i => {
            if (main[i] instanceof Decimal) {
                main[i] = D(data[i]!==null?data[i]:main[i])
            } else if (typeof main[i]  == "object") {
                fixSave(main[i], data[i])
            } else {
                main[i] = data[i]
            }
        })
        return main
    }
    else return getDefaultObject()
}
function fixOldSaves(){
    let extra = false

    if(data.loadedVersion === "0.1") data.loadedVersion = "0.2"
    if(data.loadedVersion === "0.3.3"){ // This is 0.3.3 because that's what the Variable was for a while, I forgot to change it from the project I copied it from (Ordinal Pringles)
        for (let i = 0; i < data.items.length; i++) {
            for (let j = 0; j < data.items[i].length; j++) {
                data.items[i][j].natural = i === 5
                if(data.items[i][j].icon === "res/placeholder.png") data.items[i][j].icon = "res/items/placeholder.png"
                if(data.items[i][j].icon === "res/wilted_clover.png") data.items[i][j].icon = "res/items/wilted_clover.png"
                if(data.items[i][j].icon === "res/clover.png") data.items[i][j].icon = "res/items/clover.png"
            }
        }
        data.loadedVersion = "0.1"
    }

    return extra
}
function fixOldSavesP2(){

}
function exportSave(){
    try {
        save()
        let exportedData = btoa(JSON.stringify(data))
        const exportedDataText = document.createElement("textarea");
        exportedDataText.value = exportedData;
        document.body.appendChild(exportedDataText);
        exportedDataText.select();
        exportedDataText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(exportedDataText);
        createAlert('Export Successful', 'Your Data has been copied to the clipboard!', 'Thanks!')
    }
    catch (e){
        createAlert('Error', `Save export failed.\n${e}`, 'Dang.');
        console.error(e);
    }
}
async function downloadSave() {
    try {
        const file = new Blob([btoa(JSON.stringify(data))], {type: "text/plain"});
        window.URL = window.URL || window.webkitURL;
        const a = document.createElement("a")
        let date = new Date()
        date = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
        a.href = window.URL.createObjectURL(file)
        a.download = `Floote-Save-${VERSION}-${date}.txt`
        a.click()
        createAlert("Success!", 'Your save has been successfully downloaded!', 'Thanks!');
    } catch (e) {
        createAlert('Error', `Save download failed.\n${e}`, 'Dang.');
        console.error(e);
        closeModal(1)
    }
}
function importSave(x) {
    try {
        if(x.length <= 0) {
            DOM('promptContainer').style.display = 'none'
            createAlert('Failure', 'No data found.', `Oops.`)
            return
        }
        data = Object.assign(getDefaultObject(), JSON.parse(atob(x)))
        save()
        location.reload()
    }
    catch (e){
        closeModal('prompt')
        createAlert('Error', `Save import failed.\n${e}`, 'Dang.');
        console.error(e);
    }
}
window.setInterval(function(){
    save()
}, 10000);
//full reset
function fullReset(){
    exportSave()
    deleteSave()
}
function deleteSave(){
    window.localStorage.removeItem(SAVE_PATH())
    location.reload()
}
