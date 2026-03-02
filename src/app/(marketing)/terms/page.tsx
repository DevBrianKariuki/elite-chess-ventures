import React from 'react';
import Link from 'next/link';
import { FileText, Mail, Phone } from 'lucide-react';

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-8 h-8 text-red-600" />
                        <span className="text-sm font-medium text-red-600">Legal</span>
                    </div>
                    <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-base text-slate-600">
                        Last updated: March 10, 2024
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 md:py-16 bg-white chess-pattern-bg relative">
                <div className="container max-w-4xl">
                    <div className="prose prose-slate prose-sm md:prose-base lg:prose-lg max-w-none
                        prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
                        prose-p:text-slate-600 prose-p:leading-relaxed
                        prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-slate-900 prose-strong:font-semibold
                        prose-ul:text-slate-600 prose-ol:text-slate-600
                        prose-li:marker:text-red-600
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3">

                        <h2>Agreement to Terms</h2>
                        <p>
                            Welcome to Elite Chess Ventures. By accessing our website or enrolling in our programs, you agree
                            to be bound by these Terms of Service. Please read them carefully before using our services. If you
                            do not agree with any part of these terms, you may not access our services.
                        </p>

                        <h2>Services Overview</h2>
                        <p>
                            Elite Chess Ventures provides chess education services including but not limited to:
                        </p>
                        <ul>
                            <li>School-based chess programs and curriculum integration</li>
                            <li>Private coaching and mentorship sessions</li>
                            <li>Tournament organization and hosting</li>
                            <li>Online chess training and resources</li>
                            <li>Chess camps and intensive training programs</li>
                            <li>Educational materials and content</li>
                        </ul>

                        <h2>Registration and Enrollment</h2>

                        <h3>Eligibility</h3>
                        <ul>
                            <li>Students of all ages are welcome to enroll in our programs</li>
                            <li>For students under 18, parent or guardian consent is required</li>
                            <li>Institutional programs require a formal agreement with the school or organization</li>
                            <li>All registrations are subject to program availability</li>
                        </ul>

                        <h3>Account Information</h3>
                        <ul>
                            <li>You must provide accurate, current, and complete information during registration</li>
                            <li>Parents/guardians are responsible for maintaining the confidentiality of account credentials</li>
                            <li>You agree to notify us immediately of any unauthorized use of your account</li>
                            <li>We reserve the right to refuse service or terminate accounts at our discretion</li>
                        </ul>

                        <h2>Payment Terms</h2>

                        <h3>Fees and Pricing</h3>
                        <ul>
                            <li>Program fees are clearly stated during registration and are subject to change</li>
                            <li>All fees are in Kenyan Shillings (KES) unless otherwise stated</li>
                            <li>Payment is required before program commencement unless alternative arrangements are made</li>
                            <li>We accept various payment methods including M-Pesa, bank transfer, and card payments</li>
                        </ul>

                        <h3>Refund Policy</h3>
                        <ul>
                            <li><strong>Full Refund:</strong> Available if cancellation occurs at least 7 days before program start</li>
                            <li><strong>50% Refund:</strong> Available if cancellation occurs 3-6 days before program start</li>
                            <li><strong>No Refund:</strong> For cancellations within 48 hours of program start</li>
                            <li><strong>Medical Exceptions:</strong> Refunds or credits may be offered with valid medical documentation</li>
                            <li>Refunds are processed within 14 business days</li>
                            <li>Tournament registration fees are non-refundable</li>
                        </ul>

                        <h3>Late Payments</h3>
                        <p>
                            Late payments may result in suspension from classes until payment is received. A late fee of 5%
                            may be applied to payments more than 7 days overdue.
                        </p>

                        <h2>Student Conduct and Expectations</h2>

                        <h3>Code of Conduct</h3>
                        <p>All students are expected to:</p>
                        <ul>
                            <li>Treat coaches, staff, and fellow students with respect</li>
                            <li>Arrive on time and be prepared for sessions</li>
                            <li>Follow safety guidelines and instructions from coaches</li>
                            <li>Maintain good sportsmanship during games and tournaments</li>
                            <li>Refrain from disruptive behavior during classes</li>
                            <li>Respect chess equipment and learning materials</li>
                        </ul>

                        <h3>Disciplinary Actions</h3>
                        <p>
                            Violations of our code of conduct may result in warnings, temporary suspension, or permanent
                            expulsion from programs without refund. We maintain a zero-tolerance policy for bullying,
                            violence, or discriminatory behavior.
                        </p>

                        <h2>Attendance and Participation</h2>
                        <ul>
                            <li>Regular attendance is essential for student progress</li>
                            <li>Parents must notify us in advance of absences when possible</li>
                            <li>Missed classes cannot typically be credited or refunded</li>
                            <li>Make-up sessions may be available for certain programs at coach discretion</li>
                            <li>Excessive absences may result in removal from the program</li>
                        </ul>

                        <h2>Safety and Safeguarding</h2>

                        <h3>Child Protection</h3>
                        <ul>
                            <li>All coaches undergo background checks and safeguarding training</li>
                            <li>We maintain strict child protection policies</li>
                            <li>Parents/guardians must provide emergency contact information</li>
                            <li>Any safeguarding concerns will be reported to appropriate authorities</li>
                        </ul>

                        <h3>Health and Medical</h3>
                        <ul>
                            <li>Parents must disclose any relevant medical conditions or allergies</li>
                            <li>We are not liable for injuries resulting from student misconduct</li>
                            <li>Basic first aid is available on-site during programs</li>
                            <li>In case of medical emergency, we will contact parents and emergency services</li>
                        </ul>

                        <h2>Intellectual Property</h2>
                        <ul>
                            <li>All course materials, content, and resources are the property of Elite Chess Ventures</li>
                            <li>Students may use provided materials for personal learning only</li>
                            <li>Redistribution, reproduction, or commercial use of our materials is prohibited</li>
                            <li>The Elite Chess Ventures name and logo are registered trademarks</li>
                        </ul>

                        <h2>Photography and Media</h2>
                        <p>
                            During programs and events, we may take photographs and videos for promotional purposes.
                            By enrolling in our programs, you consent to the use of such media unless you provide
                            written notice of your objection. You may opt out at any time by contacting us.
                        </p>

                        <h2>Liability and Indemnification</h2>

                        <h3>Limitation of Liability</h3>
                        <p>
                            While we take reasonable precautions to ensure student safety, Elite Chess Ventures is not
                            liable for injuries, accidents, or losses occurring during programs except in cases of proven
                            negligence. Parents/guardians accept responsibility for ensuring their children follow safety
                            guidelines.
                        </p>

                        <h3>Indemnification</h3>
                        <p>
                            You agree to indemnify and hold Elite Chess Ventures, its staff, and coaches harmless from any
                            claims, damages, or expenses arising from your or your child's violation of these terms or
                            misconduct during programs.
                        </p>

                        <h2>Tournament-Specific Terms</h2>
                        <ul>
                            <li>Tournament participants must follow FIDE (World Chess Federation) rules</li>
                            <li>Tournament fees are non-refundable</li>
                            <li>Players must arrive at least 30 minutes before scheduled matches</li>
                            <li>Unsportsmanlike conduct may result in disqualification</li>
                            <li>Tournament organizers' decisions are final</li>
                            <li>Age verification may be required for youth categories</li>
                        </ul>

                        <h2>Online Services</h2>
                        <p>For online coaching and digital resources:</p>
                        <ul>
                            <li>Stable internet connection is the student's responsibility</li>
                            <li>We use secure video conferencing platforms</li>
                            <li>Recording of sessions without permission is prohibited</li>
                            <li>Technical issues may occasionally disrupt services</li>
                            <li>Login credentials must not be shared</li>
                        </ul>

                        <h2>Privacy and Data Protection</h2>
                        <p>
                            Your privacy is important to us. Please review our <Link href="/privacy">Privacy Policy</Link> to
                            understand how we collect, use, and protect your personal information. By using our services,
                            you also consent to our privacy practices.
                        </p>

                        <h2>Program Changes and Cancellations</h2>
                        <ul>
                            <li>We reserve the right to modify program schedules with reasonable notice</li>
                            <li>If we cancel a program, enrolled students will receive full refunds or credits</li>
                            <li>Coach substitutions may occur due to illness or unavailability</li>
                            <li>Weather-related cancellations will be communicated promptly</li>
                        </ul>

                        <h2>Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend access to our services immediately, without prior
                            notice, for conduct that we believe violates these Terms of Service or is harmful to other
                            students, staff, or our business operations.
                        </p>

                        <h2>Dispute Resolution</h2>
                        <ul>
                            <li>We encourage resolving disputes directly through communication with program coordinators</li>
                            <li>Unresolved disputes will be subject to mediation before legal action</li>
                            <li>These terms are governed by the laws of the Republic of Kenya</li>
                            <li>Kenyan courts have exclusive jurisdiction over disputes</li>
                        </ul>

                        <h2>Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms of Service at any time. Changes will be posted on
                            our website with an updated "Last Updated" date. Continued use of our services after changes
                            constitutes acceptance of the modified terms.
                        </p>

                        <h2>Severability</h2>
                        <p>
                            If any provision of these Terms is found to be unenforceable or invalid, that provision will be
                            limited or eliminated to the minimum extent necessary, and the remaining provisions will remain
                            in full force and effect.
                        </p>

                        <h2>Contact Information</h2>
                        <p>
                            For questions about these Terms of Service or any aspect of our programs, please contact us:
                        </p>

                        <div className="bg-slate-50 rounded-xl p-6 not-prose mt-8">
                            <h3 className="font-heading font-bold text-lg text-slate-900 mb-4">Elite Chess Ventures</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-red-600" />
                                    <a href="mailto:elitechessventures@gmail.com" className="text-sm text-slate-600 hover:text-red-600 transition-colors">elitechessventures@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-red-600" />
                                    <a href="tel:0111449301" className="text-sm text-slate-600 hover:text-red-600 transition-colors">0111-449301</a>
                                </div>
                            </div>
                        </div>

                        <p className="mt-8">
                            By enrolling in Elite Chess Ventures programs, you acknowledge that you have read, understood,
                            and agree to be bound by these Terms of Service.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
                <div className="container max-w-4xl text-center">
                    <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                        Ready to Get Started?
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Join our chess programs and start your journey to becoming a strategic thinker.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/programs"
                            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors"
                        >
                            View Programs
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-semibold text-sm hover:border-red-600 hover:text-red-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
