let _toastr = null

if (import.meta.client) {
  import('toastr/build/toastr.min.css').catch(() => {})
  import('toastr').then(m => {
    _toastr = m.default || m
  }).catch(() => {})
}

export const toastr = {
  success: (message, title, options) => {
    if (import.meta.client) {
      if (_toastr) _toastr.success(message, title, options)
      else import('toastr').then(m => (m.default || m).success(message, title, options))
    }
  },
  info: (message, title, options) => {
    if (import.meta.client) {
      if (_toastr) _toastr.info(message, title, options)
      else import('toastr').then(m => (m.default || m).info(message, title, options))
    }
  },
  warning: (message, title, options) => {
    if (import.meta.client) {
      if (_toastr) _toastr.warning(message, title, options)
      else import('toastr').then(m => (m.default || m).warning(message, title, options))
    }
  },
  error: (message, title, options) => {
    if (import.meta.client) {
      if (_toastr) _toastr.error(message, title, options)
      else import('toastr').then(m => (m.default || m).error(message, title, options))
    }
  }
}

export default toastr
