var express = require("express");
var router = express.Router();

router.get("/", function (request, response, next) {
  const data = (
    {
      name: "Mehrdad",
      lastname: "Khojastefar",
      birth: "1380/03/21",
    }
  );

  response.send(data);
});

module.exports = router;
