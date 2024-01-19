//task3
const date = new Date();
const timeTag=document.querySelector("h1")
timeTag.style.color="cyan"
timeTag.style.backgroundColor="grey"
timeTag.style.padding="20px 30px"
timeTag.style.textAlign="center"
timeTag.textContent=date;
//task5
const item1= document.querySelectorAll('.nav-item')
for (let i = 0; i <item1.length; i++) {
    item1[i].addEventListener('click', e => {
        item1[i].style.backgroundColor='#fff';
        item1[i].style.color='rgb(220, 198, 240)';
        item1[i].style.padding='20px';
})
}
//task6
const increase=document.querySelector('.increase')
const decrease=document.querySelector('.decrease')
const number=document.querySelector('.num')
let count = 0;
increase.addEventListener('click', () => {
    count++;
    number.innerHTML = count;
});
if(count>0){
  decrease.addEventListener('click', () => {
        number.innerHTML = count;
    });
}
else if(count<=0){
    decrease.addEventListener('click', () => {
        count--;
        number.innerHTML = count--;
    });
}
//task2
let countries=['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda',
'Argentina','Armenia',"Australia",'Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados',
'Belarus',"Belgium",'Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Bostwana'
,'Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon']
let country;
for (let i = 0; i <countries.length; i++) {
    country = document.createElement('p')
    country.className = 'country'
    country.textContent = countries[i]
    document.body.appendChild(country)
}
//task4
// let eded;
// for (let i = 0; i <=10; i++) {
//     setInterval(function(){
//     eded= document.createElement('p')
//     eded.className = 'eded'
//     eded.textContent =i;
//             document.body.appendChild(eded)
//           },1000)

// }
//task1
// let sade=true;
// for(let i=0;i<=100;i++){
//     for(let a=0;a<Math.trunc(i/2);i++){
//         if(i%a==0){
//             sade=false
//         }
//     }
// }
// if(sade){
//     console.log('sadedi')
// }
// else{
//     console.log('sade deyil');
// }









