let num =0
let mu=0
document.getElementById("btn").addEventListener("click",function(){
         let descrip=document.getElementById("des").value.trim()
         let amount=document.getElementById("am").value.trim()
         let list=document.createElement("li")
         list.innerText=descrip 
         list.style.display="flex"
         list.style.flexDirection="row"
         list.style.justifyContent="center"
         list.style.borderRadius="5px"
         list.style.gap="20px"
         
         list.style.backgroundColor=" #f1f2f6"
         let br=document.createElement("br")
         let btn=document.createElement("button")
         btn.innerText="X"
         btn.style.color="white"
         btn.style.borderRadius="5px"
         btn.style.backgroundColor=" rgba(218, 23, 23, 1)"
         
         btn.style.marginLeft="20px"
         let amo=document.createElement("span")
         amo.innerText=amount
         amo.style.marginLeft="20px"
         list.append(amo)
         list.append(btn)
         document.getElementById("transaction").append(list ,br)
            btn.addEventListener("click" ,function(){
                     list.remove()
                     btn.remove()
                     br.remove()
       }
      )
      let income =document.getElementById("inc")
      let expense =document.getElementById("exp")
      if(amount[0]=='+'){
        num+=Number(amount.slice(1))
        income.innerText='+'+num
      }
      else{
         mu+=Number(amount.slice(1))
        expense.innerText="-"+mu
      }
      let total=document.getElementById("total")
      let n=income.innerText
      let m=expense.innerText
      let val=Number(n.slice(1))-Number(m.slice(1))
      total.innerText=val+"Rs"
    
      
})

