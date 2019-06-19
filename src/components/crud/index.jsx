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
          data={{ ...item, id: i }}
          editItem={canEdit ? i => console.log("Update item #", i) : undefined}
          removeItem={
            canDelete ? i => console.log("Remove item #", i) : undefined
          }
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
  displayCount: PropTypes.number
};

Crud.defaultProps = {
  displayCount: 10
};

export default Crud;
