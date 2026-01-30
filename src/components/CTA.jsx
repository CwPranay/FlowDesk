import Reveal from "./Reveal"
export default function CTA() {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-8">
                <Reveal>
                <div className="bg-linear-to-r from-[#2563EB] to-[#1D4ED8] rounded-3xl p-16 text-center text-white shadow-lg">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to bring clarity to your work?
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                        Start using FlowDesk today and experience
                        faster collaboration, smarter planning,
                        and better project outcomes.
                    </p>

                    <button className="bg-white text-[#2563EB] px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition">
                        Start Your Free Trial
                    </button>
                </div>
                </Reveal>
            </div>
        </section>
    )
}