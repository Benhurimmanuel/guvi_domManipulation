// 1.Color a span/div element content when a user moves the mouse over the element.
// function bg(){
//     let di=document.getElementById("editable");
//     di.style.backgroundColor="red";
// }


// 2.Use prompt to read a value from user and display it in the span element.
// let name = prompt("Enter your name");
// let span=document.createElement("span");
// span.innerHTML="Your name is "+name
// document.body.append(span);


// 3.Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.
// function coords(event) {
//   let x = event.clientX;
//   let y = event.clientY;
//   let coords = "X coordinates: " + x + ", Y coordinates: " + y;
//   document.getElementById("coord").innerHTML = coords;
// }

// 4.Write a Javascript code for character counts in the textarea.
// counter=0
// function count(){
//     counter++
//     console.log(counter)
// }


// 5.Convert a given number from decimal to binary or hexadecimal
// let val=prompt("Enter value");
// let num=parseInt(val)
// let type=prompt("Enter 1 for binary and 2 for hexadecimal");
// if(type==1){
//     alert((num.toString(2)))
// }else if(type==2){
//     alert(num.toString(16))
// }
// else{
//     alert("wrong selection")
// }

// 6.With Javascript write a simple from validation

function myFunction() {
    let name=document.getElementById("names").value;
    console.log(name)
    if(name=="")
    {
        alert("please enter name")
    }
  }
//7.In your HTML Add two buttons, where first button action for full screen mode and the second button for exit from full screen mode.// NOTE: Input element should not be used.
// let elem=document.querySelector("body")
// function openFullscreen() {
//     if (elem.requestFullscreen) {
//       elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//       elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//       elem.msRequestFullscreen();
//     }
//   }
//   function closeFullscreen() {
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     } else if (document.webkitExitFullscreen) { /* Safari */
//       document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) { /* IE11 */
//       document.msExitFullscreen();
//     }
//   }


// 8.When user press any key in your html page show a alert that Invalid Key Pressed,//
//  but when user press spacebar show an alert Thank You..!! and close the current window.//
// function myFunction(event) {
//     let x = event.which || event.keyCode;
//     if(x!=32)
//     {
//         alert("invalid key is pressed");
//     }
//     else{
            // alert("Thank You")
//         window.close();
//     }
  
//   }

// 9.When a cursor is moved over an content, allow the user to edit the content in HTML page.
// NOTE: Input element should not be used.
// let a =document.getElementById("editable")
// a.setAttribute("contenteditable","true")
