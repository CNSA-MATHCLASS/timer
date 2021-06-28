    function sin_plus () {
        var A = Number(document.getElementById("sin_A").value);
        var B = Number(document.getElementById("sin_B").value);

        var sin_A = Math.sin(A * Math.PI / 180);
        var sin_B = Math.sin(B * Math.PI / 180);
        document.getElementById("test").innerHTML = A;
        if(sin_A > sin_B) {
            var result = A + B;
            document.getElementById("result").innerHTML = "A팀: " + result;
        } else if(sin_A < sin_B) {
            var result = A + B;
            document.getElementById("result").innerHTML = "B팀: " + result;
        } else {
            document.getElementById("result").innerHTML = "같은 각도 ";
        }
    }
    function sin_minus () { 
        var A = Number(document.getElementById("sin_A").value);
        var B = Number(document.getElementById("sin_B").value);

        var sin_A = Math.sin(A * Math.PI / 180);
        var sin_B = Math.sin(B * Math.PI / 180);
        if(sin_A > sin_B) {
            var result = A - B;
            document.getElementById("result").innerHTML = "A팀: " + result;
        } else if(sin_A < sin_B) {
            var result = B - A;
            document.getElementById("result").innerHTML = "B팀: " + result;
        } else {
            document.getElementById("result").innerHTML = "같은 각도 ";
        }
    }
