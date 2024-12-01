import { Card, CardContent } from '@/components/shadcn/card';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
    name: string;
    role: string;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Harini Kandadai',
        role: 'Manager, Technology',
        content:
            "Bharathi has maintained a clear focus on our overarching goals while balancing the urgent requirements of our client. His guidance and mentorship have been invaluable, ensuring that each team member feels supported and equipped to deliver high-quality features. Thanks to his commitment to quality and forward-thinking perspective, we've been able to deliver critical, front-end-driven features that sets a solid foundation for future client success."
    },
    {
        name: 'Yuvaraj Bh',
        role: 'Manager, Agile Program Management',
        content:
            "Bharathi embodies a strong learning mindset that motivates the team to continuously expand their knowledge of cutting-edge technologies. Bharathi's introduced the use of storybook for all Ul components reflects his commitment to maintaining high-quality deliverables through rigorous unit testing. His proactive approach to staying informed and contributing to projects enhances productivity, delivery speed, and overall quality."
    },
    {
        name: 'Mary Campo',
        role: 'Design Lead',
        content:
            "Bharathi exemplifies the spirit of openness through his inclusive approach and eagerness to collaborate regardless of the question and problem at hand. He consistently shows respect and understanding in every interaction, always seeking to fully understand before offering solutions. Bharathi's openness to feedback and his positive attitude make him a truly exceptional team member and an asset to every project."
    },
    {
        name: 'Uge Prabhu Govindaraj',
        role: 'Backend Lead',
        content:
            "One of the things that stands out about Bharathi is how he brings the front-end and back-end teams into regular conversations to bridge gaps and address challenges together. Bharathi is also always encouraging the team to think long-term by building reusable React components, which has saved us countless hours in development time. It's clear that Bharathi genuinely cares about lifting up everyone's contributions."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="w-full py-4 md:py-8 lg:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                    Colleague Endorsements
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className=" bg-white/10 shadow-lg backdrop-blur-lg">
                            <CardContent className="flex h-full flex-col pt-6">
                                <FaQuoteLeft className="mb-4 h-8 w-8 text-sky-400 dark:text-yellow-600" />
                                <p className="mb-4 text-lg">{testimonial.content}</p>
                                <div className="mt-auto self-end">
                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
