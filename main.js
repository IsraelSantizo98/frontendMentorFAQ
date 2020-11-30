const $detailList = document.querySelectorAll("details");
$detailList.forEach(($details) =>{
    $details.querySelector("summary").addEventListener("click", expand);
});
function expand(){
    $detailList.forEach(($details) =>{
        $details.removeAttribute("open");
    });
}