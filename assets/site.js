(function(){
const BASE="/haddouche-literature-platform";
document.addEventListener("DOMContentLoaded",()=>{
  const styleLink=document.querySelector('link[href*="style.css"]');
  if(styleLink){
    const u=new URL(styleLink.href,location.href);
    u.searchParams.set("v","20260925-typography2");
    styleLink.href=u.toString();
  }
  // الشعار الرسمي للمنصة
  let favicon=document.querySelector('link[rel="icon"]');
  if(!favicon){
    favicon=document.createElement("link");
    favicon.rel="icon";
    favicon.type="image/jpeg";
    document.head.appendChild(favicon);
  }
  favicon.href=BASE+"/assets/haddouche-logo.jpg?v=20260926-logo1";

  const nav=document.querySelector("nav");
  if(!nav)return;
  const brand=nav.querySelector(".brand");
  if(brand){
    brand.href=BASE+"/index.html";
    const oldMark=brand.querySelector(".mark");
    if(oldMark){
      const logo=document.createElement("img");
      logo.className="brand-logo";
      logo.src=BASE+"/assets/haddouche-logo.jpg?v=20260926-logo1";
      logo.alt="شعار منصة حدوش للأدب والثقافة";
      oldMark.replaceWith(logo);
    } else if(!brand.querySelector(".brand-logo")){
      const logo=document.createElement("img");
      logo.className="brand-logo";
      logo.src=BASE+"/assets/haddouche-logo.jpg?v=20260926-logo1";
      logo.alt="شعار منصة حدوش للأدب والثقافة";
      brand.prepend(logo);
    }
  }
  let btn=nav.querySelector(".menu-btn");
  if(!btn){btn=document.createElement("button");btn.className="menu-btn";btn.type="button";btn.setAttribute("aria-label","القائمة");btn.textContent="☰";brand?.after(btn)}
  let links=nav.querySelector(".links");
  if(!links){links=document.createElement("div");links.className="links";nav.appendChild(links)}
  links.innerHTML="\n<a href=\"/haddouche-literature-platform/index.html\">الرئيسية</a>\n<div class=\"nav-dropdown\">\n  <button class=\"nav-dropbtn\" type=\"button\">الأقسام ▾</button>\n  <div class=\"dropdown-menu\">\n    <a href=\"/haddouche-literature-platform/categories.html\">كل الأقسام</a>\n    <a href=\"/haddouche-literature-platform/categories/poetry.html\">الشعر</a>\n    <a href=\"/haddouche-literature-platform/categories/short-story.html\">القصة القصيرة</a>\n    <a href=\"/haddouche-literature-platform/categories/novel.html\">الرواية</a>\n    <a href=\"/haddouche-literature-platform/categories/literary-article.html\">المقال الأدبي</a>\n    <a href=\"/haddouche-literature-platform/categories/literary-criticism.html\">النقد الأدبي</a>\n    <a href=\"/haddouche-literature-platform/categories/thought.html\">الفكر والتأمل</a>\n    <a href=\"/haddouche-literature-platform/categories/culture.html\">الثقافة</a>\n  </div>\n</div>\n<div class=\"nav-dropdown\">\n  <button class=\"nav-dropbtn\" type=\"button\">السلاسل ▾</button>\n  <div class=\"dropdown-menu\">\n    <a href=\"/haddouche-literature-platform/series.html\">كل السلاسل</a>\n    <a href=\"/haddouche-literature-platform/series/ala-hafat-al-adab.html\">على حافة الأدب</a>\n  </div>\n</div>\n<div class=\"nav-dropdown\">\n  <button class=\"nav-dropbtn\" type=\"button\">الفهارس ▾</button>\n  <div class=\"dropdown-menu\">\n    <a href=\"/haddouche-literature-platform/writers.html\">الكتّاب</a>\n    <a href=\"/haddouche-literature-platform/countries.html\">البلدان</a>\n    <a href=\"/haddouche-literature-platform/topics.html\">الموضوعات</a>\n    <a href=\"/haddouche-literature-platform/latest.html\">أحدث النصوص</a>\n  </div>\n</div>\n<a href=\"/haddouche-literature-platform/search.html\">البحث</a>\n<a href=\"/haddouche-literature-platform/about.html\">من نحن</a>\n<a class=\"cta\" href=\"/haddouche-literature-platform/submissions.html\">شروط النشر</a>";
  btn.onclick=()=>links.classList.toggle("open");
  links.querySelectorAll(".nav-dropbtn").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();b.parentElement.classList.toggle("open")}));
  document.addEventListener("click",()=>links.querySelectorAll(".nav-dropdown.open").forEach(x=>x.classList.remove("open")));
});
})();
async function sharePage(){if(navigator.share){try{await navigator.share({title:document.title,url:location.href})}catch(e){}}else{navigator.clipboard.writeText(location.href);alert("تم نسخ رابط الصفحة")}}
function copyLink(){navigator.clipboard.writeText(location.href);alert("تم نسخ الرابط")}