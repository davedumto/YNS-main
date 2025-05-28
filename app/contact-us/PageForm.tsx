'use client';
import { useState } from 'react';

const PageForm = ({ className }: { className: string }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus({
                    type: 'success',
                    message: data.message || 'Thank you for your message! We will get back to you soon.'
                });
                // Reset form on success
                setFormData({
                    fullName: '',
                    email: '',
                    company: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.message || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`md:max-w-[70%] w-full  h-full flex flex-col mx-auto px-8 py-8 bg-white rounded-xl ${className} shadow-2xl`}>
            {/* Status Message */}
            {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg border ${
                    submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border-green-200' 
                        : 'bg-red-50 text-red-800 border-red-200'
                }`}>
                    <div className="flex items-center justify-between">
                        <span>{submitStatus.message}</span>
                        <button 
                            onClick={() => setSubmitStatus({ type: null, message: '' })}
                            className="ml-4 text-lg font-bold hover:opacity-70"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className=" flex flex-col">
                {/* Full Name and Email Row */}
                <div className="flex md:flex-row flex-col mb-4 gap-8">
                    <div className="w-full">
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John David"
                            className="shadow appearance-none w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                {/* Company and Subject Row */}
                <div className="flex md:flex-row flex-col mb-4 gap-8">
                    <div className="w-full">
                        <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name here"
                            className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                            Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="How can we help?"
                            className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                {/* Message Field */}
                <div className="w-full">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hello there, I would like to talk about how to..."
                        className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full h-64"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-4 font-bold py-4 px-6 rounded-full w-fit text-xs transition-all duration-200 ${
                        isSubmitting 
                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                            : 'bg-black/80 text-white/80 hover:bg-black hover:text-white hover:shadow-lg transform hover:scale-105'
                    }`}
                >
                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Sending...
                        </div>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
};

export default PageForm;