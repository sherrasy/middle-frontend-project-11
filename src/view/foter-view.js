export const createFooterTemplate = () => `
  <footer class="bg-light border-top py-3 mt-auto">
    <div class="container text-center">
      <span class="text-secondary">created by </span>
      <a href="https://ru.hexlet.io/" target="_blank" class="text-decoration-underline">Hexlet</a>
    </div>
  </footer>
`;

export const renderFooter = (container, template) => {
  container.insertAdjacentHTML('beforeend', template);
};
