
(()=>{
    const imgDB = [
        'img/house1.jpg',
        'img/house2.jpg',
        'img/house3.jpg',
        'img/house4.jpg',
    ];

    render = () => {
        imgDB.map((value, index) => {
            if(value) {
                const imgList = document.getElementById("imgList");
                // Новый элемент
                const newImg = document.createElement('div');
                newImg.className = 'imgHouse';
                //Вставляем элемент
                newImg.innerHTML = `<img src="${value}" class="imgElem" id="${index}" alt="house">`
                imgList.appendChild(newImg);
            }
        });
        document.querySelectorAll('.imgHouse').forEach(value => {
            value.addEventListener('click', modal);
        });

    }
    const modal = value => {
        const id = Number(value.target.getAttribute('id'));
        //Включение
        const alertZone = document.getElementById('alertZone');
        alertZone.classList.remove('hide');

        //Создание Модуля
        const alertContent = document.getElementById('alertContent');
        const newModalImg = document.createElement('div');
        newModalImg.className = 'imgModalHouse';
        newModalImg.innerHTML = `<span class="modal_close" id="modal_close">X</span>
        <img src="${imgDB[id]}" class="imgModalElem" id="${id}" alt="house">`;
        alertContent.appendChild(newModalImg);


        //Отключение
        document.getElementById('modal_close')
            .addEventListener('click', () => {
                alertZone.classList.add('hide');
                location.reload();

            });

    }
    render();
})();