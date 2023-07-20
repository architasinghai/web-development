var questions = ['1 + 4 = ?', '1 + 7 = ?', '4 - 3 = ?', '8 - 5 = ?']
var count = 0

function myFunction()
{
    var person = prompt("Please enter your name", "Harry Potter")
    if(person !=null && person != " ")
    {
        document.getElementById("demo").innerHTML = "Hello "= person+ "! We will start the quiz as soon as you hit on start"
        document.getElementById("star").style.display = "block";
    }
}

function afunc()
{
    document.getElementById("ques").innerHTML = questions[0]
    count = 0
    document.getElementById("demo").innerHTML = ""
    document.getElementById("skr").innerHTML = ""
    document.getElementById("hela").innerHTML = "none"
}

function bfunc()
{
    var c = i+1
    document.getElementById("ques").innerHTML = questions[c]
    ans()
}

function Next()
{
    document.getElementById("result").innerHTML = ""
    var i = 0
    var c = questions.length

    for(i; i<c; i++){
        if(document.getElementById("ques").innerHTML === questions[i])
        {
            bfunc(i)
            break;
        }
    }
}


function score()
{
    document.getElementById("skr").innerHTML = "Your Score: " + count + " Out of 4"
}
function ans()
{
    if(document.getElementById("ques").innerHTML === "1 + 4 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt2 = document.createElement("button")
        opt1.innerHTML = "5"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your Answer is correct"
            count++
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            setTimeout(Next,1000)
        }

        var opt3 = document.createElement("button")
        opt1.innerHTML = "4"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt4 = document.createElement("button")
        opt1.innerHTML = "8"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }
    }

    else if(document.getElementById("ques").innerHTML ==="1 + 7 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt2 = document.createElement("button")
        opt1.innerHTML = "5"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your Answer is correct"
            count++
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            setTimeout(Next,1000)
        }

        var opt3 = document.createElement("button")
        opt1.innerHTML = "4"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt4 = document.createElement("button")
        opt1.innerHTML = "8"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }
    }

    else if(document.getElementById("ques").innerHTML ==="4 - 3 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt2 = document.createElement("button")
        opt1.innerHTML = "5"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your Answer is correct"
            count++
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            setTimeout(Next,1000)
        }

        var opt3 = document.createElement("button")
        opt1.innerHTML = "4"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        var opt4 = document.createElement("button")
        opt1.innerHTML = "8"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
        }

        if(document.getElementById("ques").innerHTML === "8 - 5 = ?"){
            var opt1 = document.createElement("button")
            opt1.innerHTML = "6"
            document.body.appendChild(opt1)
            opt1.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your Answer is wrong"
                setTimeout(Next,1000)
                opt1.style.display = "none";
                opt2.style.display = "none";
                opt3.style.display = "none";
                opt4.style.display = "none";
            }
    
            var opt2 = document.createElement("button")
            opt1.innerHTML = "5"
            document.body.appendChild(opt2)
            opt2.onclick = function opta(){
                document.getElementById("result").style.color = "green"
                document.getElementById("result").innerHTML = "Your Answer is correct"
                count++
                setTimeout(Next,1000)
                opt1.style.display = "none";
                opt2.style.display = "none";
                opt3.style.display = "none";
                opt4.style.display = "none";
                setTimeout(Next,1000)
            }
    
            var opt3 = document.createElement("button")
            opt1.innerHTML = "4"
            document.body.appendChild(opt3)
            opt3.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your Answer is wrong"
                setTimeout(Next,1000)
                opt1.style.display = "none";
                opt2.style.display = "none";
                opt3.style.display = "none";
                opt4.style.display = "none";
            }
    
            var opt4 = document.createElement("button")
            opt1.innerHTML = "8"
            document.body.appendChild(opt4)
            opt4.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your Answer is wrong"
                setTimeout(Next,1000)
                opt1.style.display = "none";
                opt2.style.display = "none";
                opt3.style.display = "none";
                opt4.style.display = "none";
            }
        }
    } 
}