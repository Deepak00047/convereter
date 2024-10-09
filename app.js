const createConverter = (fromUnit, toUnit, conversionFormula) => {
    return (values) => {
      if (Array.isArray(values)) {
        return values.map(value => conversionFormula(value));
      } else {
        return conversionFormula(values);
      }
    };
  };
 
 
  const lbsToKg = createConverter('lbs', 'kg', (value) => value * 0.453592);
  const kgToLbs = createConverter('kg', 'lbs', (value) => value / 0.453592);
  const milesToKm = createConverter('miles', 'km', (value) => value * 1.60934);
  const kmToMiles = createConverter('km', 'miles', (value) => value / 1.60934);
  const celsiusToFahrenheit = createConverter('C', 'F', (value) => (value * 9/5) + 32);
  const fahrenheitToCelsius = createConverter('F', 'C', (value) => (value - 32) * 5/9);
 
  
  function convertWeight() {
    const input = document.getElementById("weightInput").value;
    const values = input.split(',').map(Number);
    const result = lbsToKg(values);
    document.getElementById("weightResult").innerHTML = `Converted to Kilograms: ${result.join(', ')}`;
  }
 
 
  function convertDistance() {
    const input = document.getElementById("distanceInput").value;
    const values = input.split(',').map(Number);
    const result = milesToKm(values);
    document.getElementById("distanceResult").innerHTML = `Converted to Kilometers: ${result.join(', ')}`;
  }
 
  
  function convertTemperature() {
    const input = document.getElementById("temperatureInput").value;
    const values = input.split(',').map(Number);
    const result = celsiusToFahrenheit(values);
    document.getElementById("temperatureResult").innerHTML = `Converted to Fahrenheit: ${result.join(', ')}`;
  }
 
  
  document.getElementById("weightTab").addEventListener("click", () => {
    document.getElementById("weight").style.display = "block";
    document.getElementById("distance").style.display = "none";
    document.getElementById("temperature").style.display = "none";
  });
 
  document.getElementById("distanceTab").addEventListener("click", () => {
    document.getElementById("distance").style.display = "block";
    document.getElementById("weight").style.display = "none";
    document.getElementById("temperature").style.display = "none";
  });
 
  document.getElementById("temperatureTab").addEventListener("click", () => {
    document.getElementById("temperature").style.display = "block";
    document.getElementById("weight").style.display = "none";
    document.getElementById("distance").style.display = "none";
  });
 
 
