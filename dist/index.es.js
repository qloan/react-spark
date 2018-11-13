import PropTypes from 'prop-types';
import React from 'react';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/* global document */
const getElements = (selector, functionToCallOnEachItem) => {
  const elements = document.querySelectorAll(selector);
  if (elements.length > 0) {
    elements.forEach((element) => {
      functionToCallOnEachItem(element);
    });
  }
};

/* global window */

const getSpinnerClasses = (options) => {
  const classes = ['sprk-c-Spinner', 'sprk-c-Spinner--circle'];

  if (options.size === 'large') {
    classes.push('sprk-c-Spinner--large');
  }

  if (options.lightness === 'dark') {
    classes.push('sprk-c-Spinner--dark');
  }

  return classes.join(' ');
};

const setSpinning = (element, options) => {
  const el = element;
  const width = element.offsetWidth;
  el.setAttribute('data-sprk-spinner-text', el.textContent);
  el.innerHTML = `<div class="${getSpinnerClasses(options)}"></div>`;
  el.setAttribute('data-sprk-has-spinner', 'true');
  el.setAttribute('style', `width: ${width}px`);
};

const cancelSpinning = (element) => {
  const el = element;
  el.innerHTML = '';
  el.textContent = el.getAttribute('data-sprk-spinner-text') || '';
  el.removeAttribute('data-sprk-has-spinner');
  el.removeAttribute('style');
};

window.addEventListener('sprk-cancel-spinners', () => {
  getElements('[data-sprk-has-spinner="true"]', (element) => {
    cancelSpinning(element);
  });
});

var BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
};

/**
 * @param {string} prefix - 'base', 'object', 'component', 'utility', 'is', or 'has'
 * @param {string} block
 * @param {?string} [element]
 * @param {?string} [modifier]
 * @param {?string} [breakpoint]
 * @return {string}
 */
var sparkClassName = function sparkClassName(prefix, block) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var modifier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var breakpoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  var NAMESPACE = 'sprk';
  var PREFIXES = {
    base: 'b',
    object: 'o',
    component: 'c',
    utility: 'u',
    is: 'is',
    has: 'has'
  };

  var className = NAMESPACE + '-' + PREFIXES[prefix] + '-' + block;

  if (element) className += '__' + element;
  if (modifier) className += '--' + modifier;
  if (breakpoint) className += '@' + breakpoint;

  return className;
};

/**
 * @param {string} block
 * @param {?string} [element]
 * @param {?string} [modifier]
 * @param {?string} [breakpoint]
 * @return {string}
 */
var sparkBaseClassName = function sparkBaseClassName(block) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var breakpoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return sparkClassName('base', block, element, modifier, breakpoint);
};

/**
 * @param {string} block
 * @param {?string} [element]
 * @param {?string} [modifier]
 * @param {?string} [breakpoint]
 * @return {string}
 */
var sparkComponentClassName = function sparkComponentClassName(block) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var breakpoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return sparkClassName('component', block, element, modifier, breakpoint);
};

/**
 * @param {number} width - Number between 5 and 100, in increments of 5
 * @return {string}
 */
var sparkWidthClassName = function sparkWidthClassName(width) {
  return "sprk-u-Width-" + width;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Button = function (_React$Component) {
  inherits(Button, _React$Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.ref = React.createRef(), _this.componentDidMount = function () {
      if (_this.props.spinner) {
        setSpinning(_this.ref.current, {});
      }
    }, _this.componentDidUpdate = function () {
      if (_this.props.spinner) {
        setSpinning(_this.ref.current, {});
      } else {
        cancelSpinning(_this.ref.current, {});
      }
    }, _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          fullWidthAtSmallViewport = _this$props.fullWidthAtSmallViewport,
          spinner = _this$props.spinner,
          rest = objectWithoutProperties(_this$props, ['children', 'disabled', 'fullWidthAtSmallViewport', 'spinner']);


      return React.createElement(
        'button',
        _extends({
          className: _this.className,
          disabled: disabled,
          ref: _this.ref,
          variant: 'secondary'
        }, rest),
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Button, [{
    key: 'className',
    get: function get$$1() {
      var _classNames;

      var _props = this.props,
          disabled = _props.disabled,
          fullWidthAtSmallViewport = _props.fullWidthAtSmallViewport,
          variant = _props.variant;


      var baseClass = sparkComponentClassName('Button');
      var variantClass = sparkComponentClassName('Button', null, variant);
      var disabledClass = sparkClassName('is', 'Disabled');
      var fullWidthAtSmallViewportClass = sparkComponentClassName('Button', null, 'full', 'sm');

      return classnames(baseClass, (_classNames = {}, defineProperty(_classNames, variantClass, variant !== BUTTON_VARIANTS.PRIMARY), defineProperty(_classNames, disabledClass, disabled), defineProperty(_classNames, fullWidthAtSmallViewportClass, fullWidthAtSmallViewport), _classNames));
    }
  }]);
  return Button;
}(React.Component);

Button.defaultProps = {
  disabled: false,
  fullWidthAtSmallViewport: false,
  spinner: false,
  variant: 'primary'
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  fullWidthAtSmallViewport: PropTypes.bool,
  spinner: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS))
};

var SelectionContainer = function (_React$Component) {
  inherits(SelectionContainer, _React$Component);

  function SelectionContainer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SelectionContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SelectionContainer.__proto__ || Object.getPrototypeOf(SelectionContainer)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      return React.createElement(
        'fieldset',
        { className: sparkBaseClassName('SelectionContainer') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return SelectionContainer;
}(React.Component);

SelectionContainer.defaultProps = {
  children: null
};
SelectionContainer.propTypes = {
  children: PropTypes.node
};

var Checkbox = function (_React$Component) {
  inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          containerId = _this$props.containerId,
          disabled = _this$props.disabled,
          id = _this$props.id,
          label = _this$props.label;


      return React.createElement(
        SelectionContainer,
        null,
        React.createElement('input', {
          'aria-describedby': containerId + '--error-container',
          'data-id': id,
          disabled: disabled,
          id: id,
          type: 'checkbox'
        }),
        React.createElement(
          'label',
          {
            className: _this.labelClassName,
            htmlFor: id
          },
          label
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Checkbox, [{
    key: 'labelClassName',
    get: function get$$1() {
      return [sparkBaseClassName('Label'), sparkBaseClassName('Label', null, 'inline')].join(' ');
    }
  }]);
  return Checkbox;
}(React.Component);

Checkbox.defaultProps = {
  disabled: false
};
Checkbox.propTypes = {
  containerId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

var ErrorText = function (_React$Component) {
  inherits(ErrorText, _React$Component);

  function ErrorText() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ErrorText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ErrorText.__proto__ || Object.getPrototypeOf(ErrorText)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      return React.createElement(
        'div',
        { className: sparkBaseClassName('ErrorText') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return ErrorText;
}(React.Component);

ErrorText.defaultProps = {
  children: null
};
ErrorText.propTypes = {
  children: PropTypes.node
};

var Fieldset = function (_React$Component) {
  inherits(Fieldset, _React$Component);

  function Fieldset() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Fieldset);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Fieldset.__proto__ || Object.getPrototypeOf(Fieldset)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      return React.createElement(
        'fieldset',
        { className: sparkBaseClassName('Fieldset') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return Fieldset;
}(React.Component);

Fieldset.defaultProps = {
  children: null
};
Fieldset.propTypes = {
  children: PropTypes.node
};

var Legend = function (_React$Component) {
  inherits(Legend, _React$Component);

  function Legend() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Legend);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Legend.__proto__ || Object.getPrototypeOf(Legend)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      return React.createElement(
        'fieldset',
        { className: sparkBaseClassName('Legend') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return Legend;
}(React.Component);

Legend.defaultProps = {
  children: null
};
Legend.propTypes = {
  children: PropTypes.node
};

var Label = function (_React$Component) {
  inherits(Label, _React$Component);

  function Label() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Label);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Label.__proto__ || Object.getPrototypeOf(Label)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      return React.createElement(
        'fieldset',
        { className: sparkBaseClassName('Label') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return Label;
}(React.Component);

Label.defaultProps = {
  children: null
};
Label.propTypes = {
  children: PropTypes.node
};

var InputContainer = function (_React$Component) {
  inherits(InputContainer, _React$Component);

  function InputContainer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, InputContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InputContainer.__proto__ || Object.getPrototypeOf(InputContainer)).call.apply(_ref, [this].concat(args))), _this), _this.renderErrorContent = function () {
      var error = _this.props.error;


      if (!error) return null;

      return (
        // TODO: Icon SVG
        React.createElement(
          ErrorText,
          null,
          error
        )
      );
    }, _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          id = _this$props.id,
          label = _this$props.label;

      var className = sparkClassName('base', 'InputContainer');

      return React.createElement(
        'div',
        { className: sparkClassName('utility', 'JavaScript') },
        React.createElement(
          'div',
          { className: className },
          children,
          React.createElement('div', {
            className: sparkClassName('base', 'InputContainer', 'input-border')
          }),
          React.createElement(
            'label',
            { htmlFor: id, className: sparkClassName('base', 'Label') },
            label
          ),
          React.createElement(
            'div',
            {
              className: sparkClassName('base', 'ErrorContainer'),
              id: id + '--error-container'
            },
            _this.renderErrorContent()
          )
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return InputContainer;
}(React.Component);

InputContainer.defaultProps = {
  children: null
};
InputContainer.propTypes = {
  children: PropTypes.node
};

var CheckboxGroup = function (_React$Component) {
  inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, CheckboxGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call.apply(_ref, [this].concat(args))), _this), _this.renderErrorContent = function () {
      var error = _this.props.error;


      if (!error) return null;

      return (
        // TODO: Icon SVG
        React.createElement(
          ErrorText,
          null,
          error
        )
      );
    }, _this.render = function () {
      var _this$props = _this.props,
          checkboxes = _this$props.checkboxes,
          disabled = _this$props.disabled,
          id = _this$props.id,
          label = _this$props.label;


      return React.createElement(
        InputContainer,
        null,
        React.createElement(
          Fieldset,
          null,
          React.createElement(
            Label,
            null,
            React.createElement(
              Legend,
              null,
              label
            )
          ),
          React.createElement(
            SelectionContainer,
            null,
            checkboxes.map(function (checkbox) {
              return React.createElement(Checkbox, {
                containerId: id,
                disabled: disabled,
                id: checkbox.id,
                key: checkbox.id,
                label: checkbox.label
              });
            })
          )
        ),
        React.createElement(
          'div',
          {
            className: sparkBaseClassName('ErrorContainer'),
            id: id + '--error-container'
          },
          _this.renderErrorContent()
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(CheckboxGroup, [{
    key: 'labelClassName',
    get: function get$$1() {
      return [sparkBaseClassName('Label'), sparkBaseClassName('Label', null, 'inline')].join(' ');
    }
  }]);
  return CheckboxGroup;
}(React.Component);

CheckboxGroup.defaultProps = {
  disabled: false,
  error: null
};
CheckboxGroup.propTypes = {
  checkboxes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

var Item = function (_React$Component) {
  inherits(Item, _React$Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          itemKey = _this$props.itemKey,
          itemValue = _this$props.itemValue;


      return React.createElement(
        'div',
        { className: _this.className },
        React.createElement(
          'dt',
          { className: _this.keyClassName },
          itemKey
        ),
        React.createElement(
          'dd',
          { className: _this.valueClassName },
          itemValue
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Item, [{
    key: 'className',
    get: function get$$1() {
      return sparkClassName('component', 'Dictionary', 'keyvaluepair');
    }
  }, {
    key: 'keyClassName',
    get: function get$$1() {
      return [sparkClassName('component', 'Dictionary', 'key'), sparkClassName('base', 'Label'), sparkClassName('base', 'Label', null, 'no-input')].join(' ');
    }
  }, {
    key: 'valueClassName',
    get: function get$$1() {
      return sparkClassName('component', 'Dictionary', 'value');
    }
  }]);
  return Item;
}(React.Component);

Item.propTypes = {
  itemKey: PropTypes.node.isRequired,
  itemValue: PropTypes.node.isRequired
};

var DICTIONARY_VARIANTS = {
  BASIC: 'basic',
  STRIPED: 'striped'
};

var Dictionary = function (_React$Component) {
  inherits(Dictionary, _React$Component);

  function Dictionary() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Dictionary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Dictionary.__proto__ || Object.getPrototypeOf(Dictionary)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      return React.createElement(
        'div',
        { className: _this.dictionaryClassName },
        React.createElement(
          'dl',
          { className: _this.keyValuePairsClassName },
          children
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Dictionary, [{
    key: 'dictionaryClassName',
    get: function get$$1() {
      var variant = this.props.variant;


      var baseClass = sparkClassName('component', 'Dictionary');
      var variantClass = sparkClassName('component', 'Dictionary', null, 'striped');

      return classnames(baseClass, defineProperty({}, variantClass, variant !== DICTIONARY_VARIANTS.BASIC));
    }
  }, {
    key: 'keyValuePairsClassName',
    get: function get$$1() {
      return sparkClassName('component', 'Dictionary', 'keyvaluepairs');
    }
  }]);
  return Dictionary;
}(React.Component);

Dictionary.defaultProps = {
  children: null,
  variant: DICTIONARY_VARIANTS.BASIC
};
Dictionary.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(DICTIONARY_VARIANTS))
};


Dictionary.Item = Item;

const valueTest = (element) => {
  if (element.value !== '') {
    element.classList.add('sprk-b-TextInput--has-value');
  } else {
    element.classList.remove('sprk-b-TextInput--has-value');
  }
};

const bindUIEvents = (element) => {
  element.addEventListener('input', () => {
    valueTest(element);
  });

  element.addEventListener('focusin', () => {
    element.classList.remove('sprk-b-TextInput--focusout');
    element.classList.add('sprk-b-TextInput--focusin');
  });

  element.addEventListener('blur', () => {
    valueTest(element);
    element.classList.remove('sprk-b-TextInput--focusin');
    element.classList.add('sprk-b-TextInput--focusout');
  });
};

var TextInput = function (_React$Component) {
  inherits(TextInput, _React$Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.inputRef = React.createRef(), _this.componentDidMount = function () {
      bindUIEvents(_this.inputRef.current);
    }, _this.render = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          id = _this$props.id,
          label = _this$props.label;


      return React.createElement(
        InputContainer,
        { id: id, label: label },
        React.createElement('input', {
          className: _this.textInputClassName,
          disabled: disabled,
          id: id,
          'data-id': id,
          type: 'text',
          'aria-describedby': id + '--error-container',
          ref: _this.inputRef
        })
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TextInput, [{
    key: 'textInputClassName',
    get: function get$$1() {
      var _classNames;

      var _props = this.props,
          error = _props.error,
          width = _props.width;


      var baseClass = sparkClassName('base', 'TextInput');
      var errorClass = sparkClassName('base', 'TextInput', null, 'error');
      var widthClass = sparkWidthClassName(width);

      return classnames(baseClass, (_classNames = {}, defineProperty(_classNames, errorClass, error), defineProperty(_classNames, widthClass, width), _classNames));
    }
  }]);
  return TextInput;
}(React.Component);

TextInput.defaultProps = {
  disabled: false,
  error: null,
  width: 100
};
TextInput.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number
};

var LINK_VARIANTS = {
  INLINE: 'inline',
  STANDALONE: 'standalone'
};

var Link = function (_React$Component) {
  inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          standalone = _this$props.standalone,
          variant = _this$props.variant,
          rest = objectWithoutProperties(_this$props, ['children', 'disabled', 'standalone', 'variant']);


      return React.createElement(
        'a',
        _extends({
          className: _this.className
        }, rest),
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Link, [{
    key: 'className',
    get: function get$$1() {
      var _classNames;

      var _props = this.props,
          disabled = _props.disabled,
          variant = _props.variant;


      var baseClass = sparkClassName('base', 'Link');
      var disabledClass = sparkClassName('base', 'Link', null, 'disabled');
      var variantClass = sparkClassName('base', 'Link', null, variant);

      return classnames(baseClass, (_classNames = {}, defineProperty(_classNames, disabledClass, disabled), defineProperty(_classNames, variantClass, variant !== LINK_VARIANTS.INLINE), _classNames));
    }
  }]);
  return Link;
}(React.Component);

Link.defaultProps = {
  children: null,
  disabled: false,
  standalone: false,
  variant: LINK_VARIANTS.INLINE
};
Link.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  standalone: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(LINK_VARIANTS))
};

var GroupedColumn = function (_React$Component) {
  inherits(GroupedColumn, _React$Component);

  function GroupedColumn() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, GroupedColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = GroupedColumn.__proto__ || Object.getPrototypeOf(GroupedColumn)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      var className = sparkClassName('base', 'Table', null, 'grouped-column');

      return React.createElement(
        'th',
        { className: className },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return GroupedColumn;
}(React.Component);

GroupedColumn.defaultProps = {
  children: null
};
GroupedColumn.propTypes = {
  children: PropTypes.node
};

var Th = function (_React$Component) {
  inherits(Th, _React$Component);

  function Th() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Th);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Th.__proto__ || Object.getPrototypeOf(Th)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      return React.createElement(
        'th',
        { className: _this.className },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Th, [{
    key: 'className',
    get: function get$$1() {
      var empty = this.props.empty;


      var emptyHeadingClass = sparkClassName('base', 'Table', 'empty-heading');

      return classnames(defineProperty({}, emptyHeadingClass, empty));
    }
  }]);
  return Th;
}(React.Component);

Th.defaultProps = {
  children: null,
  empty: false
};
Th.propTypes = {
  children: PropTypes.node,
  empty: PropTypes.bool
};

var TABLE_VARIANTS = {
  GROUPED_COLUMNS: 'grouped-columns',
  ROW_COMPARISON: 'row-comparison',
  STANDARD: 'standard',
  SECONDARY: 'secondary',
  SECONDARY_ROW_COMPARISON: 'secondary-row-comparison'
};

var Table = function (_React$Component) {
  inherits(Table, _React$Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var children = _this.props.children;


      return React.createElement(
        'div',
        { className: _this.containerClassName },
        React.createElement(
          'table',
          { className: _this.tableClassName },
          children
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Table, [{
    key: 'containerClassName',
    get: function get$$1() {
      return sparkClassName('b', 'TableContainer');
    }
  }, {
    key: 'tableClassName',
    get: function get$$1() {
      var _classNames;

      var _props = this.props,
          striped = _props.striped,
          variant = _props.variant;


      var baseClass = sparkClassName('base', 'Table');
      var stripedClass = sparkClassName('base', 'Table', null, 'striped');
      var variantClass = sparkClassName('base', 'Table', null, variant);

      return classnames(baseClass, (_classNames = {}, defineProperty(_classNames, stripedClass, striped), defineProperty(_classNames, variantClass, variant !== TABLE_VARIANTS.STANDARD), _classNames));
    }
  }]);
  return Table;
}(React.Component);

Table.defaultProps = {
  children: null,
  spacing: 'medium',
  striped: false,
  variant: TABLE_VARIANTS.STANDARD
};
Table.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.oneOf(['medium']), // TODO: Check on this
  striped: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(TABLE_VARIANTS))
};


Table.GroupedColumn = GroupedColumn;
Table.Th = Th;

var Select = function (_React$Component) {
  inherits(Select, _React$Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.selectRef = React.createRef(), _this.componentDidMount = function () {
      bindUIEvents(_this.selectRef.current);
    }, _this.render = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          id = _this$props.id,
          label = _this$props.label,
          options = _this$props.options;


      return React.createElement(
        InputContainer,
        { id: id, label: label },
        React.createElement(
          'select',
          {
            className: sparkClassName('base', 'Select'),
            id: id,
            'data-id': id,
            ref: _this.selectRef,
            'aria-describedby': id + '--error-container',
            'data-sprk-input': 'select',
            disabled: disabled
          },
          options.map(function (_ref2) {
            var value = _ref2.value,
                text = _ref2.text;
            return React.createElement(
              'option',
              { value: value },
              text
            );
          })
        ),
        React.createElement(
          'svg',
          {
            className: sparkClassName('component', 'Icon') + ' ' + sparkClassName('base', 'SelectContainer', 'icon'),
            viewBox: '0 0 64 64'
          },
          React.createElement('use', { xlinkHref: '#chevron-down' })
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Select, [{
    key: 'selectClassName',
    get: function get$$1() {
      var _classNames;

      var _props = this.props,
          error = _props.error,
          width = _props.width;


      var baseClass = sparkClassName('base', 'Select');
      var errorClass = sparkClassName('base', 'TextInput', null, 'error');
      var widthClass = sparkWidthClassName(width);

      return classnames(baseClass, (_classNames = {}, defineProperty(_classNames, errorClass, error), defineProperty(_classNames, widthClass, width), _classNames));
    }
  }]);
  return Select;
}(React.Component);

Select.defaultProps = {
  disabled: false,
  error: null,
  width: 100
};
Select.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number
};

export { Button, Checkbox, CheckboxGroup, Dictionary, ErrorText, Fieldset, Legend as Label, Label as Legend, SelectionContainer, TextInput, InputContainer, Link, Table, Select };
//# sourceMappingURL=index.es.js.map
