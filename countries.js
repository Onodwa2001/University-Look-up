let heading = document.getElementById('see-all-heading');
let countryCard = document.getElementById('countries');
let countries = [];

let render_data = (data) => {
    data.forEach(element => {
        countries.push(element.country);
    });

    let unique = [...new Set(countries)];

    unique.forEach(element => {
        countryCard.innerHTML += 
            `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element}</h5>
                </div>
            </div>`;
    });
}

let endpoint = `http://universities.hipolabs.com/search`;

fetch(endpoint, {
    method: 'GET'
})
    .then((result) => result.json())
    .then((data) => {
        render_data(data);
        document.getElementById('spinner').style.display = 'none';
        heading.style.display = 'block';
    })
    .catch((err) => console.log(err));