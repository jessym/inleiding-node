const paragraph = document.getElementsByTagName('p')[0];

setInterval(() => {
    paragraph.innerText = paragraph.innerText + '\nJavaScript';
}, 2000);