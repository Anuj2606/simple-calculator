<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f4f8;
        }
        .calculator {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            width: 300px;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 1.5rem;
        }
        .input-group {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
            color: #555;
        }
        input[type="number"] {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        .button-group {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        button {
            padding: 0.5rem;
            border: none;
            border-radius: 4px;
            background-color: #4a90e2;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #3a7bc8;
        }
        #result {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            background-color: #f0f4f8;
            padding: 1rem;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <h1>Simple Calculator</h1>
        <div class="input-group">
            <label for="num1">Number 1:</label>
            <input type="number" id="num1" placeholder="Enter first number">
        </div>
        <div class="input-group">
            <label for="num2">Number 2:</label>
            <input type="number" id="num2" placeholder="Enter second number">
        </div>
        <div class="button-group">
            <button onclick="performOperation('add')">Add</button>
            <button onclick="performOperation('sub')">Subtract</button>
            <button onclick="performOperation('mul')">Multiply</button>
            <button onclick="performOperation('div')">Divide</button>
        </div>
        <div id="result">Result: </div>
    </div>

    <script>
        const num1Input = document.getElementById("num1");
        const num2Input = document.getElementById("num2");
        const resultDisplay = document.getElementById("result");
    
        function validateInputs(num1, num2) {
            if (isNaN(num1) || isNaN(num2)) {
                return { valid: false, message: "Please enter valid numbers." };
            }
            return { valid: true };
        }
    
        function calculate(num1, num2, operation) {
            let result;
    
            switch (operation) {
                case "add":
                    result = num1 + num2;
                    break;
                case "sub":
                    result = num1 - num2;
                    break;
                case "mul":
                    result = num1 * num2;
                    break;
                case "div":
                    if (num2 === 0) {
                        return "Error (division by zero)";
                    }
                    result = num1 / num2;
                    break;
                default:
                    return "Invalid Operation";
            }
    
            return formatResult(result);
        }
    
        function formatResult(result) {
            return typeof result === 'number' && !isNaN(result) ? parseFloat(result.toFixed(8)) : result;
        }
    
        function displayResult(message) {
            resultDisplay.innerHTML = "Result: " + message;
        }
    
        function clearCalculator() {
            num1Input.value = '';
            num2Input.value = '';
            resultDisplay.innerHTML = "Result: ";
        }
    
        function performOperation(operation) {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
    
            const validation = validateInputs(num1, num2);
            if (!validation.valid) {
                displayResult(validation.message);
                return;
            }
    
            const result = calculate(num1, num2, operation);
            displayResult(result);
        }
    </script>    
</body>
</html>
