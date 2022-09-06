import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom} from "supertokens-auth-react";
import ThirdPartyEmailPassword, {Github, Google, Facebook, Apple} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import {
	BrowserRouter,
	Routes,
} from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

const LoginPage = () => {

	return(
		<SuperTokensWrapper>
			<BrowserRouter>
				<Routes>
					{getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
				</Routes>
			</BrowserRouter>
		</SuperTokensWrapper>
	)
}

export default LoginPage
