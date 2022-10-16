function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("none-hover");

    for (let i = 0; i < listInner.length; i++) {
        portfolio_title = listInner[i].getElementsByClassName("portfolio-title");
        portfolio_description = listInner[i].getElementsByClassName("portfolio-description");
        if (portfolio_title[0].innerHTML.toLowerCase().indexOf(search) != -1 || portfolio_description[0].innerHTML.toLowerCase().indexOf(search) != -1) {
            listInner[i].style.display = "block"
        } else {
            listInner[i].style.display = "none"
        }
    }
}