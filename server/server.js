const app = require("./app");

// Sets the PORT for our app. If no env has been set, we use 5005
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
