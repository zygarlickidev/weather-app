const viewElems = {};

const getDOMElem = id => {
    return document.getElementById(id);
}

const connectHTMLElems = () => {
    viewElems.mainContainer = getDOMElem("mainContainer");
    viewElems.weatherSearchView = getDOMElem("weatherSearchView");
    viewElems.weatherForecastView = getDOMElem("weatherForecastView");

    viewElems.searchInput = getDOMElem("weatherCity");
    viewElems.searchButton = getDOMElem("searchButton");

    viewElems.weatherCity = getDOMElem("weatherCity");
    viewElems.weatherIcon = getDOMElem("weatherIcon");

    viewElems.weatherCurrentTemp = getDOMElem("weatherCurrentTemp");
    viewElems.weatherMaxTemp = getDOMElem("weatherMaxTemp");
    viewElems.weatherMinTemp = getDOMElem("weatherMinTemp");

    viewElems.returnToSearchBtn = getDOMElem("returnToSearchBtn");

}

const setupLisners = () => {
    viewElems.searchInput.addEventListener("keydown", onEnterSubmit);
    viewElems.searchButton.addEventListener("click", onClickSubmit);

}

const initializeApp = () => {
    connectHTMLElems();
    setupLisners();
}

const onClickSubmit = () => {};
const onEnterSubmit = () => {};

document.addEventListener("DOMContentLoaded", initializeApp)
