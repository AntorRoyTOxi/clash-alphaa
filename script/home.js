// function play(){   
//     // step-1: hidden the home screen 
//     const homeSection=document.getElementById('home-screen'); 
//      homeSection.classList.add('hidden'); 
//     // step-2: show the playground  
//       const playgroundSection=document.getElementById('play-ground');  
//     //    console.log(playgroundSection.classList);    
//      playgroundSection.classList.remove('hidden');
// } 
//   function play(){ 
//     hideElement('home-screen');
//     showElement('play-ground');
//    }


    //  function play(){ 
    //      const homeSection=document.getElementById('home-screen'); 
    //        homeSection.classList.add('hidden');  
    //         const playgroundSection=document.getElementById('play-ground'); 
    //          playgroundSection.classList.remove('hidden'); 
    //  }  
      
     function continueGame(){
           const alphabet=getARandomNumber(); 
            console.log(alphabet); 
             const currentAlphabet=document.getElementById('current-alphabet'); 
               currentAlphabet.innerText=alphabet; 
               setcolorId(alphabet);
     };
     function play(){ 
        hideElement('home-screen');
         showElement('play-ground'); 
         continueGame();
        }