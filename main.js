// ### 1. Affiche le contenu textuel du second h1
let h1_num2 = document.getElementsByTagName('h1')[1]
console.log(h1_num2.innerText)
console.log(h1_num2.textContent)

// ### 2. Affiche le contenu textuel du dernier li
let last_li = document.getElementsByTagName('li')[document.getElementsByTagName('li').length-1]
console.log(last_li.innerText)
console.log(last_li.textContent)

// ### 3. Affiche le contenu textuel du premier p en majuscule
let first_p = document.getElementsByTagName('p')[0]
console.log(first_p.innerText)
console.log(first_p.textContent)

// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule
let all_li = document.getElementsByTagName('li')

console.log(all_li)
Object.entries(all_li).forEach(e => {
    console.log(e[1].innerText.toUpperCase())
});

