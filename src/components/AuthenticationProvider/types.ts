import { UserManagerSettings } from 'oidc-client';
import { ComponentType } from 'react';

export interface IAuthProvider {
    configuration: UserManagerSettings;
    notAuthenticated?: ComponentType;
    notAuthorized?: ComponentType;
    authenticating?: ComponentType;
    callbackComponentOverride?: ComponentType;
    sessionLostComponent?: ComponentType;
}
