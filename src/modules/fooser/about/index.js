import 'modules/frame/link';
import 'modules/layout/header';
import 'modules/layout/layout';
import {component} from 'utils/component';
import './style.less';

component(
  '.fooser-about',
  class {
    /**
     * Конструктор класса для примера.
     * @param {*} root Элемент.
     * @return {void}
     */
    constructor(root) {
      this.root = root;
    }
  }
);
