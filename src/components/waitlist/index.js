import { useState } from "react";
import axios from "axios";
import WaitlistModal from "./WaitlistModal";

import LanguageContext from '../../LanguageContext';
import { useSearchParams } from "react-router-dom";
import { useContext } from 'react';

const Waitlist = props => {
const {lang} = useContext(LanguageContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const refCode = searchParams.get("rc");

	//stores the values of the form
  const [email, setEmail] = useState("");

  const [modal, setModal] = useState(0);

  //stores the status of each form field
  const [emailStatus, setEmailStatus] = useState(2);

  //referral code generated by the server
  const [code, setCode] = useState(props.refCode);
  const [modalError, setModalError] = useState("");

  //stores the error messages for each form field
  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
    console.log("Length", event.target.value.length);
	  if(event.target.value.includes("@") && event.target.value.includes(".") && event.target.value.length > 0)
	  {
		  setEmailStatus(1);
	  }
	  else
	  {
		  setEmailStatus(0);
	  }
  };

  const toggleModal = () => {
    setModal(0);
  };

  const submitButtonPressed = (event) => {
    setModal(1);

    console.log("button pressed");
    event.preventDefault();
	let post = new Map();
	post['email'] = email;
    post['refUsed'] = refCode;
	  const headers = {
		  "Content-Type": "application/json",
	  };
    axios
      .post("https://api.pontis.digital/waitlist", post, { headers })
      .then(function (response) {
        // REFERRAL GENERATED COMES HERE
			console.log("Response: " + response.data);
		if(response.data.length === 6)
		{
			console.log("Response: " + response.data);
			setCode(response.data);
			setModal(2);
		}

		  if (response.data === "MISSING_INFO")
		  {
          setModalError(
			  lang==='en'?
			  "All fields are required. Unless they are marked optional":
			  "Todos los campos son obligatorios. A menos que estén marcados como opcionales"
          );
          setModal(3);
		  }
		  else if (response.data === "PHONE_EXISTS") {
          setModalError(
			  lang==='en'?
			  "You're already signed up for the waitlist using this phone number!":
			  "¡Ya estás inscrito en la lista de espera con este número de teléfono!"
          );
          setModal(3);
        } else if (response.data === "WAITLIST_SUCCESS") {
          setModalError(
			  lang==='en'?
			  "Thanks for signing up! You'll receive an email soon with more information!":
			  "Gracias por registrarte! ¡Pronto recibirás un correo electrónico con más información!"
          );
          setModal(3);
        } else if (response.data === "EMAIL_EXISTS") {
          setModalError(
			  lang==='en'?
			  "You've already registered with this email":
			  "Ya te has registrado con este correo electrónico"
          );
          setModal(3);
        } else if (response.data === "PHONE_INVALID") {
          setModalError(
			  lang==='en'?
			  "Please enter a valid phone number":
			  "Por favor ingrese un número de teléfono válido"
          );
          setModal(3);

      }})
      .catch(function (error) {
        console.log(error.response.data);
        console.log(error.response);
        if (error.response.data === "PHONE_EXISTS") {
          setModalError(
			  lang==='en'?
			  "You're already signed up for the waitlist using this phone number!":
			  "¡Ya estás inscrito en la lista de espera con este número de teléfono!"
          );
          setModal(3);
        } else if (error.response.data === "EMAIL_EXISTS") {
          setModalError(
			  lang==='en'?
			  "You've already registered with this email.  Please try again.":
			  "Ya te has registrado con este correo electrónico. Inténtalo de nuevo."
          );
          setModal(3);
        } else if (error.response.data === "PHONE_INVALID") {
          setModalError(
			  lang==='en'?
			  "Please enter a valid phone number":
			  "Por favor ingrese un número de teléfono válido"
          );
          setModal(3);
        } else {
          setModalError(
			  lang==='en'?
            "Something went wrong on our end and your request is unable to be processed. Please try again later."
			  :'Algo salió mal por nuestra parte y no se pudo procesar su solicitud. Por favor, inténtelo de nuevo más tarde.'
          );
          setModal(3);
        }
      });
  };

  return (
    <div className="waitlist" id="waitlist">
      {modal !== 0 && (
        <WaitlistModal
          status={modal}
          func={toggleModal}
          code={code}
          error={modalError}
        />
      )}

      <div className="container">
        <h1 className="waitlist-title">
			{lang==='en'?'Join the waitlist now and get $5 for free' : 'Únase a la lista de espera ahora y obtenga $5 gratis'}
		</h1>
        <h3 className="waitlist-subtitle">
			{lang==='en'?'Share your referral code and get $3 everytime a friend joins' : 'Comparta su código de referencia y obtenga $3 cada vez que un amigo se una'}
        </h3>
          <form
            className="waitlist-form"
            onSubmit={(e) => submitButtonPressed(e)}>
				<div className="waitlist-input">
				  <p className="waitlist-input-text">
                  {
                    lang==='en'?'Please enter your email':'Por favor introduzca su correo electrónico'
                  }
                  </p>
				  {emailStatus === 0 && (
					<p className="waitlist-input-error">
					{lang==='en'?'There is an error with the email you entered.':'Hay un error con el correo electrónico que ingresaste.'}
					</p>
				  )}
				  <input
					type="email"
					placeholder="johndoe@gmail.com"
					onInput={handleEmailChange}
				  />
				</div>

                <div className="waitlist-input">
				  <p className="waitlist-input-text">
                  {
                    lang==='en'?'Please enter your referral code (optional)':'Por favor ingrese su código de referencia (opcional)'
                  }
                  </p>
				  <input
					type="text"
					placeholder="123ABC"
                    value={refCode}
				  />
				</div>
            <input
              type="submit"
				value={lang==='en'?'Register':'Inscribirse'}
				disable={
					true
				}
            />
          </form>
      </div>
    </div>
  );
}

export default Waitlist
