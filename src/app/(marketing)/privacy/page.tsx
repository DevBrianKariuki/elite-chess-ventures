import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-8 h-8 text-red-600" />
                        <span className="text-sm font-medium text-red-600">Legal</span>
                    </div>
                    <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                        Privacy Policy
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

                        <h2>Introduction</h2>
                        <p>
                            Elite Chess Ventures ("we," "our," or "us") is committed to protecting the privacy and security
                            of personal information we collect from students, parents, schools, and visitors to our website.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                            you use our services or visit our website.
                        </p>

                        <h2>Information We Collect</h2>

                        <h3>Personal Information</h3>
                        <p>We may collect personal information that you voluntarily provide to us when you:</p>
                        <ul>
                            <li>Register for our chess programs or tournaments</li>
                            <li>Contact us through our website or email</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Participate in surveys or feedback forms</li>
                            <li>Attend our events or training sessions</li>
                        </ul>

                        <p>This information may include:</p>
                        <ul>
                            <li>Full name and age/date of birth (for students)</li>
                            <li>Parent/guardian contact information</li>
                            <li>Email address and phone number</li>
                            <li>School name and grade level</li>
                            <li>Chess skill level and tournament ratings</li>
                            <li>Payment information for program fees</li>
                            <li>Emergency contact details</li>
                        </ul>

                        <h3>Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                        <ul>
                            <li>IP address and browser type</li>
                            <li>Operating system and device information</li>
                            <li>Pages visited and time spent on our website</li>
                            <li>Referring website addresses</li>
                        </ul>

                        <h2>How We Use Your Information</h2>
                        <p>We use the collected information for the following purposes:</p>
                        <ul>
                            <li><strong>Program Administration:</strong> Managing registrations, class schedules, and tournament participation</li>
                            <li><strong>Communication:</strong> Sending program updates, newsletters, and important announcements</li>
                            <li><strong>Safety & Security:</strong> Maintaining student safety records and emergency contact information</li>
                            <li><strong>Service Improvement:</strong> Analyzing program effectiveness and student progress</li>
                            <li><strong>Payment Processing:</strong> Processing program fees and maintaining financial records</li>
                            <li><strong>Legal Compliance:</strong> Meeting regulatory requirements and safeguarding obligations</li>
                            <li><strong>Marketing:</strong> Sending promotional materials about our programs (with your consent)</li>
                        </ul>

                        <h2>Information Sharing and Disclosure</h2>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>

                        <h3>With Your Consent</h3>
                        <p>We may share your information when you have given us explicit permission to do so.</p>

                        <h3>Service Providers</h3>
                        <p>We may share information with trusted third-party service providers who assist us in:</p>
                        <ul>
                            <li>Payment processing</li>
                            <li>Email and newsletter services</li>
                            <li>Website hosting and maintenance</li>
                            <li>Tournament management software</li>
                        </ul>
                        <p>These providers are contractually obligated to protect your information and use it only for the services they provide to us.</p>

                        <h3>Schools and Educational Institutions</h3>
                        <p>For school-based programs, we may share student progress reports and attendance records with school administrators and teachers as part of our service agreement.</p>

                        <h3>Legal Requirements</h3>
                        <p>We may disclose information when required by law, court order, or to protect the safety of students, staff, or others.</p>

                        <h2>Children's Privacy</h2>
                        <p>
                            Protecting children's privacy is especially important to us. We comply with applicable data protection laws
                            concerning minors. We do not knowingly collect personal information from children under 13 without parental consent.
                        </p>
                        <ul>
                            <li>All student registrations require parent/guardian information and consent</li>
                            <li>Parents have the right to review, update, or delete their child's information</li>
                            <li>We implement additional safeguards for children's data</li>
                            <li>Marketing communications are sent only to parents/guardians, not directly to children</li>
                        </ul>

                        <h2>Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect personal information against
                            unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul>
                            <li>Encrypted data transmission and storage</li>
                            <li>Secure payment processing through certified providers</li>
                            <li>Regular security assessments and updates</li>
                            <li>Restricted access to personal information (staff only, on a need-to-know basis)</li>
                            <li>Background checks for all coaches and staff with student access</li>
                        </ul>

                        <h2>Your Rights and Choices</h2>
                        <p>You have the following rights regarding your personal information:</p>
                        <ul>
                            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your information (subject to retention requirements)</li>
                            <li><strong>Objection:</strong> Object to certain processing of your information</li>
                            <li><strong>Data Portability:</strong> Request transfer of your information to another service provider</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
                        </ul>
                        <p>To exercise these rights, please contact us using the information provided below.</p>

                        <h2>Cookies and Tracking Technologies</h2>
                        <p>
                            Our website uses cookies and similar technologies to enhance your browsing experience. Cookies are small
                            text files stored on your device. You can control cookie settings through your browser preferences.
                        </p>

                        <h2>Data Retention</h2>
                        <p>
                            We retain personal information for as long as necessary to fulfill the purposes outlined in this policy,
                            unless a longer retention period is required by law. When information is no longer needed, we securely
                            delete or anonymize it.
                        </p>

                        <h2>International Data Transfers</h2>
                        <p>
                            Your information is primarily stored and processed in Kenya. If we transfer information internationally,
                            we ensure appropriate safeguards are in place to protect your data.
                        </p>

                        <h2>Updates to This Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
                            The "Last Updated" date at the top of this page indicates when the policy was last revised. We encourage
                            you to review this policy regularly.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
                            please contact us:
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
                            For data protection matters, you may also contact the Office of the Data Protection Commissioner in Kenya.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
                <div className="container max-w-4xl text-center">
                    <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                        Questions About Our Privacy Practices?
                    </h2>
                    <p className="text-slate-600 mb-6">
                        We're here to help. Contact us for any privacy-related inquiries.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
