
const myName = "kaungkyaw"


export function showMyName(){
    return myName;

}
export function showMyUI(selector){
    document.querySelector(selector).innerHTML=myName;
}