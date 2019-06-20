import * as React from "react";
import PropTypes from "prop-types";
import "./item.sass";

/**
 * Item for the CRUD component
 */
class Item extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      /** Mode of current item (view of edit) */
      mode: "view",
      /** Show the content of the item */
      showContent: false,
      /** The description of an item */
      info: props.data.info
    };
  }

  /**
   * Method for change item mode
   *
   * @memberOf Item
   * @param mode - current mode of the item
   */
  changeMode = mode =>
    mode === "view"
      ? this.setState({ mode: "edit", showContent: true })
      : this.setState({ mode: "view" });

  /**
   * Method for rendering controls of an item based on it's mode
   *
   * @memberOf Item
   * @param mode - current mode of the item
   */
  renderControls = mode => {
    const { editItem, removeItem } = this.props;
    if (mode === "view") {
      return (
        <>
          {editItem ? (
            <button
              className="btn"
              onClick={e => {
                e.stopPropagation();
                this.changeMode(mode);
              }}
            >
              <i className="fa edit" />
            </button>
          ) : null}
          {removeItem ? (
            <button
              className="btn"
              onClick={e => {
                e.stopPropagation();
                removeItem();
              }}
            >
              <i className="fa delete" />
            </button>
          ) : null}
        </>
      );
    }
    return (
      <button
        className="btn save"
        onClick={e => {
          e.stopPropagation();
          this.props.editItem({
            title: this.props.data.title,
            info: this.state.info
          });
          this.setState({ mode: "view" });
        }}
      >
        Save
      </button>
    );
  };

  render = () => {
    const { title } = this.props.data;
    const { info, mode, showContent } = this.state;
    return (
      <div className="item">
        <div
          className={`item-header ${showContent ? "active" : ""}`}
          onClick={() =>
            this.setState(state => ({
              ...state,
              showContent: mode !== "edit" ? !state.showContent : true
            }))
          }
        >
          <span className="header-title">{title}</span>
          <div className="controls">{this.renderControls(mode)}</div>
        </div>
        {mode === "edit" ? (
          <textarea
            className="item-content active"
            onChange={e => this.setState({ info: e.target.value })}
            defaultValue={info}
          />
        ) : (
          <p className={`item-content ${showContent ? "active" : ""}`}>
            {info}
          </p>
        )}
      </div>
    );
  };
}

Item.propTypes = {
  data: PropTypes.shape({
    /** The title of item */
    title: PropTypes.string.isRequired,
    /** The additional information about item */
    info: PropTypes.string.isRequired
  }),
  /** Function to apply changes to the item */
  editItem: PropTypes.func,
  /** Function to delete item from an array */
  removeItem: PropTypes.func
};

export default Item;
