import RingLoader from "react-spinners/RingLoader";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";

const WaitlistModal = (props) => {
  //status = 1: Submitted
  //status = 2: Complete
  //status = 3: Error
  const url = "https://rainyday.deals?rc=" + props.code;
  const message =
    "I get money every time I shop with rainyday. You can, too. Sign-up using this link and get $5 dollars to start. You can also get $3 to share with your friends!";
  return (
    <div className="waitlist-modal">
      {props.status === 1 && (
        <div className="waitlist-modal-inner">
          <h1 className="waitlist-modal-header">Submitting your request...</h1>
          <RingLoader size={100} color={"#061c58"} loading={true} />
        </div>
      )}
      {props.status === 2 && (
        <div className="waitlist-modal-inner">
          <h1 className="waitlist-modal-header">Success!</h1>
          <p className="waitlist-modal-text">
            With priority access at launch, you can start earning first. For now,{" "}
            <strong>share the code below and earn $3 </strong>{" "}
			every time someone uses it at sign-up!
          </p>
          <div className="waitlist-modal-referral-container">
            <h3 className="waitlist-modal-referral">{props.code}</h3>
            <button
              className="waitlist-modal-copy-btn"
              onClick={() => {
				  navigator.clipboard.writeText(message + 'https://rainyday.deals?rc='+ props.code);
              }}>
              COPY
            </button>
          </div>
          <div className="waitlist-modal-share">
            <FacebookShareButton
              className="waitlist-modal-share-item"
              url={url}
              quote={message}
              hashtag="#Rainyday">
              <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              className="waitlist-modal-share-item"
              url={url}
              title={message}
              hashtags={["Rainyday", "Money"]}>
              <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={url}
              title={message}
              className="waitlist-modal-share-item">
              <WhatsappIcon size={50} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton
              url={url}
              title={message}
              className="waitlist-modal-share-item">
              <TelegramIcon size={50} round={true} />
            </TelegramShareButton>
            <EmailShareButton
              className="waitlist-modal-share-item"
              url={url}
              body={message}
              subject="Rainyday by Pontis Waitlist">
              <EmailIcon size={50} round={true} />
            </EmailShareButton>
          </div>
          <button className="waitlist-modal-btn" onClick={props.func}>
            Dismiss
          </button>
        </div>
      )}
      {props.status === 3 && (
        <div className="waitlist-modal-inner">
          <h1 className="waitlist-modal-header">Oops!</h1>
          <p className="waitlist-modal-text">{props.error}</p>
          <button className="waitlist-modal-btn" onClick={props.func}>
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};

export default WaitlistModal;
