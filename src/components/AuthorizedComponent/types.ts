import { Permissions } from '../../config/types';

export interface IAuthorizedComponent {
    permissions: Permissions[];
    redirectTo?: React.ReactNode;
}
