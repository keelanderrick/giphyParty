
async function searchWithTerm(term) {
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    $('#imageContainer').append(`<img src='${res.data.data[0].images.original.url}'></img>`);
}

$('#searchForm').on('submit', (e) => {
    e.preventDefault();
    searchWithTerm(e.target[0].value);
})

$('#deleteBtn').on('click', () => {
    $('#imageContainer').empty();
})