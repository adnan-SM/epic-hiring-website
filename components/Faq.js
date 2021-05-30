/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
        id: 1,
        question: "Are there any pre-requisites for the course?",
        answer:
            "You just need to have an internet connection & an open mind.",
    },
    {
        id: 2,
        question: "How long will I have access to the course material?",
        answer:
            "You will have lifetime access to the materials, community & future updates.",
    },
    {
        id: 3,
        question: "What if I don't like it?",
        answer:
            "I am building this course because there is no quality resource out there which focuses on this particular topic. I would hate to see it not being useful for you, in that case I will be more than happy to refund you the entire amount.",
    },
    {
        id: 4,
        question: "How long is the course?",
        answer:
            "The course has 7 modules which should roughly be about 10-15hrs worth of content to go through.",
    },
    {
        id: 5,
        question: "I already am good at cracking interviews, will this course help me?",
        answer:
            "Of-course, The course is aimed at all developers. Already being good at interviews provides a solid foundation to build upon & use the advanced techniques to grow your career exponentially.",
    },
    {
        id: 6,
        question: "Is this course beneficial for new fresh out of college grads?",
        answer:
            "Not likely, this course is the most beneficial to developers who have had some industry experience already.",
    },
    {
        id: 7,
        question: "Is there a money back guarantee?",
        answer:
            "Absolutely, if this course doesn't help you then I don't want you to spend anything. I am so confident on the potential of the course that I offer a lifetime 100% refund.",
    },
    {
        id: 8,
        question: "What all does the course provide?",
        answer:
            "You will get access to videos & PDFs of all the 7 modules, complete access to the community(Premium Plan Only) & free upgrades to all future content/modules.",
    },
]

export default function Faqs() {
    return (
        <div className="bg-primary">
            <div className="max-w-6xl mx-auto px-4 sm:py-8 sm:px-6 lg:px-8 lg:pb-16">
                <div className="lg:max-w-3xl lg:mx-auto">
                    <h2 className="text-3xl text-accent-blue-light font-kaushan font-extrabold text-center tracking-tight sm:text-4xl mx-8 md:mx-auto md:text-5xl">Frequently asked questions</h2>
                    <p className="mt-4 font-overpass text-warm-yellow">
                        You have questions? I know I would. Here are a few most commonly asked! I know I am probably missing something, feel free to reach out if you have any!
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="font-extrabold text-highlight font-overpass text-xl">{faq.question}</dt>
                                <dd className="mt-3 text-warm-yellow">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
