//Assingment 1

//var passward = ("Error! Please enter a valid passward.");
//alert (passward);

//var land = ("Welcome to JS Land...\n Happy Coding!");
//alert (land);

//var js = ("Welcome to JS Land");
//alert (js);

//var coding = ("Happy Coding!\n Prevent this page from creating additional dialogs");
//alert (coding);

//var consol = "Hello! I can run JS through my web browser's console";
//console.log (consol);



//Assingment 3

//var age = 15;
//alert("I am 41 years old")
//alert("I am visited 14 times")

//var birth = 1990;
//document.write("My birth year is 1982")

//var visitorsName = prompt ("Enter your name")
//var productTitle = prompt ("Enter the product title")
//var quantity = prompt ("Enter the quantity")
//var message = (visitorsName + " " + "ordered" + " " + quantity + " " + productTitle + " " + "(s) on XYZ Cloting Store");{
//    document.write(message)
//}


//Assingment 5

//var a = 3;
//var b = 5;
//var c = a+b;
//document.write(c)

//var a = 3;
//var b = 5;
//var c = b-a;
//document.write(c)

//var a = 3;
//var b = 5;
//var c = a*b;
//document.write(c)

//var a = 3;
//var b = 5;
//var c = b/a;
//document.write(c)


// Assingmeng DOM
// 1st Answer
// var main1 = document.getElementById('main-content');
// console.log(main1);

// 2nd Ans
// var main1 = document.getElementById('main-content');
// var children = main1.children;
// for (var i = 0; i < children.length; i++){
//     console.log(children[i]);
// }

// 3rd Ans
// var renderElements = document.getElementsByClassName('content');
// for (var i = 0; i < renderElements.length; i++){
//     console.log(renderElements[i].innerHTML);
// }

// 4th Ans
// document.getElementById('first-name').value = 'Alex';
// document.getElementById('last-name').value = "Bank";
// document.getElementById('email').value = "alexbank@example.com"

// 5th & 6th Ans
// var lastNameElement = document.getElementById('last-name');
// console.log(lastNameElement.nodeType);

// 7th Ans
// var lastNameElement = document.getElementById('last-name');
// var textNode = lastNameElement.childNodes[0];
// textNode.nodeValue = "Last Name: Tom";

// 8th Ans
// var mainContent = document.getElementById('main-content');
// var firstChild = mainContent.firstChild;
// var lastChild = mainContent.lastChild;{
//     console.log(firstChild);
//     console.log(lastChild);
// }

// 9th Ans
// var mainContent = document.getElementById('main-content');
// var firstSibling = mainContent.firstSibling;
// var lastSibling = mainContent.lastSibling;{
//     console.log(firstSibling);
//     console.log(lastSibling);
// }

// 10th Ans
// var emailElement = document.getElementById('email');
// var parentNode = emailElement.parentNode;
// var nodeType = emailElement.nodeType;{
//     console.log(parentNode);
//     console.log(nodeType);
// }


// Objects Assingment
// Ans: 1
// var itemsArray = [
//     {name: "juice", price: "50", quantity: "3"},
//     {name: "cookie", price: "30", quantity: "9"},
//     {name: "shirt", price: "880", quantity: "1"},
//     {name: "pen", price: "100", quantity: "2"}
// ];

// function calculateTotalPrice(){
//     var totalPriceAllItems = 0;
//     itemsArray.forEach(function(item) {
//         var totalPriceItem = item.price * item.quantity;
//         document.write("Total price of " + item.name + ": " + totalPriceItem + "<br/>");
//         totalPriceAllItems += totalPriceItem;
//     });

//     document.write("Total price of all items: " + totalPriceAllItems);
// }
// calculateTotalPrice();

// Ans: 2
// var users = 
//     {name: "Rehan",
//     email: "Buleshaperd3@gmail.com",
//     password: "Password1234",
//     age: 42,
//     gender: "Male",
//     city: "Karachi",
//     country: "Pakistan" 
//     };
//     function checkProperties(){
//         if("age" in users && "country" in users){
//             console.log("Age and country properties exist in the object.")
//         }
//         else{
//             console.log("Age and country properties do not exist in the object.")
//         }
        
//     }
    
//     checkProperties();
    
//     function checkSecondProperties(){
//         if("firstName" in users && "lastName" in users){
//             console.log("firstName and lastName properties exist in the object.")
//         }
//         else{
//             console.log("firstName and lastName properties do not exist in the object.")
//         }
//     }
//     checkSecondProperties();

// Ans:3
function Record(name, email, age, country) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.country = country;
}
var record1 = new Record("John Doe", "john@example.com", 25, "USA");
var record2 = new Record("Jane Smith", "jane@example.com", 30, "Canada");
var record3 = new Record("Alice Johnson", "alice@example.com", 22, "UK");
var record4 = new Record("Rehan Rafique", "blue@gmail.com", 42, "Pakistan")

console.log("Record 1:", record1);
console.log("Record 2:", record2);
console.log("Record 3:", record3);
console.log("Record 4:", record4);
