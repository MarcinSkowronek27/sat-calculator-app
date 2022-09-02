# Instruction to use the app.
1. Use npm install and then npm start
2. Use e.g. Postman to check backend responses.
3. 
  - For URL:
    http://localhost:8000/api/calculateDieselUsageForDistance
    use two parameters: distance, yearOfProduction
  - For URL:
    http://localhost:8000/api/probabilityOfUnitInjectorFail
    use one parameter: vin
Examples of URL:
http://localhost:8000/api/calculateDieselUsageForDistance?distance=500&yearOfProduction=2010&fuelUsagePer100km=7
http://localhost:8000/api/probabilityOfUnitInjectorFail?vin=HCD15664896