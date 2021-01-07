function sendmail() {
    var link = "mailto:tamtag2002@gmail.com"
    + "?cc="
    + "&subject=" + escape("FEEDBACK")
    + "&body=" + escape(document.getElementById('feed').value);
window.location.href = link;
}