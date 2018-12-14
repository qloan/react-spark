import {
  showModal,
  hideModal
} from "@sparkdesignsystem/spark-core/components/modals";
import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { sparkClassName, sparkComponentClassName } from "../../util";
import MODAL_VARIANTS from "./variants";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalMask from "./ModalMask";
import Spinner from "../Spinner";
import Stack from "../Stack";

class Modal extends Component {
  static defaultProps = {
    hasCloseButton: true
  };
  static propTypes = {
    ariaDescribedby: PropTypes.string,
    ariaLabelledby: PropTypes.string,
    cancelText: PropTypes.string,
    children: PropTypes.node,
    confirmAnalyticsString: PropTypes.string,
    confirmText: PropTypes.string,
    dataId: PropTypes.string,
    hasCloseButton: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idString: PropTypes.string,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(MODAL_VARIANTS)).isRequired
  };

  mainRef = React.createRef();
  maskRef = React.createRef();
  modalRef = React.createRef();

  get className() {
    const { className, type } = this.props;
    return classnames(
      sparkComponentClassName("Modal"),
      sparkClassName("utility", "Display", null, "none"),
      sparkComponentClassName("Modal", null, type),
      { [className]: className }
    );
  }

  hide() {
    hideModal(
      this.modalRef.current,
      this.maskRef.current,
      this.mainRef.current
    );
  }

  show() {
    showModal(
      this.modalRef.current,
      this.maskRef.current,
      this.mainRef.current
    );
  }

  toggle() {
    const { show } = this.props;
    if (show) {
      this.show();
    } else {
      this.hide();
    }
  }

  componentDidMount = () => {
    this.toggle();
  };

  componentDidUpdate = prevProps => {
    const { show } = this.props;
    if (prevProps.show !== show) {
      this.toggle();
    }
  };

  componentWillUnmount = () => {
    this.hide();
  }

  render = () => {
    const {
      ariaDescribedby,
      ariaLabelledby,
      cancelText,
      children,
      confirmAnalyticsString,
      confirmText,
      dataId,
      hasCloseButton,
      id,
      idString,
      onCancel,
      onClose,
      onConfirm,
      show,
      title,
      type,
      ...props
    } = this.props;
    
    return (
      //  This needs to be fixed, their method looks for this attribute and sets focus to it
      <div ref={this.mainRef} className={sparkClassName("utility", "JavaScript")}>
        <div data-sprk-modal-trigger={id} />{" "}
        <div
          aria-describedby={ariaDescribedby}
          aria-labelledby={ariaLabelledby}
          aria-modal="true"
          className={this.className}
          data-id={dataId}
          data-sprk-modal-type={type}
          data-sprk-modal={id}
          ref={this.modalRef}
          role="dialog"
          tabIndex="-1"
          {...props}
        >
          <Stack itemSpacing={"large"}>
            <ModalHeader
              hasCloseButton={
                type !== MODAL_VARIANTS.WAIT ? hasCloseButton : false
              }
              onClose={onClose}
              title={title}
            />
            <ModalBody>
              {type === MODAL_VARIANTS.WAIT && <Spinner />}
              {children}
            </ModalBody>
            {type === MODAL_VARIANTS.CHOICE && (
              <ModalFooter
                cancelText={cancelText}
                confirmText={confirmText}
                modalId={id}
                onCancel={onCancel}
                onConfirm={onConfirm}
              />
            )}
          </Stack>
        </div>
        <ModalMask
          className={sparkClassName("utility", "Display", null, "none")}
          maskRef={this.maskRef}
          closeOnClick={type !== MODAL_VARIANTS.WAIT}
          onClose={onClose}
        />
      </div>
    );
  };
}
export default Modal;
