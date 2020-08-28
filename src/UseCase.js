/* eslint-disable no-undef */
/**
 * @author Robins Gupta
 * @email robinskumar73@gmail.com
 * @create date 2020-07-23 03:39:36
 * @modify date 2020-07-23 03:39:36
 * @desc [description]
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

const URL = `https://www.due.work/api/snippet`;

const UseCaseScript = async (src, callback) => {
  if (typeof window !== 'undefined' && !window.isIframe) {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function() {
      callback();
    });
    script.addEventListener('error', function(error) {
      callback(error);
    });
    document.body.appendChild(script);
  }
};

class UseCasePopup extends PureComponent {
  static propTypes = {
    onLoad: PropTypes.func,
    widget: PropTypes.string,
    workspaceId: PropTypes.string,
    blockId: PropTypes.string
  };

  static defaultProps = {
    onLoad: null,
    widget: 'popup',
    workspaceId: '',
    blockId: ''
  };

  loadPopup = () => {
    const { onLoad, widget, workspaceId, blockId } = this.props;
    if (typeof window !== 'undefined' && window.dueWork) {
      window.dueWork[widget].init(workspaceId);
      if (onLoad) {
        onLoad();
      }
    }
  };

  loadScript = async () => {
    await UseCaseScript(URL, this.loadPopup);
  };

  render() {
    if (typeof window !== 'undefined' && !window.dueWork) {
      setTimeout(() => {
        this.loadScript();
      });
    }

    return null;
  }
}

export default UseCasePopup;
