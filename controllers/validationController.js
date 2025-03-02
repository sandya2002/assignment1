exports.validateData = (req, res) => {
    const { value, dataType } = req.body;

    let isValid = false;
    switch (dataType) {
        case "number":
            isValid = !isNaN(value);
            break;
        case "text":
            isValid = typeof value === "string";
            break;
        case "date":
            isValid = !isNaN(Date.parse(value));
            break;
        default:
            return res.status(400).json({ error: "Unsupported data type" });
    }

    res.json({ isValid });
};
