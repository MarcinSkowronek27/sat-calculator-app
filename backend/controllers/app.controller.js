exports.fuelUsage = (req, res) => {
    try {
        const {distance, yearOfProduction, fuelUsagePer100km} = req.query;
        if(!distance || !yearOfProduction || !fuelUsagePer100km) {
            res.status(500).json({message: 'Please fill all fields'});
        } 
        else if(isNaN(distance) || isNaN(yearOfProduction) || isNaN(fuelUsagePer100km)) {
            res.status(500).json({message: 'Please provide only numbers'});
        } 
        else if (yearOfProduction.toString().length > 4 || yearOfProduction.toString().length < 4) {
          res.status(500).json({message: 'Enter a valid year of production'});
        } else {
            const result = distance*fuelUsagePer100km/100;
            res.json({message: Math.round(result* 100) / 100});
        }
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.probabilityInjectorFail = (req, res) => {
    try {
        const {vin} = req.query;
        if(!vin) {
            res.status(500).json({message: 'Please provide VIN number'});
        } else {
            const randomNumber = Math.floor(Math.random() * 101);
            res.json({message: `${randomNumber}%`});
        }
    } catch(err) {
        res.status(500).res.json(err)
    }
}