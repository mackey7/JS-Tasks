// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {
    const { actualPageIdx, entriesOnPage } = settings
    const firstSelectedElement = (actualPageIdx - 1) * entriesOnPage;
    const secondSelectedElement = firstSelectedElement + entriesOnPage;
    const entriesOnSelectedPage = dataEntries.slice(firstSelectedElement, secondSelectedElement);
    return entriesOnSelectedPage

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
console.log(paginateArray(dataEntries, { actualPageIdx: 9, entriesOnPage: 50 }))


