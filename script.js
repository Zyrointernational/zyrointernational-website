
document.querySelectorAll('[data-mobile]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nav=document.querySelector('.menu');
    if(!nav) return;
    nav.style.display = nav.style.display==='flex' ? '' : 'flex';
    nav.style.position='absolute'; nav.style.top='68px'; nav.style.right='18px';
    nav.style.background='#fff'; nav.style.padding='18px'; nav.style.border='1px solid #dfe8e1';
    nav.style.borderRadius='16px'; nav.style.flexDirection='column'; nav.style.alignItems='stretch';
    nav.style.boxShadow='0 18px 40px rgba(0,0,0,.12)';
  });
});
document.querySelectorAll('form[data-mail]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const fd=new FormData(form);
    const subject=encodeURIComponent('Zyro International Website Enquiry — '+(fd.get('name')||''));
    let body='';
    fd.forEach((v,k)=>body += `${k}: ${v}\n`);
    window.location.href=`mailto:info@zyrointernational.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  });
});
