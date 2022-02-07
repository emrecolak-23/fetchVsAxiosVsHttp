import axios from "axios"

axios.get("https://jsonplaceholder.typicode.com/users").then((x) => {
  console.log(x.data)
});