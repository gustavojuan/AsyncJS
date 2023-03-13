import fetch from "node-fetch";
import { json } from "stream/consumers";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
}

const data = {
  title: "El nuevo",
  price: 132.46,
  description: "A descripasdastion",
  categoryId: 3,
  images: ["https://placeimg.com/640/480/any"],
};


postData("https://api.escuelajs.co/api/v1/products",data)
.then(response => response.json())
.then(data => console.log(data))
.catch(err=> console.log(err));
