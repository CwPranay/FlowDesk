import { Star } from "lucide-react";
import Reveal from "./Reveal"

export default function SocialProof() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">

                    <p className="text-sm font-medium text-[#2563EB] mb-3">
                        Trusted by Teams
                    </p>

                    <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
                        Loved by fast-growing teams
                    </h2>

                    <p className="text-lg text-[#64748B]">
                        Thousands of professionals use FlowDesk
                        to manage projects and collaborate better.
                    </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Reveal delay={0.1}>
                        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                            </div>
                            <p className="text-[#0F172A] leading-relaxed mb-6">
                                “FlowDesk completely changed how our team manages work.
                                We’ve reduced delays and improved collaboration across departments.”
                            </p>
                            <div>
                                <p className="font-semibold text-[#0F172A]">
                                    Rahul Mehta
                                </p>
                                <p className="text-sm text-[#64748B]">
                                    Product Manager, Nimbus Labs
                                </p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                            </div>
                            <p className="text-[#0F172A] leading-relaxed mb-6">
                                “The simplicity and clarity of FlowDesk is unmatched.
                                It helped our remote team stay aligned and productive.”
                            </p>

                            <div>
                                <p className="font-semibold text-[#0F172A]">
                                    Ananya Sharma
                                </p>
                                <p className="text-sm text-[#64748B]">
                                    Operations Lead, BrightCore
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}