import { OidcSecure } from "@axa-fr/react-oidc-context";
import React, { FC } from "react";
import { AuthorizedRoute } from "../AuthorizedRoute";
import { IAuthenticatedRoute } from "./types";

export const AuthenticatedRoute: FC<IAuthenticatedRoute> = ({
    children,
    ...rest
}) => (
    <OidcSecure>
        <AuthorizedRoute {...rest}>{children}</AuthorizedRoute>
    </OidcSecure>
);
