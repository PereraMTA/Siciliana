let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange();
});


function menuBtnChange() {
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  }
  else {
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
  }
}

// Códigos
//var cod_aliado = "SICI#9964";
//    
//        function confirmar_codigo(){
//            senha = document.checar.senha.value
//    
//            if (senha == cod_aliado){
//                document.querySelector(".div_principal").style.opacity = "100%";
//            }
//            else{
//                alert("O código está incorreto!");
//                
//            }
//        }
    


