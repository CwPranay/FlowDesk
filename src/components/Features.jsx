import { CalendarCheck, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-medium text-[#2563EB] mb-3">
                        Features
                    </p>
                    <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
                        Everything your team needs to stay productive
                    </h2>
                    <p className="text-lg text-[#64748B]">
                        FlowDesk brings planning, collaboration, and insights
                        into one powerful workspace.
                    </p>

                </div>

                <div className="grid grid-cols-3 gap-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out rounded-2xl p-8 shadow-sm border border-[#E2E8F0]"
                    >

                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#EFF6FF] mb-6">
                            <CalendarCheck className="text-[#2563EB]" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                            Smart Planning
                        </h3>

                        <p className="text-[#64748B] leading-relaxed">
                            Create structured workflows, assign tasks,
                            and keep every project on schedule.
                        </p>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out rounded-2xl p-8 shadow-sm border border-[#E2E8F0]"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#EFF6FF] mb-6">
                            <Users className="text-[#2563EB]" size={24} />
                        </div>

                        <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                            Team Collaboration
                        </h3>

                        <p className="text-[#64748B] leading-relaxed">
                            Work together in real time with comments,
                            mentions, and shared dashboards.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out rounded-2xl p-8 shadow-sm border border-[#E2E8F0]"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#EFF6FF] mb-6">
                            <BarChart3 className="text-[#2563EB]" size={24} />
                        </div>

                        <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                            Performance Insights
                        </h3>

                        <p className="text-[#64748B] leading-relaxed">
                            Track progress, identify bottlenecks,
                            and optimize team performance with ease.
                        </p>

                    </motion.div>



                </div>
            </div>

        </section >
    )
}