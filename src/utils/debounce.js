export function debounce(func, wait) {
  let timeout

  return function executedFunction() {
    let later = function () {
      clearTimeout(timeout)
      func()
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
