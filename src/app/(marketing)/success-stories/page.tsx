import React from 'react';
import Link from 'next/link';
import { Star, Trophy, TrendingUp, Award, ArrowRight } from 'lucide-react';

export default function SuccessStoriesPage() {
    const testimonials = [
        {
            type: 'student',
            quote: 'I was struggling with mathematics, but after joining Elite Chess, my problem-solving improved so much. I\'m now top of my class!',
            author: 'Amani Ochieng',
            role: 'Age 12, Nairobi',
            achievement: 'District Chess Champion',
        },
        {
            type: 'parent',
            quote: 'The improvement in my daughter\'s concentration and confidence has been remarkable. Best investment we\'ve made in her education.',
            author: 'Mrs. Catherine Mwangi',
            role: 'Parent',
            achievement: 'Daughter improved from rank 15 to rank 3',
        },
        {
            type: 'school',
            quote: 'Elite Chess Ventures transformed our co-curricular program. Students are more engaged, disciplined, and our tournament results speak for themselves.',
            author: 'Mr. James Kimani',
            role: 'Principal, Westlands Academy',
            achievement: 'School won Regional Championship',
        },
        {
            type: 'student',
            quote: 'Chess taught me to think before I act, not just in games but in life. I\'ve become more patient and strategic in everything I do.',
            author: 'Brian Mutua',
            role: 'Age 15, Mombasa',
            achievement: 'National Under-16 Runner-up',
        },
        {
            type: 'parent',
            quote: 'My son has made friends from different schools through chess tournaments. It\'s given him confidence and social skills beyond academics.',
            author: 'Mr. Peter Otieno',
            role: 'Parent',
            achievement: 'Son plays for school team',
        },
        {
            type: 'school',
            quote: 'Having Elite Chess in our school has created a unique culture of strategic thinking. We\'ve seen improvements in overall academic performance.',
            author: 'Ms. Grace Akinyi',
            role: 'Deputy Principal, Parklands School',
            achievement: '85% of chess students improved grades',
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                            <span className="text-red-600">Success</span> Stories
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            Real results from students, parents, and schools across Kenya
                        </p>
                    </div>
                </div>
            </section>

            {/* Achievement Stats */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Trophy, value: '5', label: 'National Champions' },
                            { icon: Award, value: '100+', label: 'Tournament Winners' },
                            { icon: TrendingUp, value: '85%', label: 'Better Academic Performance' },
                            { icon: Star, value: '4.9/5', label: 'Parent Satisfaction' },
                        ].map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div key={stat.label} className="text-center">
                                    <Icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                                    <div className="font-accent font-bold text-3xl text-slate-900 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-600">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-slate-700 mb-4 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="border-t border-slate-200 pt-4">
                                    <p className="font-semibold text-sm text-slate-900">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-xs text-slate-500 mb-2">{testimonial.role}</p>
                                    <p className="text-xs text-red-600 font-semibold">
                                        ✓ {testimonial.achievement}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Achievements */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative">
                <div className="container max-w-5xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                            Notable <span className="text-red-600">Achievements</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600">
                            Our students' remarkable accomplishments
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: 'National Junior Championship Winner',
                                student: 'Sarah Wambui',
                                year: '2025',
                                description: 'Won the National Under-14 Championship after 18 months of training',
                            },
                            {
                                title: 'Regional Schools Champions',
                                student: 'Brookside Academy Team',
                                year: '2025',
                                description: 'Undefeated performance in regional inter-school competition',
                            },
                            {
                                title: 'International Tournament Participation',
                                student: 'Kevin Okoth',
                                year: '2024',
                                description: 'Represented Kenya at East African Junior Chess Championship',
                            },
                            {
                                title: 'Academic Excellence Award',
                                student: 'Multiple Students',
                                year: '2024-2025',
                                description: 'Over 80% of our students reported improved grades in mathematics',
                            },
                        ].map((achievement) => (
                            <div
                                key={achievement.title}
                                className="bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                        <Trophy className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="font-heading font-bold text-lg text-slate-900">
                                                {achievement.title}
                                            </h3>
                                            <span className="text-xs text-slate-500 flex-shrink-0">
                                                {achievement.year}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-red-600 mb-2">
                                            {achievement.student}
                                        </p>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Statistics */}
            <section className="py-16 md:py-20 bg-red-600">
                <div className="container max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
                            Our Impact by the Numbers
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
                        {[
                            { value: '2,000+', label: 'Students Trained', sublabel: 'Since 2010' },
                            { value: '50+', label: 'Partner Schools', sublabel: 'Across Kenya' },
                            { value: '95%', label: 'Satisfaction Rate', sublabel: 'Parent & School Feedback' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-accent font-bold text-4xl mb-2">{stat.value}</div>
                                <div className="text-base font-semibold mb-1">{stat.label}</div>
                                <div className="text-sm text-red-100">{stat.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container max-w-3xl text-center">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-4">
                        Start Your Success Story
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 mb-8">
                        Join the Elite Chess community and achieve your full potential
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 text-sm"
                    >
                        Get Started Today <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
