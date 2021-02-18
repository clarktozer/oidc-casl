import { RouteProps } from 'react-router-dom';
import { Permissions } from '../../config/types';

export interface IAuthorizedRoute extends RouteProps {
    permissions: Permissions[];
    redirectTo?: string;
}
