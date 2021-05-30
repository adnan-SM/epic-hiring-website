/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 3,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

export default function Faqs() {
    return (
        <div className="bg-primary">
            <div className="max-w-3xl mx-auto px-4 sm:py-8 sm:px-6 lg:px-8">
                <div className="lg:max-w-3xl lg:mx-auto">
                    <h2 className="text-3xl text-accent-blue-light font-kaushan font-extrabold text-center tracking-tight sm:text-4xl mx-8 md:mx-auto md:text-5xl">Frequently asked questions</h2>
                    <p className="mt-4 font-overpass text-warm-yellow">
                        You have questions? I know I would. Here are a few most commonly asked! I know I am probably missing something, feel free to reach out if you have any!
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="font-semibold text-white">{faq.question}</dt>
                                <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
