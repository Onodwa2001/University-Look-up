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



// MUSIC API

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8bd90c4cffmsh2788964981ec641p113417jsn3d0aff3880f5',
// 		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
// 	}
// };

// fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));