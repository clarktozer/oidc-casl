import {
    AuthenticationProvider as OidcProvider,
    oidcLog
} from "@axa-fr/react-oidc-context";
import React, { FC } from "react";
import { IAuthProvider } from "./types";

export const AuthenticationProvider: FC<IAuthProvider> = ({
    children,
    configuration,
    authenticating,
    callbackComponentOverride,
    notAuthenticated,
    notAuthorized,
    sessionLostComponent
}) => (
    <OidcProvider
        configuration={configuration}
        authenticating={authenticating}
        notAuthenticated={notAuthenticated}
        notAuthorized={notAuthorized}
        sessionLostComponent={sessionLostComponent}
        callbackComponentOverride={callbackComponentOverride}
        loggerLevel={
            process.env.NODE_ENV === "development"
                ? oidcLog.DEBUG
                : oidcLog.NONE
        }
    >
        {children}
    </OidcProvider>
);
