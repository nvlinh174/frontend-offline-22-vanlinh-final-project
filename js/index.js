const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2';

const elMainMenu = document.getElementById('mainMenu');

axios.get(`${BASE_URL}/categories_news`).then((res) => {
  const categories = res.data.data;

  let html = '';
  let htmlOther = '';
  categories.forEach((item, index) => {
    if (index < 3) {
      html += /* html */ `
      <li class="menu-item">
        <a href="#" class="echo-dropdown-main-element">${item.name}</a>
      </li>`;
    } else {
      htmlOther += /* html */ `
      <li class="nav-item"><a href="#">${item.name}</a></li>`;
    }
  });

  elMainMenu.innerHTML =
    html +
    /* html */ `
    <li class="menu-item echo-has-dropdown">
      <a href="#" class="echo-dropdown-main-element">Danh mục khác</a>
      <ul class="echo-submenu list-unstyled menu-pages">${htmlOther}</ul>
    </li>`;
});
