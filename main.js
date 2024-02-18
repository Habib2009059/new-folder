    reading('.read-more-btn','.text');
    reading('.read-more-btn2','.text2');
  function reading(class1,class2){
    const readMoreBtn = document.querySelector(class1);
  const text = document.querySelector(class2);
  readMoreBtn.addEventListener('click',function(){
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Read more!'){
      readMoreBtn.innerText = 'Read less!';
    }
    else{
      readMoreBtn.innerText = 'Read more!';
    }
  })
  }

navigations('bd','ukrane');
navigations('int','russia');
navigations('game','football');
function navigations(id1,id2){
       //login button event handler
   const loginBtn = document.getElementById(id1);
   loginBtn.addEventListener('click', function(){
       //console.log('Clicked!');
       const loginArea = document.getElementById('full');
       loginArea.style.display = 'none';   //login page will be cleared!
       const transactionArea = document.getElementById(id2);
       transactionArea.style.display = 'block';    //transaction page will be viewed
   })
}