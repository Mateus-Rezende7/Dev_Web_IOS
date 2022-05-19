//console.log(window);
// window.alert('Boas vindas!!');




document.title = 'Exercício11';



let s = document.createElement('section');
document.body.appendChild(s);
let h = document.createElement('H1');
let p = document.createElement('p');
h.innerHTML = "Elemento DOOM";
p.innerHTML = "Elemento DOOM";

s.appendChild(h);
s.appendChild(p);



let a = document.createElement('article');
document.body.appendChild(a);
let hh = document.createElement('H2');
hh.innerHTML = "Elemente DOOM";

a.appendChild(hh);

h.style.textAlign = 'center';
h.style.fontFamily = 'Arial';
p.style.textAlign = 'center';
p.style.marginTop = '10%';
p.style.fontFamily = 'Arial';
hh.style.textAlign = 'center';
hh.style.marginTop = '10%';
hh.style.fontFamily = 'Arial';









