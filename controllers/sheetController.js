const Sheet = require('../models/Sheet');  
// const saveSheet = async (req, res) => {
//   try {
//     const { name, data } = req.body;
//     const newSheet = await Sheet.create({ name, data });
//     res.status(200).json({ message: 'Sheet saved successfully!', sheetId: newSheet.id });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving sheet', error });
//   }
// };

// module.exports = { saveSheet };


// const calculateFunctions = (req, res) => {
//   const { data, functionType, range } = req.body;
//   let result = 0;

//   // Extract the range (e.g., "A1:B3") to get the relevant cells
//   // For simplicity, let's assume range is a 2D array (like a portion of the sheet).

//   switch (functionType) {
//     case 'SUM':
//       result = data.flat().reduce((acc, val) => acc + val, 0);
//       break;
//     case 'AVERAGE':
//       const sum = data.flat().reduce((acc, val) => acc + val, 0);
//       result = sum / data.flat().length;
//       break;
//     case 'MIN':
//       result = Math.min(...data.flat());
//       break;
//     case 'MAX':
//       result = Math.max(...data.flat());
//       break;
//     default:
//       return res.status(400).json({ message: 'Invalid function type' });
//   }

//   return res.json({ result });
// };

// module.exports = { calculateFunctions };

const math = require("mathjs");

const calculateFunctions = (req, res) => {
  try {
    const { functionName, values } = req.body;

    if (!values || !Array.isArray(values)) {
      return res.status(400).json({ error: "Invalid input values" });
    }

    let result;
    switch (functionName.toUpperCase()) {
      case "SUM":
        result = math.sum(values);
        break;
      case "AVERAGE":
        result = math.mean(values);
        break;
      case "MAX":
        result = math.max(values);
        break;
      case "MIN":
        result = math.min(values);
        break;
      case "COUNT":
        result = values.length;
        break;
      default:
        return res.status(400).json({ error: "Invalid function name" });
    }

    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports.calculateFunctions = calculateFunctions;