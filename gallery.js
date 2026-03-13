function filterGallery(type){
const items=document.querySelectorAll(".item");

items.forEach(img=>{
    if(type==="all" || img.classList.contains(type))   
    {
        img.style.display="block";
    }       
    else    
    {
        img.style.display="none";
    }});
}