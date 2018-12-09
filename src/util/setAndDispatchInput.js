/**
 * Set the value of an HTMLInputElement and dispatch the 'input' event
 *
 * @param {HTMLInputElement} element
 * @param {string} value
 */
const setAndDispatchInput = (element, value) => {
  const inputEvent = new window.Event('input', {bubbles: true})
  const nativeInputValueSetter = Object
    .getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
    .set

  nativeInputValueSetter.call(element, value)
  element.dispatchEvent(inputEvent)
}

export default setAndDispatchInput
