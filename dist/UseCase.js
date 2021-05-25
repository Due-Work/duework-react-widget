'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable no-console */
/* eslint-disable no-undef */
/**
 * @author Robins Gupta
 * @email robinskumar73@gmail.com
 * @create date 2020-07-23 03:39:36
 * @modify date 2020-07-23 03:39:36
 * @desc [description]
 */
var URL = 'https://www.due.work/app/widgets/snippet.js';

var isScriptLoaded = void 0;

var UseCaseScript = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(
      src,
      widgetType,
      workspaceId,
      callback
    ) {
      var script;
      return _regenerator2.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                if (
                  !isScriptLoaded &&
                  typeof window !== 'undefined' &&
                  !window.isIframe
                ) {
                  isScriptLoaded = true;
                  script = document.createElement('script');

                  script.src = src;
                  script.setAttribute('data-workspaceId', workspaceId);
                  script.setAttribute('data-widgetType', widgetType);
                  script.addEventListener('load', function() {
                    callback();
                  });
                  script.addEventListener('error', function(error) {
                    callback(error);
                  });
                  document.body.appendChild(script);
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined
      );
    })
  );

  return function UseCaseScript(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
})();

var UseCasePopup = (function(_PureComponent) {
  (0, _inherits3.default)(UseCasePopup, _PureComponent);

  function UseCasePopup() {
    var _ref2,
      _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UseCasePopup);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret =
        ((_temp =
          ((_this = (0, _possibleConstructorReturn3.default)(
            this,
            (_ref2 =
              UseCasePopup.__proto__ ||
              (0, _getPrototypeOf2.default)(UseCasePopup)).call.apply(
              _ref2,
              [this].concat(args)
            )
          )),
          _this)),
        (_this.loadPopup = function() {
          var onLoad = _this.props.onLoad;

          if (typeof window !== 'undefined' && window.dueWork) {
            if (onLoad) {
              onLoad();
            }
          }
        }),
        (_this.loadScript = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
            var _this$props, url, widgetType, workspaceId;

            return _regenerator2.default.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      (_this$props = _this.props),
                        (url = _this$props.url),
                        (widgetType = _this$props.widgetType),
                        (workspaceId = _this$props.workspaceId);

                      if (!workspaceId) {
                        console.error(
                          'workspaceId is required. Check out https://help.due.work for more info'
                        );
                      }
                      _context2.next = 4;
                      return UseCaseScript(
                        url,
                        widgetType,
                        workspaceId,
                        _this.loadPopup
                      );

                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              _this2
            );
          })
        )),
        _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(UseCasePopup, [
    {
      key: 'render',
      value: function render() {
        if (
          !isScriptLoaded &&
          typeof window !== 'undefined' &&
          !window.dueWork
        ) {
          this.loadScript();
        }

        return null;
      }
    }
  ]);
  return UseCasePopup;
})(_react.PureComponent);

UseCasePopup.propTypes = {
  onLoad: _propTypes2.default.func,
  widgetType: _propTypes2.default.string,
  workspaceId: _propTypes2.default.string.isRequired,
  blockId: _propTypes2.default.string,
  url: _propTypes2.default.string
};
UseCasePopup.defaultProps = {
  onLoad: null,
  widgetType: 'popup',
  url: URL
};
exports.default = UseCasePopup;
module.exports = exports['default'];
