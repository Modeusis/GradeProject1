function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}
/*Данный код реализует функционал появления элементов на странице, когда они находятся в области видимости пользователя (то есть когда пользователь прокручивает страницу и элементы появляются на экране).
Для этого используется объект IntersectionObserver, который позволяет отслеживать пересечение элементов с определенным контейнером-наблюдателем.
Когда элемент пересекает определенный порог, указанный в настройках (0.5 в данном случае), функция onEntry добавляет класс 'element-show', который отображает элемент на странице.
Далее происходит итерация по всем элементам, удовлетворяющим заданному селектору, и наблюдатель отслеживает их пересечение с контейнером-наблюдателем.*/