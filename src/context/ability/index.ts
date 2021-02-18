import { createContextualCan } from '@casl/react';
import { createContext } from 'react';
import { AppAbility } from '../../config/types';

export const AbilityContext = createContext<AppAbility>(null);

export const Can = createContextualCan(AbilityContext.Consumer);
