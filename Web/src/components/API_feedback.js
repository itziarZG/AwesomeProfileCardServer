import ShareButtonTwitter from "./ShareButtonTwitter";

function API_feedback(props) {
  return (
    <>
      {props.apiObject.apiSuccess && props.apiObject.apiCall ? (
        <ShareButtonTwitter apiObject={props.apiObject} />
      ) : (
        <></>
      )}
      {!props.apiObject.apiSuccess && props.apiObject.apiCall ? (
        <p className="card__created-link js-card-link">
          Error: {props.apiObject.apiError}
        </p>
      ) : (
        <></>
      )}
    </>
  );
}
export default API_feedback;
