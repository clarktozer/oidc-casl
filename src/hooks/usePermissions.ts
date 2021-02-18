import { useAbility } from '@casl/react';
import { AbilityContext } from '../context';

export const usePermissions = () => useAbility(AbilityContext);
