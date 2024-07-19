//Get elements from the DOM
const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

//select all 'q' elemts 
for(let i = 0; i < q.length; i++) {
    //add click event to all 'q' elements
    q[i].addEventListener('click', () => {
        /*Open the a 'element' with the same 'i' as the clicked 'q' element*/
        a[i].classList.toggle('a-opened');

        a[i].classList.toggle('arrow-rotated');
    });
}