document.addEventListener("DOMContentLoaded", function(){

        const button = document.querySelector("#button");
        const citation = document.querySelector("#article");
        const article = document.querySelector("#para");

        function showhide(para) {
        button.addEventListener("click",() =>{

        if (window.getComputedStyle(para).display == "none")
        {
            //show
            para.style.display = "block";
            button.textContent = "hide";

        }else{
            //hide the
            para.style.display = "none";
            button.textContent = "show";
        }

            
        })

    }

showhide(article);
})