const handleToStorage = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
const data = {name,email}
  localStorage.setItem(name, JSON.stringify(data));
//   localStorage.setItem("email", email);
};
const storedItem = localStorage.getItem("Wyatt Mejia");
console.log(JSON.parse(storedItem))
const handleClear=()=>{
    localStorage.clear()
}
