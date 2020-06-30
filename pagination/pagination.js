// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {

    let errorMesage = ""

    if ((Array.isArray(dataEntries) && typeof settings === "object")) { //sprawdzanie typu danych wejściowych
        const { actualPageId, entriesOnPage } = settings
        firstElToSlice = Math.round((actualPageId - 1) * entriesOnPage);
        secondElToSlice = Math.round(firstElToSlice + entriesOnPage);

        if (actualPageId > 0 && entriesOnPage > 0 && dataEntries.length > 0) { // sprawdzanie czy podane wartości są większe od zera
            firstElToSlice = Math.round((actualPageId - 1) * entriesOnPage);
            secondElToSlice = Math.round(firstElToSlice + entriesOnPage);
            const entriesOnSelectedPage = dataEntries.slice(firstElToSlice, secondElToSlice);
            if (dataEntries.length > (actualPageId * entriesOnPage)) { //sprawdzanie czy podana strona istnieje
                return entriesOnSelectedPage
            } else {
                return errorMesage = "nieprawidłowa strona";
            }
        } else {
            return errorMesage = "Wartość wejściowa jest  mniejsza bądź równa zero";
        }
    } else {
        return errorMesage = "błędny typ danych";
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


