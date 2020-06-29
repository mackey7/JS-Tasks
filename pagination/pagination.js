// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {
    const { actualPageId, entriesOnPage } = settings
    if (actualPageId > 0 && Number.isInteger(actualPageId) && entriesOnPage > 0 && Number.isInteger(entriesOnPage) && dataEntries.length > (actualPageId * entriesOnPage)) {
        firstElToSlice = Math.round((actualPageId - 1) * entriesOnPage);
        secondElToSlice = Math.round(firstElToSlice + entriesOnPage);
        const entriesOnSelectedPage = dataEntries.slice(firstElToSlice, secondElToSlice);
        return entriesOnSelectedPage
    } else {
        const entriesOnSelectedPage = "brak rekordów"
        return entriesOnSelectedPage
    }
}


// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony
//Sprawdzanie funkcji paginateArray

const dataEntries = []
for (let i = 1; i < 1000; i++) {
    dataEntries.push(`zdanie ${i} `)
}
console.log(paginateArray(dataEntries, { actualPageId: 9, entriesOnPage: 50 }))


