import {component} from 'utils/component';
import './style.less';

component(
  '.fooser-home',
  class {
    /**
     * Конструктор класса для примера.
     * @param {*} exampleDefault Элемент.
     * @return {void}
     */
    constructor(exampleDefault) {
      this.exampleDefault = exampleDefault;
    }
  }
);
