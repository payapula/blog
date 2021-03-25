import { parseISO, format } from 'date-fns';
import { ReactElement } from 'react';

type Props = {
    dateString: string;
};

const DateFormatter = ({ dateString }: Props): ReactElement => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateFormatter;
