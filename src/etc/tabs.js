function switchTab(tab){
    data.nav.last = data.nav.current
    data.nav.current = tab
    DOM(`${data.nav.last}Page`).style.display = 'none'
    DOM(`${tab}Page`).style.display = 'flex'

    if(tab === 'items') makeItems()
    else document.getElementById(`itemRowContainer`).replaceChildren()

    if(tab === 'merge') updateAnnihilationTexts()
}