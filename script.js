
document.getElementById("convertBtn").addEventListener("click", function () {
    const celsiusInput = document.getElementById("celsius");
    const resultParagraph = document.getElementById("result");

    if (celsiusInput.value === "") {
        resultParagraph.textContent = "Please enter a value.";
    } else {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        resultParagraph.textContent = `${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F.`;
    }
});
