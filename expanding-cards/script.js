
const panelList = document.querySelectorAll('.container .panel')

for(const panel of panelList){
    panel.addEventListener('click', ()=>{
        removeActivePanel()
        panel.classList.add('active')
    })
}
function removeActivePanel(){
    for(const panel of panelList){
        panel.classList.remove('active')
    }
}