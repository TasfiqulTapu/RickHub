// souce for this fix: https://stackoverflow.com/a/25721457
document.addEventListener('DOMContentLoaded', function() {
    console.log("i heared u")
    document.getElementById("verify").addEventListener("click", begin);
    function begin(){
        let stuff = document.getElementsByClassName("initial")
        for (const el of stuff) {
            el.style.display = "none";
        }
        let v = document.getElementById("video");
        v.style.display = "flex";
        v.play();
        v.style.marginTop = `${window.innerHeight/2 - v.offsetHeight/2}px`;
    }
});