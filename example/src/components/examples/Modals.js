import React from 'react'
import { Modal, Type, Stack, Card, Button } from 'react-spark'

import img from '../../assets/images/card-img.jpg'

class Modals extends React.Component {
  state = {
    showChoiceModal: false,
    showInfoModal: false,
    showInfoModal2: false,
    showModal: false,
    showWaitModal: false
  }

  renderImg = () => <img alt='Spark placeholder' src={img} />

  render = () => (
    <>
      <h2>Modals</h2>

      <p>Choice:</p>
      <button
        className='sprk-c-Button'
        data-sprk-modal-trigger='exampleChoiceModal'
        type='button'
        onClick={() => {
          this.setState({ showChoiceModal: !this.state.showChoiceModal })
        }}
      >
        Open Choice Modal
      </button>

      <Modal
        ariaDescribedby='modalChoiceContent'
        ariaLabelledby='modalChoiceHeading'
        dataId='modal-choice-1'
        id={'exampleChoiceModal'}
        show={this.state.showChoiceModal}
        type='choice'
        confirmText={'confirm'}
        cancelText={'cancel'}
        onCancel={() => { this.setState({ showChoiceModal: !this.state.showChoiceModal }) }}
        onConfirm={() => { console.log('confirmed'); this.setState({ showChoiceModal: !this.state.showChoiceModal }) }}
        onClose={() => { this.setState({ showChoiceModal: !this.state.showChoiceModal }) }
        }
      >
        This is some content within a Modal. There will also be a way to close
        the modal.
      </Modal>

      <p>Info:</p>
      <button
        data-sprk-modal-trigger='modalInfo'
        className='sprk-c-Button'
        type='button'
        onClick={() => {
          this.setState({ showInfoModal: !this.state.showInfoModal })
        }}
      >
        Open Info Modal
      </button>
      <Modal
        type='info'
        id={'modalInfo'}
        ariaLabelledby='modalInfoHeading'
        ariaDescribedby='modalInfoContent'
        dataId='modal-info-1'
        show={this.state.showInfoModal}
        onClose={() => { this.setState({ showInfoModal: !this.state.showInfoModal }) }}
      >
        <Stack>
          <Stack.Item>
            <Type.BodyOne>
              This is some content for the Information Modal.
            </Type.BodyOne>
          </Stack.Item>
        </Stack>
      </Modal>

      <p>Info with advanced content:</p>
      <button
        data-sprk-modal-trigger='modalInfo2'
        className='sprk-c-Button'
        type='button'
        onClick={() => {
          this.setState({ showInfoModal2: !this.state.showInfoModal2 })
        }}
      >
        Open Info Modal With Content
      </button>
      <Modal
        type='info'
        id={'modalInfo2'}
        ariaLabelledby='modalInfoHeading2'
        ariaDescribedby='modalInfoContent2'
        dataId='modal-info-2'
        show={this.state.showInfoModal2}
        onClose={() => { this.setState({ showInfoModal2: !this.state.showInfoModal2 }) }}
      >
        <Card>
          <Stack>
            <Stack.Item>
              <a href='#nogo'>
                {this.renderImg()}
              </a>
            </Stack.Item>
            <Stack.Item>
              <Card.Content>
                <Stack>
                  <Stack.Item>
                    <h4 className='sprk-b-TypeDisplaySix sprk-o-Stack__item'>
                      Title!
                    </h4>
                  </Stack.Item>
                  <Stack.Item>
                    <p className='sprk-b-TypeBodyTwo sprk-o-Stack__item'>
                      Placeholder text.
                    </p>
                  </Stack.Item>
                  <Stack.Item>
                    <Button>Button</Button>
                  </Stack.Item>
                </Stack>
              </Card.Content>
            </Stack.Item>
          </Stack>
        </Card>
      </Modal>

      <p>Wait:</p>
      <button
        className='sprk-c-Button'
        type='button'
        data-sprk-modal-trigger='exampleWaitModal'
        onClick={() => {
          this.setState({ showWaitModal: !this.state.showWaitModal })
          setTimeout(() => {
            this.setState({ showWaitModal: !this.state.showWaitModal })
          }, 1500)
        }}
      >
        Open Wait Modal
      </button>
      <Modal
        id={'exampleWaitModal'}
        type='wait'
        ariaLabelledby='modalWaitHeading'
        ariaDescribedby='modalWaitContent'
        dataId='modal-wait-1'
        show={this.state.showWaitModal}
      >
        <Stack>
          <Stack.Item>
            <Type.BodyTwo>
              This is some content for the Information Modal.
            </Type.BodyTwo>
          </Stack.Item>
        </Stack>
      </Modal>
    </>
  )
}

export default Modals
