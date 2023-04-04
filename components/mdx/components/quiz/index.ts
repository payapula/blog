import { MDXComponents } from '../index';
import { Playground } from './playground';
import { Playground as DevPlayground } from './playground_dev';
import { Slot } from './slot';
import { QuestionSet } from './question-set';
import { Choises } from './choises';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PlayGroundComp = process.env.NODE_ENV === 'development' ? DevPlayground : Playground;

export const MDXQuizComponents = {
    ...MDXComponents,
    // Playground: PlayGroundComp,
    Playground,
    Question: Slot,
    QuestionSet,
    Choises,
    Choise: Slot,
    Answer: Slot
};
