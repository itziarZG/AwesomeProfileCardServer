const ShareButton = (props) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.handleClickCreate();
  };
  const varDisable = props.isEmpty ? "disabled" : "";
  return (
    <div className="js-form-card js-form">
      <form>
        <button
          className="create-card__button button__created-title create-card hover js-button-created"
          onClick={handleClick}
          disabled={varDisable}
        >
          <i className="far fa-address-card created-card__button-icon"></i>
          Crear tarjeta
        </button>
      </form>
    </div>
  );
};
export default ShareButton;
