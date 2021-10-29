function displayResults (results, store) {
  const searchResults = document.getElementById('results')
  if (results.length) {
    let resultList = ''
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref]
      resultList += '<div class="column is-half"><div class="columns is-mobile  is-vcentered"><div class="column is-5"><figure class="image is-square"><a href="' + item.url + '"><img src="' + item.image + '" alt="' + item.title + '"></a></figure></div><div class="column content"><h3 class="mb-1"><a class="click" href="' + item.url + '">' + item.title + '</a><span class="icon has-text-primary"><i class="fas fa-chevron-right"></i></span></h3><p>' + item.content.substring(0, 75) + '…</p></div></div></div>'
    }
    searchResults.innerHTML = resultList
  } else {
    searchResults.innerHTML = 'Nessun risultato'
  }
}

// Get the query parameter(s)
const params = new URLSearchParams(window.location.search)
const query = params.get('query')

// Perform a search if there is a query
if (query) {
  // Retain the search input in the form when displaying results
  document.getElementById('search-input').setAttribute('value', query)

  const idx = lunr(function () {
    this.ref('id')
    this.field('title', {
      boost: 15
    })
    this.field('tags')
    this.field('content', {
      boost: 10
    })

    for (const key in window.store) {
      this.add({
        id: key,
        title: window.store[key].title,
        tags: window.store[key].category,
        content: window.store[key].content
      })
    }
  })

  // Perform the search
  const results = idx.search(query)
  // Update the list with results
  displayResults(results, window.store)
}

