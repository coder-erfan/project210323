import "./style.scss";
import { sortList } from "./utils/sort";

const input = document.querySelector("input");
const span = document.querySelector("span");
const arr = [];

span.addEventListener("click", () => {
  arr.push(+input.value);
  const sortArray = sortList(arr);

  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";
  sortArray.forEach((element, index) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");
    th.textContent = index + 1;
    td.textContent = element;
    console.log(tr);
    tr.append(th, td);
    tbody.append(tr);
  });
  console.log(sortArray);
  input.value = "";
});
