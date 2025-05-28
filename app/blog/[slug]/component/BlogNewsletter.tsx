'use client'
import { Sketch_Annotation, Smile, Star4 } from "@/public/icons";
import { Star } from "@/public/images";
import Image from "next/image";
import React, { useState } from "react";
import Section from "@/components/layout/Section";
import toast from 'react-hot-toast';

const BlogNewsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Please fill in all fields', {
        duration: 4000,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error('Please enter a valid email address', {
        duration: 4000,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success toast with custom styling
        toast.success('🎉 Successfully joined the Newsletter! Welcome aboard!', {
          duration: 4000,
          style: {
            background: '#10B981',
            color: 'white',
            fontWeight: '500',
          },
        });
        // Reset form
        setFormData({ name: '', email: '' });
      } else {
        // Check if email is already subscribed (status 409 or specific message)
        if (response.status === 409 || 
            (data.error && data.error.toLowerCase().includes('already subscribed')) ||
            (data.message && data.message.toLowerCase().includes('already subscribed'))) {
          toast.error('📧 This email is already subscribed to our newsletter!', {
            duration: 4000,
            style: {
              background: '#F59E0B',
              color: 'white',
              fontWeight: '500',
            },
          });
        } else {
          // General error toast
          toast.error('😞 Something went wrong. Please try again later.', {
            duration: 4000,
          });
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      // Error toast
      toast.error('😞 Something went wrong. Please try again later.', {
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <div className="bg-dark-green overflow-hidden relative flex flex-col gap-y-7 items-center text-center px-6 py-24 md:py-20 text-white rounded-[20px]">
        <h1 className="font-cocon text-[2.5rem] lg:text-5xl font-medium z-10 relative">
          Want to enjoy more news like this?
        </h1>
        <p className="font-normal text-base font-manrope z-10 relative">
          Sign up for our newsletter and receive more updates like this.
        </p>

        {/* Input and Button */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 text-base w-full mt-5 z-10 relative">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={isLoading}
            className="py-4 placeholder:text-gray-400 text-black outline-none px-8 bg-white/90 backdrop-blur-sm rounded-[37px] lg:min-w-[300px] md:min-w-[250px] min-w-[200px] focus:bg-white focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
          
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading}
            className="py-4 placeholder:text-gray-400 text-black outline-none px-8 bg-white/90 backdrop-blur-sm rounded-[37px] lg:min-w-[300px] md:min-w-[250px] min-w-[200px] focus:bg-white focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
          
          <button
            type="submit"
            disabled={isLoading}
            className={`rounded-[37px] w-full md:w-auto py-4 px-7 text-black mt-4 md:mt-0 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${
              isLoading 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-white hover:bg-gray-100'
            }`}
            aria-label="Subscribe to newsletter"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {/* Decorative Images */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            width={40}
            height={40}
            src={Star}
            alt="Star Decoration"
            className="absolute left-[2%] lg:left-[5%] top-0 md:top-[25%] w-20"
            aria-hidden="true"
          />
          <Image
            width={40}
            height={40}
            src={Sketch_Annotation}
            alt="Sketch decoration"
            className="absolute left-0 bottom-0 w-20"
            aria-hidden="true"
          />
          <Image
            width={40}
            height={40}
            src={Smile}
            alt="Smile decoration"
            className="absolute right-0 top-[35%] md:top-[50%] w-20"
            aria-hidden="true"
          />
          <Image
            width={40}
            height={40}
            src={Star4}
            alt="Star decoration"
            className="absolute right-0 md:right-[25%] bottom-0 md:-bottom-5 w-20"
            aria-hidden="true"
          />
        </div>
      </div>
    </Section>
  );
};

export default BlogNewsletter;