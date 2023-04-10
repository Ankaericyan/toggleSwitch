let a = document.getElementsByClassName("a")[0]
let b = document.getElementsByClassName("b")[0]
let tog = document.getElementsByClassName("toggle")

for(let i = 0; i < tog.length; i++){
    tog[i].onclick = function(){
        console.log(tog[i]);
        if(tog[i] == tog[0]){
            
            console.log(tog[0]);
            if(a.checked == true){
                a.checked =true
                b.checked= false
                // console.log("if");
            }
            else{
                b.checked= false
                a.checked = false
                // console.log("else"); 
            }
            

        }
        else{
            if(b.checked== true){
            b.checked=true
                a.checked = false
                console.log("if");
            }
            else{
                b.checked= false
                a.checked = false
                console.log("else"); 
            }
        }
       
    }
}