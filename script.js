// FAQ Toggle Function
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Search functionality for filtering FAQ content
function searchFAQ() {
    var input, filter, acc, panel, txtValue;
    input = document.getElementById('faqSearch');
    filter = input.value.toLowerCase();
    acc = document.getElementsByClassName('accordion');

    for (var i = 0; i < acc.length; i++) {
        panel = acc[i].nextElementSibling;
        txtValue = acc[i].textContent || acc[i].innerText;

        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            acc[i].style.display = "";
            panel.style.display = "block"; // show the panel
        } else {
            acc[i].style.display = "none";
            panel.style.display = "none"; // hide the panel
        }
    }
}