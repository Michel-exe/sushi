const ordenesComponent = ({plat,pre,pz,tot}) =>{
   return `
      <div class="ordenMainCon">
         <div>
             <h3>${plat}</h3>
             <span>
                 <h4>$${pre} / ${pz}pz</h4>
             </span>
         </div>
         <b>$ ${tot}</b>
      </div>`
};
const subComponent = ({ plat, cost, ingr }) => {
   let subClass=""
   if(ingr==undefined){
      ingr="";
      subClass="sinDescrption"
   }
   return `
      <div class="${subClass}" data-name="${plat}" data-cost=${cost} >
         <strong class="canPlatillos" id="canPlatillos">0</strong>
         <span>
            <b>${plat}</b>
            <i>$${cost}</i>
         </span>
         <strong class="cancelarPlatillo" id="cancelarPlatillo">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path>
               <path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
            </svg>
         </strong>
         <small>${ingr}</small>
      </div>
   `;
};
const componente = (obj, long) => {
   return `
      <section longitud=${long}>
         <div>
             <picture>
                 <img src="${obj.imag}" alt="">
             </picture>
             <h2>${obj.name}</h2>
             <span class="downCotent" data-long=${long}>
                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
             </span>
         </div>
         <nav>
         </nav>
      </section>
         `;
}
let msjComplete='';
let tmpmsj = "";

const navegacion = document.getElementById("navegacion");
const platillos = document.getElementById("platillos");
const deposito = document.getElementById("deposito");
const domicilio = document.getElementById("domicilio");
const orden = document.getElementById("orden");
const inputPlatillos = document.getElementById("inputPlatillos");
const formPlatillos = document.getElementById("formPlatillos");
const cantEfectivo = document.getElementById("cantEfectivo");
const recogerPedido = document.getElementById("recogerPedido");
let elementActual;

const llenarLink = (val,num) => {
   const apiWhatsapp = 'https://api.whatsapp.com/send?phone=527491060297&text='
   let el = document.querySelectorAll(".linkWhats")
   val = "Hola me gustaria ordenar:+".concat(val)
   console.log(apiWhatsapp.concat(val));
   val = val.replaceAll('#','%23')
   val = val.replaceAll(' ','+')
   el[num].setAttribute("href",apiWhatsapp.concat(val))

}
window.addEventListener("submit", e =>{
   e.preventDefault()
})
formPlatillos.addEventListener("submit", e => {
   let inp = inputPlatillos.value;
   if (inp.length == 0) {
      alert("Por favor complete el campo")
   } else {
      if (/^\d{1,2}$/.test(inp)) {
         if (inp == "0") {
            platillos.style.transform = 'scale(0)'
            elementActual.classList.remove("ordenado")
         } else {
            elementActual.firstElementChild.innerHTML = inp
            elementActual.classList.add("ordenado")
            elementActual.setAttribute("data-plat", inp)
         }
         platillos.style.transform = 'scale(0)'
      } else {
         alert("Por favor complete el campo correctamente")
      }
   }
   inputPlatillos.value = "";
})
obj.map(o => {
   navegacion.innerHTML += componente({
      imag: o.imag,
      name: o.name.toUpperCase()
   }, o.data.length)
   o.data.map(d => {
      navegacion.lastElementChild.lastElementChild.innerHTML += subComponent(d)
   })
})
document.querySelectorAll(".navegacion section > div").forEach(dl => {
   dl.addEventListener("click", () => {
      let padre = dl.parentElement;
      padre.classList.contains("desplegado") ? [
         padre.style.height = "58px",
         padre.classList.remove("desplegado")
      ] : [
         padre.style.height = `${padre.scrollHeight + 10}px`,
         padre.classList.add("desplegado")
      ]
   })
})
document.querySelectorAll("#navegacion > section nav div").forEach(pl => {
   pl.addEventListener("click", e => {
      let tar = e.target;
      let tag = e.target.tagName;
      let con = (
         (tag == "STRONG" || tag == "SPAN" || tag == "SMALL")
            ? tar.parentElement
            : (tag == "DIV") ? tar : (tag == "path")
               ? tar.parentElement.parentElement.parentElement
               : tar.parentElement.parentElement)
      if (tag == "path" || tag == "svg" || tag == "STRONG") {
         con.classList.remove("ordenado");
      } else {
         elementActual = con;
         inputPlatillos.focus()
         platillos.style.transform = 'scale(1)'
      }
   })
})
document.getElementById("abrirOrden").addEventListener("click", ()=>{
   msjComplete='';
   let con = document.getElementById("ordenMain")
   con.innerHTML="";
   let tot=0;
   let totfin=0;
   document.querySelectorAll(".ordenado").forEach(or => {
      msjComplete+= or.getAttribute("data-plat") + "-" + or.getAttribute("data-name")+", ";
      tot= parseInt(or.getAttribute("data-cost")) * parseInt(or.getAttribute("data-plat"))
      totfin+=tot
      con.innerHTML+=ordenesComponent({
         plat: or.getAttribute("data-name"),
         pre: or.getAttribute("data-cost"),
         pz: or.getAttribute("data-plat"),
         tot: tot
      })
   })
   if(totfin > 0){
      document.querySelector(".tot b").innerHTML=`$ ${totfin}`
      orden.style.transform="scale(1)"
      llenarLink(msjComplete.concat("*Recojo en el Restaurante*"),2)
   } else{
      alert("Por favor ordene algo")
   }
})
document.getElementById("opcPago").addEventListener("click", e =>{
   let tar = e.target
   if(tar.tagName=="BUTTON" && tar.getAttribute("id")=="pagoDeposito"){ domicilio.style.transform= `scale(1)`}
})
document.getElementById("selecPagoSpan").addEventListener("click", e =>{
   let tar = e.target
   if(tar.tagName=="BUTTON"){
      let tmpmsj2 = ["*Efectivo*",1]
      if(tar.getAttribute("id")=="pagoTransferencia"){
         deposito.style.transform =`scale(1)`
         tmpmsj2 = ["*Transferencia*. ¿En cuanto tiempo podria pasar?",0]
      } else{
         cantEfectivo.style.transform =`scale(1)`
         document.getElementById("cantEfectivoVal").focus()
         document.querySelector(".tot2 b").innerHTML=`
            ${"$ ".concat(parseInt(document.querySelector(".tot b").innerHTML.replaceAll("$ ",""))+15)}
         `
      }
      tmpmsj = ` Mi direccion es: *${document.getElementById("datosDomicilio")[0].value}*, mis referecncias son: *${document.getElementById("datosDomicilio")[1].value}* a nombre de: *${document.getElementById("datosDomicilio")[2].value}*. Pago mediante: ${tmpmsj2[0]} `
      llenarLink(msjComplete.concat(tmpmsj),tmpmsj2[1])
   }
})
document.getElementById("cantEfectivoVal").addEventListener("keyup", e =>{
   llenarLink(msjComplete.concat(tmpmsj).concat('Con la cantidad de *$').concat(e.target.value).concat("*. ¿En cuanto tiempo vendria?"),1)
})
document.getElementById("recoRestaurante").addEventListener("click",()=>{
   recogerPedido.style.transform =`scale(1)`;
   document.getElementById("tiempoPedidoInp").focus();
})
document.getElementById("tiempoPedidoInp").addEventListener("change", e =>{
   // console.log(e.target.value);
   llenarLink(msjComplete.concat(tmpmsj + "*Recojo en el Restaurante*").concat(".  Llego aproximadamente a las: *").concat(e.target.value).concat("*") ,2)
})
document.querySelectorAll(".dialog").forEach(di =>{
   di.addEventListener("click", e =>{
      if(["platillos","deposito","domicilio","cantEfectivo","orden","recogerPedido"].some(n=> n==e.target.getAttribute("id"))){
         e.target.style.transform=`scale(0)`
      }
   })
})