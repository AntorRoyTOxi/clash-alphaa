//  function hideElement(elementId){ 
//      const element=document.getElementById(elementId); 
//       element.classList.add('hidden');
//  }; 
//   function showElement(elementId){ 
//       const element=document.getElementById(elementId); 
//        element.classList.remove('hidden');
//   } 
// function hideElement(elementId){ 
//      const element=document.getElementById(elementId); 
//        element.classList.add('hidden');  
        
// } 
//  function showElement(elementId){ 
//      const element=document.getElementById(elementId); 
//       element.classList.remove('hidden'); 
//      } 
    //   function getARandomNumber(){ 
    //       const numberString='abcdefghijklmnopqrstuvwxyz'; 
    //        const aphabet=numberString.split('');  
    //         // console.log(aphabet); 
    //             // random number  
    //          const randomNumber=Math.random()*25;  
    //           const number=Math.round(randomNumber); 
    //         //    console.log(number); 
    //          const alphabets=aphabet[number]; 
    //         //   console.log(alphabets); 
    //         //  console.log(alphabets,number); 
    //          return alphabets; 
             
                   
                   
             
            
    //   }  
       
        //  document.getElementById('btn').addEventListener('click',function(){ 
        //     const randomNumber=Math.random()*25;  
        //     const number=Math.round(randomNumber); 
        //      console.log(number);
        //  }) 

          function getARandomNumber(){ 
              const numberString='abcdefghijklmnopqrstuvwxyz'; 
               const alphabets=numberString.split(''); 
                    const randomNumber=Math.random()*25; 
                     const number=Math.round(randomNumber); 
                      const alphabet=alphabets[number]; 
                       return alphabet; 
               
          } 
           function hideElement(elementId){ 
             const element=document.getElementById(elementId);  
                    element.classList.add('hidden');
           }
        function showElement(elementId){ 
             const element=document.getElementById(elementId); 
                 element.classList.remove('hidden'); 
        } 
         function setcolorId(elementId){ 
             const element=document.getElementById(elementId); 
               element.classList.add('bg-lime-400'); 
         }