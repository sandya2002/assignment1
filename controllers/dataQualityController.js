exports.cleanData = (req, res) => {
    const { functionName, value, range } = req.body;
    
    let result;
    switch (functionName.toUpperCase()) {
        case "TRIM":
            result = value.trim();
            break;
        case "UPPER":
            result = value.toUpperCase();
            break;
        case "LOWER":
            result = value.toLowerCase();
            break;
        case "REMOVE_DUPLICATES":
            result = [...new Set(range)];
            break;
        case "FIND_AND_REPLACE":
            const { findText, replaceText } = req.body;
            result = range.map(cell => cell.replace(new RegExp(findText, "g"), replaceText));
            break;
        default:
            return res.status(400).json({ error: "Unsupported function" });
    }

    res.json({ result });
};
