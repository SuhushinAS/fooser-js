import 'modules/flex/spacer';
import 'modules/fooser/game';
import 'modules/fooser/players';
import 'modules/fooser/score';
import 'modules/fooser/timer';
import 'modules/fooser/timer-buttons';
import 'modules/frame/link';
import 'modules/layout/header';
import 'modules/layout/layout';
import {component} from 'utils/component';
import './style.less';

component(
  '.fooser-home',
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
