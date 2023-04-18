const divDOMEl = document.querySelector('.container')

/**
 * 
 * @param {string} text 
 */

const createInfoElement = (text) => {
    const infoElement = document.createElement('p')
    infoElement.setAttribute('class', 'info')
    infoElement.innerText = text

    return infoElement
}

/**
 * @param {object} data
 * @param {string} data.display_name
 * @param {string} data.list_name
 * @param {string} data.list_name_encoded
 * @param {string} data.newest_published_date
 * @param {string} data.oldest_published_date
 * @param {string} data.updated
 */



const createListCardElement = (data) => {
    const newDivElement = document.createElement('div')
    newDivElement.setAttribute('class', 'square')

    const titleElement = document.createElement('p')
    titleElement.setAttribute('class', 'title')
    titleElement.innerText = data.display_name

    
    const contentElement = document.createElement('div')
    contentElement.setAttribute('class', 'content')
    

    const oldestPublishedDate = createInfoElement(data.oldest_published_date)
    const newestPublishedDate = createInfoElement(data.newest_published_date)
    const updated = createInfoElement(data.updated)


    contentElement.append(oldestPublishedDate, newestPublishedDate, updated)
    newDivElement.append(titleElement, contentElement)
    divDOMEl.appendChild(newDivElement)

}

async function itWorks () {
    const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=F3kUhFZ3aXqKzEeop5tA7nx13adSA0jR')
    const data = await response.json()
    const booksLists = data.results
    for (const data of booksLists) {
        createListCardElement(data)
        console.log(data)
    }
}

itWorks()