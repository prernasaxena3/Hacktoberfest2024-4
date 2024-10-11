<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scientific Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="deleteLast()">DEL</button>
            <button onclick="insert('%')">%</button>
            <button onclick="insert('/')">/</button>

            <button onclick="insert(7)">7</button>
            <button onclick="insert(8)">8</button>
            <button onclick="insert(9)">9</button>
            <button onclick="insert('*')">*</button>

            <button onclick="insert(4)">4</button>
            <button onclick="insert(5)">5</button>
            <button onclick="insert(6)">6</button>
            <button onclick="insert('-')">-</button>

            <button onclick="insert(1)">1</button>
            <button onclick="insert(2)">2</button>
            <button onclick="insert(3)">3</button>
            <button onclick="insert('+')">+</button>

            <button onclick="insert(0)">0</button>
            <button onclick="insert('.')">.</button>
            <button onclick="calculate()">=</button>
            <button onclick="insert('**')">x²</button>

            <button onclick="insert('Math.sin(')">sin</button>
            <button onclick="insert('Math.cos(')">cos</button>
            <button onclick="insert('Math.tan(')">tan</button>
            <button onclick="insert('Math.sqrt(')">√</button>
        </div>
    </div>

    <script>
            // Script for Scientific Calculator

            // Insert numbers and operators
            function insert(value) {
                document.getElementById("display").value += value;
            }
            
            // Clear the entire display
            function clearDisplay() {
                document.getElementById("display").value = "";
            }
            
            // Delete the last character from the display
            function deleteLast() {
                let current = document.getElementById("display").value;
                document.getElementById("display").value = current.substring(0, current.length - 1);
            }
            
            // Calculate the expression in the display
            function calculate() {
                try {
                    let expression = document.getElementById("display").value;
                    document.getElementById("display").value = eval(expression);
                } catch (error) {
                    alert("Invalid Calculation");
                }
            }

</script>
</body>
</html>
