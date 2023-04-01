import { MDXComponents } from '../index';

import { Card } from './card';
import { Slot } from './slot';
import { QuestionSet } from './question-set';
import { Choises } from './choises';

export const MDXQuizComponents = {
    ...MDXComponents,
    Card,
    Question: Slot,
    QuestionSet,
    Choises,
    Choise: Slot,
    Answer: Slot
};
