import { createContext } from 'react';

import { StarRatingContext } from '../models/types/context';

export const StarRatingCtx = createContext<Partial<StarRatingContext>>({});