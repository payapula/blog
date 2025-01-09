import { EndorsementCard } from './endorsement-card';

export interface Endorsement {
    quote: string;
    author: string;
    role: string;
    sourceUrl: string;
}

const endorsements: Endorsement[] = [
    {
        author: 'Harini Kandadai',
        role: 'Manager, Technology, Publicis Sapient',
        quote: "Bharathi has maintained a clear focus on our overarching goals while balancing the urgent requirements of our client. His guidance and mentorship have been invaluable, ensuring that each team member feels supported and equipped to deliver high-quality features. Thanks to his commitment to quality and forward-thinking perspective, we've been able to deliver critical, front-end-driven features that sets a solid foundation for future client success.",
        sourceUrl: '/assets/homepage/mm_Harini.png'
    },
    {
        author: 'Yuvaraj Bh',
        role: 'Manager, Agile PM, Publicis Sapient',
        quote: "Bharathi embodies a strong learning mindset that motivates the team to continuously expand their knowledge of cutting-edge technologies. Bharathi's introduced the use of storybook for all Ul components reflects his commitment to maintaining high-quality deliverables through rigorous unit testing. His proactive approach to staying informed and contributing to projects enhances productivity, delivery speed, and overall quality.",
        sourceUrl: '/assets/homepage/mm_Yuvaraj.jpeg'
    },
    {
        author: 'Mary Campo',
        role: 'Design Lead, Publicis Sapient',
        quote: "Bharathi exemplifies the spirit of openness through his inclusive approach and eagerness to collaborate regardless of the question and problem at hand. He consistently shows respect and understanding in every interaction, always seeking to fully understand before offering solutions. Bharathi's openness to feedback and his positive attitude make him a truly exceptional team member and an asset to every project.",
        sourceUrl: '/assets/homepage/mm_Mary.jpeg'
    },
    {
        author: 'Uge Prabhu Govindaraj',
        role: 'Backend Lead, Publicis Sapient',
        quote: "One of the things that stands out about Bharathi is how he brings the front-end and back-end teams into regular conversations to bridge gaps and address challenges together. Bharathi is also always encouraging the team to think long-term by building reusable React components, which has saved us countless hours in development time. It's clear that Bharathi genuinely cares about lifting up everyone's contributions.",
        sourceUrl: '/assets/homepage/mm_Uge.jpeg'
    }
];

export default function ColleagueEndorsements() {
    return (
        <section className="mt-10 w-full">
            <div className="container mx-auto px-0 md:px-4">
                <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                    Colleague Endorsements
                </h2>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {endorsements.map((endorsement) => (
                        <EndorsementCard key={endorsement.author} endorsement={endorsement} />
                    ))}
                </div>
            </div>
        </section>
    );
}
