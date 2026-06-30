import './style.css';
import { createFooterTemplate, renderFooter } from './view/foter-view.js';
import { createRSSFormTemplate, renderRSSForm } from './view/rss-form-view.js';

const app = () => {
  const container = document.getElementById('app');

  renderRSSForm(container, createRSSFormTemplate());

  renderFooter(container, createFooterTemplate());
};

app();
