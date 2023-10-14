const auth = require("../authentication");
module.exports = (app) => {
    app.use(cors({
        origin:"http://localhost:7000",
        method:"GET"
    }
    ));
}