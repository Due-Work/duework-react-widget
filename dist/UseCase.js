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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = UseCasePopup.__proto__ || (0, _getPrototypeOf2.default)(UseCasePopup)).call.apply(_ref2, [this].concat(args))), _this), _this.componentDidMount = function () {
      var _this$props = _this.props,
          hide = _this$props.hide,
          open = _this$props.open,
          workspaceId = _this$props.workspaceId,
          theme = _this$props.theme;

      // Add event listener

      _this.subscribeOnOpen();
      _this.subscribeOnClose();
      _this.subscribeOnLoginSuccess();
      _this.subscribeOnNewTicket();

      if (workspaceId !== undefined) {
        _this.init(workspaceId);
      }

      if (hide !== undefined) {
        if (hide) {
          _this.hide();
        } else {
          _this.show();
        }
      }

      if (open !== undefined) {
        if (open) {
          _this.open();
        } else {
          _this.close();
        }
      }

      if (theme !== undefined) {
        _this.setTheme(theme);
      }
    }, _this.componentWillUnmount = function () {
      _this.unsubscribeAll();
    }, _this.componentDidUpdate = function (_ref3) {
      var oldHide = _ref3.hide,
          oldOpen = _ref3.open,
          oldWorkspaceId = _ref3.workspaceId,
          oldTheme = _ref3.theme;
      var _this$props2 = _this.props,
          hide = _this$props2.hide,
          open = _this$props2.open,
          workspaceId = _this$props2.workspaceId,
          theme = _this$props2.theme;

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

      if (oldTheme !== theme) {
        _this.setTheme(theme);
      }
    }, _this.loadPopup = function () {
      var _this$props3 = _this.props,
          onLoad = _this$props3.onLoad,
          hide = _this$props3.hide,
          open = _this$props3.open,
          theme = _this$props3.theme;

      if (typeof window !== 'undefined' && window.dueWork) {
        if (onLoad) {
          onLoad();
        }

        // Add event listener
        _this.subscribeOnOpen();
        _this.subscribeOnClose();
        _this.subscribeOnLoginSuccess();
        _this.subscribeOnNewTicket();

        if (open) {
          _this.open();
        }

        if (hide) {
          _this.hide();
        }

        if (theme) {
          _this.setTheme(theme);
        }
      }
    }, _this.unsubscribeAll = function () {
      var widgetType = _this.props.widgetType;

      if (typeof window !== 'undefined' && window.dueWork && window.dueWork[widgetType]) {
        window.dueWork[widgetType].unsubscribeAll();
      }
    }, _this.subscribeOnOpen = function () {
      var _this$props4 = _this.props,
          widgetType = _this$props4.widgetType,
          onOpen = _this$props4.onOpen;

      if (typeof window !== 'undefined' && window.dueWork && onOpen) {
        window.dueWork[widgetType].onOpen(onOpen);
      }
    }, _this.subscribeOnClose = function () {
      var _this$props5 = _this.props,
          widgetType = _this$props5.widgetType,
          onClose = _this$props5.onClose;

      if (typeof window !== 'undefined' && window.dueWork && onClose) {
        window.dueWork[widgetType].onClose(onClose);
      }
    }, _this.subscribeOnLoginSuccess = function () {
      var _this$props6 = _this.props,
          widgetType = _this$props6.widgetType,
          onLoginSuccess = _this$props6.onLoginSuccess;

      if (typeof window !== 'undefined' && window.dueWork && onLoginSuccess) {
        window.dueWork[widgetType].onLoginSuccess(onLoginSuccess);
      }
    }, _this.subscribeOnNewTicket = function () {
      var _this$props7 = _this.props,
          widgetType = _this$props7.widgetType,
          onNewTicket = _this$props7.onNewTicket;

      if (typeof window !== 'undefined' && window.dueWork && onNewTicket) {
        window.dueWork[widgetType].onNewTicket(onNewTicket);
      }
    }, _this.close = function () {
      var widgetType = _this.props.widgetType;

      if (typeof window !== 'undefined' && window.dueWork) {
        window.dueWork[widgetType].close();
      }
    }, _this.init = function () {
      var _this$props8 = _this.props,
          widgetType = _this$props8.widgetType,
          workspaceId = _this$props8.workspaceId;

      if (typeof window !== 'undefined' && window.dueWork && window.dueWork[widgetType] && window.dueWork[widgetType].workspaceId !== workspaceId) {
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
    }, _this.setTheme = function () {
      var _this$props9 = _this.props,
          widgetType = _this$props9.widgetType,
          theme = _this$props9.theme;

      if (typeof window !== 'undefined' && window.dueWork) {
        window.dueWork[widgetType].setTheme(theme);
      }
    }, _this.identify = function () {
      var _this$props10 = _this.props,
          userId = _this$props10.userId,
          email = _this$props10.email,
          firstName = _this$props10.firstName,
          lastName = _this$props10.lastName,
          profileUrl = _this$props10.profileUrl,
          widgetType = _this$props10.widgetType;

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
      var _this$props11, url, widgetType, workspaceId, userId, email, firstName, lastName, profileUrl;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props11 = _this.props, url = _this$props11.url, widgetType = _this$props11.widgetType, workspaceId = _this$props11.workspaceId, userId = _this$props11.userId, email = _this$props11.email, firstName = _this$props11.firstName, lastName = _this$props11.lastName, profileUrl = _this$props11.profileUrl;

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
  widgetType: _propTypes2.default.string,
  workspaceId: _propTypes2.default.string.isRequired,
  url: _propTypes2.default.string,
  userId: _propTypes2.default.string,
  email: _propTypes2.default.string,
  firstName: _propTypes2.default.string,
  lastName: _propTypes2.default.string,
  profileUrl: _propTypes2.default.string,
  hide: _propTypes2.default.bool,
  open: _propTypes2.default.bool,
  theme: _propTypes2.default.oneOf(['yellow', 'dark', 'white']),

  // Events
  onLoad: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onLoginSuccess: _propTypes2.default.func,
  onNewTicket: _propTypes2.default.func
};
UseCasePopup.defaultProps = {
  widgetType: 'popup',
  url: URL,
  userId: '',
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
  hide: false,
  open: false,
  theme: undefined,

  // Events
  onLoad: null,
  onOpen: null,
  onClose: null,
  onLoginSuccess: null,
  onNewTicket: null
};
exports.default = UseCasePopup;
module.exports = exports['default'];
