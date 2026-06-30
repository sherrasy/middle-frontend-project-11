export const createRSSFormTemplate = () => `
  <div class="bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <h1 class="display-3 mb-2">RSS агрегатор</h1>
          <p class="lead mb-3">Начните читать RSS сегодня! Это легко, это красиво.</p>
          <form id="rss-form">
            <div class="row g-3 align-items-stretch">
              <div class="col">
                <div class="form-floating h-100">
                  <input
                    id="url-input"
                    class="form-control h-100"
                    type="text"
                    placeholder="https://lorem-rss.hexlet.app/feed"
                    aria-label="url"
                  >
                  <label for="url-input">Ссылка RSS</label>
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-outline-light h-100 px-5">Добавить</button>
              </div>
            </div>
            <div class="form-text text-secondary mt-2">
              Пример: https://lorem-rss.hexlet.app/feed
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
`;

export const renderRSSForm = (container, template) => {
  container.innerHTML = template;
};

export const getRSSFormElements = () => ({
  form: document.getElementById('rss-form'),
  input: document.getElementById('url-input'),
});
