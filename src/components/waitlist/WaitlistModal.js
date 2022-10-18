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

import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';

const WaitlistModal = (props) => {
const {lang} = useContext(LanguageContext);
  //status = 1: Submitted
  //status = 2: Complete
  //status = 3: Error
  const url = "https://rainyday.deals?rc=" + props.code;
  const message =
		lang==='en'?
    "I get money every time I shop with rainyday. You can, too. Sign-up using this link and get $5 dollars to start. You can also get $3 to share with your friends!"
		: 'Recibo dinero cada vez que compro con rainyday. Usted también puede. Regístrese usando este enlace y obtenga $ 5 dólares para comenzar. ¡También puedes obtener $3 para compartir con tus amigos!';
  return (
    <div className="waitlist-modal">
      {props.status === 1 && (
        <div className="waitlist-modal-inner">
          <h1 className="waitlist-modal-header">
			  {lang==='en'?'Submitting your request...':'Enviando su solicitud'}
		  </h1>
          <RingLoader size={100} color={"#061c58"} loading={true} />
        </div>
      )}
      {props.status === 2 && (
        <div className="waitlist-modal-inner">
          <h1 className="waitlist-modal-header">
			  {lang==='en'?'Success!':'Éxito!'}
			</h1>
          <p className="waitlist-modal-text">
			  {lang==='en'?'With priority access at launch, you can start earning first. For now,':'Con acceso prioritario en el lanzamiento, puede comenzar a ganar primero. Por ahora,'}
              {" "}
			  <strong>{lang==='en'?'share the code below and earn $3':'comparte el código de abajo y gana $3'}</strong>{" "}
			  {lang==='en'?'every time someone uses it at sign-up!':'cada vez que alguien lo usa al registrarse!'}
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

          <div className="waitlist-modal-referral-container">
            <h3 className="waitlist-modal-referral">{props.code}</h3>
            <button
              className="waitlist-modal-copy-btn"
              onClick={() => {
				  navigator.clipboard.writeText(message + ' https://rainyday.deals?rc='+ props.code);
              }}>
				{lang==='en'?'COPY':'COPIAR'}
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
			  {lang==='en'?'Dismiss':'Despedir'}
          </button>
        </div>
      )}
      {props.status === 3 && (
        <div className="waitlist-modal-inner">
          <h1 className="waitlist-modal-header">
			  {lang==='en'?'Oops!':'Ups!'}
		  </h1>
          <p className="waitlist-modal-text">{props.error}</p>
          <button className="waitlist-modal-btn" onClick={props.func}>
			  {lang==='en'?'Dismiss':'Despedir'}
          </button>
        </div>
      )}
    </div>
  );
};

export default WaitlistModal;
