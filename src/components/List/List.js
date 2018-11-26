import React from 'react'
import LIST_VARIANTS from './variants'
import PropTypes from 'prop-types'
import sparkClassName from '../../util/sparkClassName'

class List extends React.Component {
  static defaultProps = {
    listType: LIST_VARIANTS.LIST
  }

  static propTypes = {
    dataId: PropTypes.string,
    listItemId: PropTypes.string,
    listType: PropTypes.oneOf(Object.values(LIST_VARIANTS)),
    text: PropTypes.string,
    children: PropTypes.node
  }

  listRef = React.createRef()

  get className() {
    const { listType } = this.props

    const baseClass = sparkClassName('base', 'List')
    const variantClass = sparkClassName('base', 'List', null, listType)

    return [
      baseClass,
      variantClass
    ].join(' ')
  }

  incrementCount = () => {
    this.setState((state) => {
      return {count: state.count + 1}
    })
  }

  render = () => {
    const {
      listType,
      dataId,
      listItemId,
      text,
      children,
      ...rest
    } = this.props

    return (
      <div>
        {dataId === 'unordered-list-1' && (
          <ul className={this.className} data-id={dataId} {...rest}>
            <li data-id={listItemId}>{text}</li>
            <li data-id={listItemId}>{text}</li>
            <li data-id={listItemId}>{text}</li>
          </ul>
        )}
        {dataId === 'ordered-list-1' && (
          <ol className={this.className} data-id={dataId} {...rest}>
            <li data-id={listItemId}>{text}</li>
            <li data-id={listItemId}>{text}</li>
            <li data-id={listItemId}>{text}</li>
          </ol>
        )}
      </div>
    )
  }
}

export default List
