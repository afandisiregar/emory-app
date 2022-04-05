import iziToast from 'izitoast'

export default {
  actions: {
    // eslint-disable-next-line
    welcome ({state}, message) {
      iziToast.info({
        title: 'Halo',
        message: message,
      })
      // Notification.notify({
      //   message: message,
      //   icon: 'fas fa-smile',
      //   horizontalAlign: 'right',
      //   verticalAlign: 'bottom',
      //   type: 'success'
      // })
    },
    // eslint-disable-next-line
    success ({state}, message) {
      iziToast.success({
        title: 'Success',
        message: message,
      })
      // Notification.notify({
      //   message: message,
      //   timeout: 10000,
      //   icon: 'fas fa-check',
      //   horizontalAlign: 'right',
      //   verticalAlign: 'bottom',
      //   type: 'success'
      // })
    },
    // eslint-disable-next-line
    addToCart ({state}, message) {
      iziToast.info({
        title: 'Order Baru',
        message: message,
      })
    },
    // eslint-disable-next-line
    info ({state}, message) {
      iziToast.info({
        title: 'Info',
        message: message,
      })
      // Notification.notify({
      //   message: message,
      //   timeout: 10000,
      //   icon: 'fas fa-info',
      //   horizontalAlign: 'right',
      //   verticalAlign: 'bottom',
      //   type: 'info'
      // })
    },
    // eslint-disable-next-line
    error ({state}, message) {
      iziToast.error({
        title: 'Error',
        message: message,
      })
      // let customMessage = Vue.component('custom-message', {
      //   render: (createElement) => {
      //     // let div = createElement('div')
      //     // console.log(serializeErrorMessage(message))
      //     // div.innerHTML = serializeErrorMessage(message).trim()
      //     // return div
      //     return createElement('div', {
      //       domProps: {
      //         innerHTML: serializeErrorMessage(message).trim()
      //       }
      //     })
      //   },
      //   // template: `<span>Some <b>bolded html text</b></span>`
      // })
      // Notification.notify({
      //   component: customMessage,
      //   // message: serializeErrorMessage(message),
      //   // message: serializeErrorMessage(message),
      //   timeout: 20000,
      //   icon: 'fas fa-exclamation',
      //   horizontalAlign: 'right',
      //   verticalAlign: 'bottom',
      //   type: 'danger'
      // })
    },
    // eslint-disable-next-line
    clear () {
      iziToast.destroy()
      // Notification.notifications().clear()
    }
  }
}