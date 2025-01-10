import { Card, CardContent } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { FiExternalLink } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { Endorsement } from './colleague-endorsements';

interface EndorsementCardProps {
    endorsement: Endorsement;
}

export function EndorsementCard({ endorsement }: EndorsementCardProps) {
    return (
        <Card className="relative">
            <Button
                asChild
                size="icon"
                variant="link"
                className="text-muted-foreground hover:text-foreground absolute right-4 top-4 h-8 w-8 text-teal-800 dark:text-teal-300">
                <a
                    href={endorsement.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source of ${endorsement.author}'s endorsement`}>
                    <FiExternalLink className="h-5 w-5" />
                </a>
            </Button>

            <CardContent className="flex h-full flex-col p-6">
                <FaQuoteLeft className="mb-4 h-8 w-8 text-sky-400 dark:text-yellow-600" />
                <blockquote className="sm:text-md mb-4 text-base italic md:text-lg">
                    {endorsement.quote}
                </blockquote>
                <figcaption className="mt-auto flex flex-col items-end self-end">
                    <h3 className="text-xl font-semibold">{endorsement.author}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{endorsement.role}</p>
                </figcaption>
            </CardContent>
        </Card>
    );
}
