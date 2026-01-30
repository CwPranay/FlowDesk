export default function Hero() {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 bg-white rounded-3xl p-16 shadow-sm gap-16 items-center">
                <div>
                    <h1 className="text-5xl font-bold max-w-xl leading-tight mb-6 text-[#0F172A]">
                        <span className="text-[#2563EB]">Workflows</span> that keep your team moving

                    </h1>
                    <p className="text-lg text-[#64748B] mb-8 max-w-lg">Plan, track, and deliver projects without chaos.
                        FlowDesk helps your team stay aligned and focused.
                    </p>

                    <div className="flex items-center gap-4">
                        <button className="bg-[#2563EB] cursor-pointer text-white px-6 py-3 hover:-translate-y-px hover:shadow-md rounded-md font-medium hover:opacity-90 transition">
                            Get Started Free
                        </button>
                        <button className="px-6 py-3 rounded-md font-medium text-[#2563EB]  hover:bg-[#EFF6FF] transition">
                            View Demo
                        </button>


                    </div>

                    <p className="mt-5 text-sm text-[#64748B]">
                        No credit card required · Free 14-day trial
                    </p>

                </div>

                <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm">
                    <div className="bg-white rounded-lg p-4 border border-[#E2E8F0]">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-[#0F172A]">
                                Team Dashboard
                            </h3>
                            <span className="text-sm text-[#64748B]">
                                Jan 2026
                            </span>
                        </div>
                        <div className="w-full h-2 bg-[#E2E8F0] rounded-full mb-4">
                            <div className="h-2 bg-[#2563EB] rounded-full w-2/3"></div>
                        </div>


                        <div className="space-y-3 text-sm text-[#0F172A]">
                            <div className="flex justify-between">
                                <span className="font-medium">
                                    Design System
                                </span>
                                <span className="text-[#2563EB]">
                                    In Progress
                                </span>

                            </div>
                            <div className="flex justify-between">
                                <span>API Integration</span>
                                <span className="text-green-600">Completed</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Landing Page</span>
                                <span className="text-yellow-500">Review</span>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section >
    )
}