const imgs = document.getElementsByTagName('img');
const headh1 = document.getElementsByTagName('h1');
foralt = headh1[0].innerText;
altnum = 1;
for (const img of imgs){
    const altimg = img.alt;
    if (altimg === ''){
        img.alt='изображение по теме ' + foralt + '_' + altnum;
        altnum++;
    }
}
