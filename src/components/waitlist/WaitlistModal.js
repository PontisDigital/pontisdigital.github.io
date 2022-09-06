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
  const url = "https://pontis.digital?rc=" + props.code;
  const message =
    "I can spend my cash online with Access, even without a bank account. You can, too. Sign up using this link, and get 100,000 IDR every time you share it with a friend!";
  return (
    <div className="waitlist-modal">
      {props.status === 1 && (
        <div className="waitlist-modal-inner">
          <h1 className="waitlist-modal-header">Submitting your request...</h1>
          <RingLoader size={100} color={"#83A7BC"} loading={true} />
        </div>
      )}
      {props.status === 2 && (
        <div className="waitlist-modal-inner">
          <h1 className="waitlist-modal-header">Complete!</h1>
          <p className="waitlist-modal-text">
            You have successfully registered for the waitlist! You will receive
            a message shortly with more detail. For now,{" "}
            <strong>share the referral code below and get IDR 100,000</strong>{" "}
            at launch for each person that signs up with it.
          </p>
          <div className="waitlist-modal-referral-container">
            <h3 className="waitlist-modal-referral">{props.code}</h3>
            <button
              className="waitlist-modal-copy-btn"
              onClick={() => {
                navigator.clipboard.writeText(props.code);
              }}>
              COPY
            </button>
          </div>
          <div className="waitlist-modal-share">
            <FacebookShareButton
              className="waitlist-modal-share-item"
              url={url}
              quote={message}
              hashtag="#Access">
              <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              className="waitlist-modal-share-item"
              url={url}
              title={message}
              hashtags={["Access", "cash"]}>
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
              subject="Access by Pontis Waitlist">
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
