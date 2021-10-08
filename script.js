import { loadDefaultList } from "./scripts/loading.js";
import { handleTableClick, handleButtonClick } from "./scripts/handlers.js";

loadDefaultList();

document.querySelectorAll("table")[0].addEventListener("click", handleTableClick);
document.getElementById("btn-show-archive").addEventListener("click", handleButtonClick);
document.getElementById("table-archive").style.display = "none";