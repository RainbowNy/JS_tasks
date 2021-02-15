function showDropdownMenuWithImages(event) {
    if (document.querySelector('.dropdown')) document.querySelector('.dropdown').remove();

    let menu = document.createElement('div');
    setupMenuUsingCellEvent(menu, event);

    document.body.append(menu);
}

function setupMenuUsingCellEvent(menu, cellEvent) {
    let image;

    menu.className = 'dropdown';
    menu.style.left = cellEvent.clientX + 'px';
    menu.style.top = cellEvent.clientY + 'px';
    menu.onmouseover = function (event) {
        let image = event.target.closest('img');
        cellEvent.target.style.backgroundImage = `url(${image.src})`;
    }
    menu.onmouseout = function () {
        if(cellEvent.target.currentImage === null){
            cellEvent.target.style.backgroundImage = '';
        } else {
            cellEvent.target.style.backgroundImage = `url(${cellEvent.target.currentImage})`;
        }
    }
    menu.onclick = function (event) {
        cellEvent.target.currentImage = event.target.closest('img').src;
        menu.remove();
    }

    for (let i = 1; i <= 5; i++) {
        image = document.createElement('img');
        image.className = 'image';
        image.src = `images/picture${i}.jpg`;

        menu.append(image)
    }

    document.addEventListener('mousemove', function menuRemove(event) {
        if(!menu.contains(event.target.closest('img'))){
            let timerId = setTimeout(function (){
                menu.remove();
                document.removeEventListener('mousemove', menuRemove);
            }, 1000);

            document.addEventListener('mousemove', function cancelMenuRemove(event){
                if(menu.contains(event.target.closest('img'))){
                    clearTimeout(timerId);
                    document.removeEventListener('mousemove', cancelMenuRemove);
                }
            });
        }
    });
}