import Modal from './src/modal'

Modal.install = function (Vue) {
  Vue.components(Modal.name, Modal)
}

export default Modal
