var container = document.createElement("div");
container.setAttribute("class", "container");
var h1 = document.createElement("h1");
h1.innerHTML="Countries Detail"
h1.style="text-align:center; margin-top:1rem; font-size:3rem;"
var row = document.createElement("div");
row.classList.add("row", "m-1", "p-1");
container.append(h1,row);

var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json()).then((value) => foo(value));

function foo(value) {
  console.log(value)
  for (let i=0;i<value.length;i++) {
    row.innerHTML += `
        <div class="col-md-3">
        <div class="card mt-4 p-4" style="width: 18rem; box-shadow:1px 1px 10px;">
        <img src="${value[i].flags.svg}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Name: ${value[i].name}</p>
          <p class="card-text">Capital: ${value[i].capital}</p>
          <p class="card-text">Region: ${value[i].region}</p>
          <p class="card-text">Lat: ${value[i].latlng[0]} =>Lng: ${value[i].latlng[1]}</p>
          <p class="card-text">Country Code: ${value[i].alpha3Code}</p>
        </div>
      </div>
      </div>`;
    document.body.append(container);
  }
}
