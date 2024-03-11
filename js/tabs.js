const tabs = document.querySelectorAll('.categories__tab');
const tabsContent = document.querySelectorAll('.categories__content');

tabs.forEach((item, index) => {
    item.onclick = function (){
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tabsContent.forEach(content => {
            content.classList.remove('active');
        })
        item.classList.add('active');
        tabsContent[index].classList.add('active');
    }

})