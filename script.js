document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu"), nav=document.querySelector(".nav nav");
  if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}
  const y=document.getElementById("year"); if(y)y.textContent=new Date().getFullYear();
  const form=document.getElementById("contactForm"), status=document.getElementById("status");
  if(form&&status){form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent(`ZYROCORP Discovery Request — ${d.get("business")}`);const body=encodeURIComponent(`Business: ${d.get("business")}\nContact: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")||"Not provided"}\nService: ${d.get("service")}\n\nWorkflow / requirement:\n${d.get("message")}`);window.location.href=`mailto:hello@zyrocorp.com?subject=${subject}&body=${body}`;status.textContent="Your email application should open with the request prepared."})}
});