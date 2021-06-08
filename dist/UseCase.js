'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var UseCaseScript = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(src, widgetType, workspaceId, userId, email, firstName, lastName, profileUrl, callback) {
    var script;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isScriptLoaded && typeof window !== 'undefined' && !window.isIframe) {
              isScriptLoaded = true;
              script = document.createElement('script');

              script.src = src;
              script.setAttribute('data-workspaceId', workspaceId);
              script.setAttribute('data-widgetType', widgetType);
              if (userId) {
                script.setAttribute('data-userId', userId);
              }

              if (email) {
                script.setAttribute('data-email', email);
              }

              if (firstName) {
                script.setAttribute('data-firstName', firstName);
              }

              if (lastName) {
                script.setAttribute('data-lastName', lastName);
              }

              if (profileUrl) {
                script.setAttribute('data-profileUrl', profileUrl);
              }

              script.addEventListener('load', function () {
                callback();
              });
              script.addEventListener('error', function (error) {
                callback(error);
              });
              document.body.appendChild(script);
            }

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function UseCaseScript(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
    return _ref.apply(this, arguments);
  };
}();

var UseCasePopup = function (_PureComponent) {
  (0, _inherits3.default)(UseCasePopup, _PureComponent);

  function UseCasePopup() {
    var _ref2,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UseCasePopup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = UseCasePopup.__proto__ || (0, _getPrototypeOf2.default)(UseCasePopup)).call.apply(_ref2, [this].concat(args))), _this), _this.componentDidUpdate = function (_ref3) {
      var oldHide = _ref3.hide,
          oldOpen = _ref3.open,
          oldWorkspaceId = _ref3.workspaceId;
      var _this$props = _this.props,
          hide = _this$props.hide,
          open = _this$props.open,
          workspaceId = _this$props.workspaceId;

      if (hide !== oldHide) {
        if (hide) {
          _this.hide();
        } else {
          _this.show();
        }
      }

      if (open !== oldOpen) {
        if (open) {
          _this.open();
        } else {
          _this.close();
        }
      }

      if (workspaceId !== oldWorkspaceId) {
        _this.init(workspaceId);
      }
    }, _this.loadPopup = function () {
      var _this$props2 = _this.props,
          onLoad = _this$props2.onLoad,
          hide = _this$props2.hide,
          open = _this$props2.open,
          widgetType = _this$props2.widgetType;

      if (typeof window !== 'undefined' && window.dueWork) {
        if (onLoad) {
          onLoad();
        }

        if (open) {
          _this.open();
        }

        if (hide) {
          _this.hide();
        }
      }
    }, _this.close = function () {
      var widgetType = _this.props.widgetType;

      if (typeof window !== 'undefined' && window.dueWork) {
        window.dueWork[widgetType].close();
      }
    }, _this.init = function () {
      var _this$props3 = _this.props,
          widgetType = _this$props3.widgetType,
          workspaceId = _this$props3.workspaceId;

      if (typeof window !== 'undefined' && window.dueWork) {
        window.dueWork[widgetType].init(workspaceId);
      }
    }, _this.open = function () {
      var widgetType = _this.props.widgetType;

      if (typeof window !== 'undefined' && window.dueWork) {
        window.dueWork[widgetType].open();
      }
    }, _this.show = function () {
      var widgetType = _this.props.widgetType;

      if (typeof window !== 'undefined' && window.dueWork) {
        window.dueWork[widgetType].show();
      }
    }, _this.hide = function () {
      var widgetType = _this.props.widgetType;

      if (typeof window !== 'undefined' && window.dueWork) {
        window.dueWork[widgetType].hide();
      }
    }, _this.identify = function () {
      var _this$props4 = _this.props,
          userId = _this$props4.userId,
          email = _this$props4.email,
          firstName = _this$props4.firstName,
          lastName = _this$props4.lastName,
          profileUrl = _this$props4.profileUrl,
          widgetType = _this$props4.widgetType;

      if (typeof window !== 'undefined' && window.dueWork) {
        if (userId && window.dueWork[widgetType]) {
          window.dueWork[widgetType].identify(userId, {
            email: email,
            firstName: firstName,
            lastName: lastName,
            profileUrl: profileUrl
          });
        }
      }
    }, _this.loadScript = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _this$props5, url, widgetType, workspaceId, userId, email, firstName, lastName, profileUrl;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props5 = _this.props, url = _this$props5.url, widgetType = _this$props5.widgetType, workspaceId = _this$props5.workspaceId, userId = _this$props5.userId, email = _this$props5.email, firstName = _this$props5.firstName, lastName = _this$props5.lastName, profileUrl = _this$props5.profileUrl;

              if (workspaceId) {
                _context2.next = 5;
                break;
              }

              console.error('workspaceId is required. Check out https://help.due.work for more info');
              _context2.next = 7;
              break;

            case 5:
              _context2.next = 7;
              return UseCaseScript(url, widgetType, workspaceId, userId, email, firstName, lastName, profileUrl, _this.loadPopup);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UseCasePopup, [{
    key: 'render',
    value: function render() {
      if (!isScriptLoaded && typeof window !== 'undefined' && !window.dueWork) {
        this.loadScript();
      }

      return null;
    }
  }]);
  return UseCasePopup;
}(_react.PureComponent);

UseCasePopup.propTypes = {
  onLoad: _propTypes2.default.func,
  widgetType: _propTypes2.default.string,
  workspaceId: _propTypes2.default.string.isRequired,
  blockId: _propTypes2.default.string,
  url: _propTypes2.default.string,
  userId: _propTypes2.default.string,
  email: _propTypes2.default.string,
  firstName: _propTypes2.default.string,
  lastName: _propTypes2.default.string,
  profileUrl: _propTypes2.default.string,
  hide: _propTypes2.default.bool,
  open: _propTypes2.default.bool
};
UseCasePopup.defaultProps = {
  onLoad: null,
  widgetType: 'popup',
  url: URL,
  userId: '',
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
  hide: false,
  open: false
};
exports.default = UseCasePopup;
module.exports = exports['default'];
