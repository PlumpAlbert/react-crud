import * as React from "react";
import PropTypes from "prop-types";
import Item from "./item.jsx";
import "./crud.sass";

/**
 * The generic CRUD component.
 *
 * @class Crud
 * @extends {React.PureComponent}
 */
class Crud extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      /** The offset from start of the items array */
      offset: 0
    };
  }

  /**
   * Edits item in the array
   *
   * @memberOf Crud
   * @param prevItem
   * @param newItem
   */
  editItem = (prevItem, newItem) => {
    const { items } = this.props;
    // Find index of item to update
    let index = items.findIndex(elem => elem === prevItem);
    if (index < 0)
      return console.error("removeItem: didn't found item in the array");
    let newItems;
    switch (index) {
      case 0: // Update first item
        newItems = [newItem, ...items.slice(1)];
        break;
      case items.length - 1: // Update last item
        newItems = [...items.slice(0, items.length - 1), newItem];
        break;
      default:
        // Update item at specific position
        newItems = [
          ...items.slice(0, index),
          newItem,
          ...items.slice(index + 1)
        ];
        break;
    }
    this.props.updateItems(newItems);
  };

  /**
   * Removes item from the array
   *
   * @memberOf Crud
   * @param item - an item that needs to be removed
   */
  removeItem = item => {
    const { items } = this.props;
    // Find index of item to remove
    let index = items.findIndex(elem => elem === item);
    if (index < 0)
      return console.error("removeItem: didn't found item in the array");
    let newItems;
    switch (index) {
      case 0: // Removes first item
        newItems = [...items.slice(1)];
        break;
      case items.length - 1: // Removes last item
        newItems = [...items.slice(0, items.length - 1)];
        break;
      default:
        // Removes item at specific position
        newItems = [...items.slice(0, index), ...items.slice(index + 1)];
        break;
    }
    this.props.updateItems(newItems);
  };

  /**
   * Method for rendering items.
   *
   * @memberOf Crud
   * @param offset - the index of an item to start from
   * @param count - the number of items to render
   */
  renderItems = (offset, count) => {
    console.log(`Rendering items (${offset},${offset + count})`);
    const { items, canEdit, canDelete } = this.props;
    return items
      .slice(offset, count)
      .map((item, i) => (
        <Item
          data={item}
          editItem={canEdit ? newItem => this.editItem(item, newItem) : null}
          removeItem={canDelete ? () => this.removeItem(item) : null}
          key={`crud-item_${i}`}
        />
      ));
  };

  render = () => {
    const { title, canCreate, canDelete, canModify, displayCount } = this.props;
    const { offset } = this.state;
    return (
      <div className="crud">
        <h3 className="page-title">{title}</h3>
        <div className="items-wrapper">
          {this.renderItems(offset, displayCount)}
        </div>
      </div>
    );
  };
}

Crud.propTypes = {
  /** The title of the page */
  title: PropTypes.string.isRequired,
  /** The items to render in component */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** The title of item */
      title: PropTypes.string.isRequired,
      /** The additional information about item */
      info: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Defines whether component can create new items */
  canCreate: PropTypes.bool,
  /** Defines whether component can delete items */
  canDelete: PropTypes.bool,
  /** Defines whether component can edit items */
  canEdit: PropTypes.bool,
  /** Specifies the number of items to display at the same time */
  displayCount: PropTypes.number,
  /** Function to modify items array */
  updateItems: PropTypes.func
};

Crud.defaultProps = {
  displayCount: 10
};

export default Crud;
