import { MDXComponents } from '../index';

import { Playground } from './playground';
import { Slot } from './slot';
import { QuestionSet } from './question-set';
import { Choises } from './choises';

export const MDXQuizComponents = {
    ...MDXComponents,
    Playground,
    Question: Slot,
    QuestionSet,
    Choises,
    Choise: Slot,
    Answer: Slot
};
