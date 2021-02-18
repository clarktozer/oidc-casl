import { useReactOidc } from "@axa-fr/react-oidc-context";
import jwt from "jsonwebtoken";
import React, { FC, useMemo } from "react";
import { defineRulesFor } from "../../config";
import { AbilityContext } from "../../context";
import { IDecodedToken } from "../../context/ability/types";

export const AuthorizationProvider: FC = ({ children }) => {
    const { oidcUser } = useReactOidc();

    const decodedToken = useMemo(
        () => jwt.decode(oidcUser?.access_token) as IDecodedToken,
        [oidcUser]
    );

    const ability = useMemo(() => {
        if (decodedToken) {
            return defineRulesFor(decodedToken.role);
        }

        return null;
    }, [decodedToken]);

    return (
        <AbilityContext.Provider value={ability}>
            {children}
        </AbilityContext.Provider>
    );
};
