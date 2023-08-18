

const animate = (e) => {
    const imageOne = $('#imageOne');
    const imageTwo = $('#imageTwo');
    const main = $('#mainHead')
    const second = $('#secondHead')
    const h2 = $('h2')
    const footer = $('#footer')

    $(imageOne).hide();
    $(imageTwo).hide();
    $(main).hide(); // sembunyikan elemen main
    $(second).hide()
    $(h2).hide()
    // $(footer).hide()

    setTimeout(() => {
        $(imageOne).slideDown(1000);
        $(main).fadeIn(1100); // munculkan elemen main
        $(h2).fadeIn(1200)
    }, 300);
    setTimeout(() => {
        $(second).show(1300)
        $(imageTwo).animate({width:'toggle'}, 2000)
        $(footer).show(1500)
    }, 1500);
}

window.addEventListener('load', () => {
animate()
})    

document.getElementById("dateInput").addEventListener("focus", function() {
    this.type = "text";
});

document.getElementById("dateInput").addEventListener("blur", function() {
    this.type = "date";
});

