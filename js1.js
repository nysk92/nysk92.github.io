
var student= "Yap"
var student_1= "Neil"
var student_2= "Friend"

var welcome_msg= "Hi. Let's be friends, "+ student_1 +" and " +student_2+"!"
console.log(welcome_msg)

alert("Welcome to class! " + welcome_msg)


function greet(nameOfPerson) {
    var greeting_message = "Welcome, Mr " + nameOfPerson
    console.log( greeting_message )
}

greet( "Bala" )

greet( "Zhi Min")

greet( "Kenneth")

function scold(a, b) {
var scolding_message = "Wth " + a + " and " + b +"!"
return scolding_message
}

console.log (scold ("Tom", "Dick"))

function joinNames( name1, name2 ){
    var joined_string = name1 + " " + name2
    return joined_string
}

console.log ( joinNames("Bala", "Ken") )

function double(a, b) {
var adv_task = a+ " " +a + " | " +b+ " " + b
console.log(adv_task)    
}

double("Bala", "Ken")

function joinNamesDouble(name1, name2){
    var advanced_string = doubleTheName(name1) + " | " + doubleTheName(name2)
    return advanced_string
}

function doubleTheName(name){
return name + " " + name
}

console.log(joinNamesDouble ("Harry", "Sally"))


function processInput() {
    var input1 = document.getElementById ("input1").value
    var input2 = document.getElementById ("input2").value

    var num1= parseInt(input1)
    var num2= parseInt(input2)

    var result = add(num1, num2)

    document.getElementById("result_header").innerHTML = result
}

function add(a,b) {
    console.log(a+b)
    return a + b
}


for (var index= 0; index < 10; index++){
    console.log(index)
}

var i = 0
while (i < 10){
    console.log(i)
    i++
}

//90-70
var a = 90;
while( a > 69) {
    console.log(a)
    a--
}
for (var a = 90; a> 69; a--){
    console.log(a)
}


// Objects
var pupil= {
    name: "Ken",
    age: 20,
    marks: [80, 89, 67, 90, 100],
    subjects: ["Math", "CS", "EC", "Math2", "Math3"],
    avg: 0,
    young: false,
    welcome_function: function(){
        console.log("WELCOME BLAAAA")
    },
    bmi: {
        height: 200,
        weight: 70
    }
}

// Access the value of name "property" from student object?
console.log(pupil.name)


var mymarks_list = pupil.marks

var total = 0
for (var num in mymarks_list){
    total = total + num
}

for (var index = 0; index < mymarks_list.length; index++){
    var num = mymarks_list[index];
    total = total + num
}

var index = 0
var total = 0
while (index < mymarks_list.length){
    total = total + mymarks_list[index]
    index++
}

var average = total / mymarks_list.length
pupil.avg= average


