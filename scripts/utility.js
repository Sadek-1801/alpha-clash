function hideSection(elemId){
     const hideSection = document.getElementById(elemId);
     hideSection.classList.add('hidden');
}
function showSection(elemId){
    const showSection = document.getElementById(elemId);
    showSection.classList.remove('hidden')
}
function randomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');
    const randomIndex = alphaArr[Math.round(Math.random()*alphaArr.length)];
    return randomIndex;
}
function bgColor(elemId){
    const setBgColor = document.getElementById(elemId)
    setBgColor.classList.add('bg-orange-400')
}
function bgColorRemove(elemId){
    const removeBgColor = document.getElementById(elemId)
    removeBgColor.classList.remove('bg-orange-400')
}
function getElemText(elemId){
    const getElem = document.getElementById(elemId);
    const text = getElem.innerText;
    return text;
}
function setValToText(elemId, value){
    const elem = document.getElementById(elemId);
    elem.innerText = value;
}
function resetGame(){
    hideSection("results");
    setValToText('life', 5);
    setValToText('score', 0);
}
