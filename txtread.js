document.getElemetByld("openfile").addEventListener('change',function(){
    var fr = new FileReader();
    fr.onload = function(){
        alert(document.getElementById("FileContent").textContent) //= this.result;
    }
    fr.readAsText(this.files[0]);
})