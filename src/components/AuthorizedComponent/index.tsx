import React, { FC, useMemo } from "react";
import { usePermissions } from "../../hooks";
import { IAuthorizedComponent } from "./types";

export const AuthorizedComponent: FC<IAuthorizedComponent> = ({
    children,
    permissions,
    redirectTo
}) => {
    const ability = usePermissions();

    const isAuthorized = useMemo(() => {
        const ands = permissions.map(permission =>
            Object.keys(permission).every(subject =>
                ability.can(permission[subject], subject)
            )
        );

        return ands.some(Boolean);
    }, [ability, permissions]);

    return <>{isAuthorized ? children : redirectTo}</>;
};
