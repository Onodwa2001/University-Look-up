let country = document.getElementById('country-input');
let tableData = document.getElementById('table-data');
let res = document.getElementById('results');


let render_data = (data) => {
    tableData.innerHTML = ''; 
    res.innerHTML = 'Results Found:';

    res.innerHTML += ' ' + data.length;

    for (let i = 0; i < data.length; i++) {
        if (data.length == 0) {
            res.innerHTML = 'No Results Found:';
        } else {
            tableData.innerHTML += `<tr>
                <th scope="row">${i + 1}</th>
                <td>${data[i].name}</td>
                <td>${data[i].alpha_two_code}</td>
                <td>${data[i].web_pages}</td>
            </tr>`;
        }
    }

}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    res.innerHTML = 'Getting data...';
    if(country.value == 'US' || country.value == 'USA' || country.value == 'United States of America') {
        country.value = 'United States';
    } else if (country.value == 'England') {
        country.value = 'United Kingdom';
    } else if (country.value == 'Russia') {
        country.value = 'Russian Federation';
    }

    let endpoint = `http://universities.hipolabs.com/search?country=${country.value}`;

    fetch(endpoint, {
        method: 'GET'
    })
        .then((result) => result.json())
        .then((data) => {
            render_data(data);

        })
        .catch((err) => console.log(err));
});



// fetch('http://universities.hipolabs.com/search', {
//     method: 'GET'
// })
//     .then((result) => result.json())
//     .then((data) => {
        

//         console.log(countries);
//         console.log(unique);
//     })
//     .catch((err) => console.log(err));


// {/* <div class="card" style="width: 18rem;">
//     <div class="card-body">
//         <h5 class="card-title">Browse Countries</h5>
//         <p class="card-text">There are over 200 contries you can search for. Click here to see them.</p>
//         <a href="countries.html" class="btn btn-primary">Browse</a>
//     </div>
// </div> */}



// let countryExists = (data) => {
//     let exist = false;

//     data.forEach((element) => {
//         if (element)
//     });
// }