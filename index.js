'use strict';

function getDogImages(numberOfDogs = 3) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again Later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results').html(`<h2>Look!</h2>`);

    for (let dog of responseJson.message) {
        $('.results').append(`<img src="${dog}" class="results-img" width="200" height="auto">`);
    }
        $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let numOfDogs = $('input[name="numOfDogs"]').val();
        getDogImages(numOfDogs);
    });
}

$(function() {
    console.log('Waiting for submit.')
    watchForm();
});