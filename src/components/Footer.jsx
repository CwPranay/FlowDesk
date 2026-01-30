export default function Footer() {
    return (
        <footer className="bg-white border-t border-[#E2E8F0] py-16">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid grid-cols-1 md:grid-cols-4  gap-8 mb-12">


                    <div>

                        <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                            FlowDesk
                        </h3>

                        <p className="text-sm text-[#64748B] max-w-xs">
                            A modern workspace to plan, collaborate,
                            and deliver better projects.
                        </p>

                    </div>


                    <div>

                        <h4 className="text-sm font-semibold text-[#0F172A] mb-4">
                            Product
                        </h4>

                        <ul className="space-y-3 text-sm text-[#64748B]">

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Features
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Pricing
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Integrations
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Roadmap
                            </li>

                        </ul>

                    </div>


                    <div>

                        <h4 className="text-sm font-semibold text-[#0F172A] mb-4">
                            Company
                        </h4>

                        <ul className="space-y-3 text-sm text-[#64748B]">

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                About
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Careers
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Blog
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Contact
                            </li>

                        </ul>

                    </div>


                    <div>

                        <h4 className="text-sm font-semibold text-[#0F172A] mb-4">
                            Resources
                        </h4>

                        <ul className="space-y-3 text-sm text-[#64748B]">

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Documentation
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Help Center
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                Community
                            </li>

                            <li className="hover:text-[#0F172A] cursor-pointer">
                                API Status
                            </li>

                        </ul>

                    </div>

                </div>


                <div className="pt-8 border-t border-[#E2E8F0] flex justify-between items-center text-sm text-[#64748B]">

                    <p>
                        © {new Date().getFullYear()} FlowDesk. All rights reserved.
                    </p>

                    <div className="flex gap-6">

                        <span className="hover:text-[#0F172A] cursor-pointer">
                            Privacy Policy
                        </span>

                        <span className="hover:text-[#0F172A] cursor-pointer">
                            Terms of Service
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
}
