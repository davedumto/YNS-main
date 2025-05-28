"use client";
import Section from "@/components/layout/Section";
import React, { useState } from "react";
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/newsletter/subscribe`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email
        }),
      });

      // Always parse the response data first
      const result = await response.json();
      
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
        setFormData({ name: "", email: "" });
      } else {
        // Check if email is already subscribed
        const errorMessage = result.error || result.message || '';
        const isAlreadySubscribed = response.status === 409 || 
                                   errorMessage.toLowerCase().includes('already subscribed') ||
                                   errorMessage.toLowerCase().includes('already exists');

        if (isAlreadySubscribed) {
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
    }

    setIsLoading(false);
  };

  return (
    <Section id="newsletter">
      <div
        style={{ backgroundImage: 'url("/newsletterbg.png")' }}
        className="Newsletter flex flex-col p-4 py-16 lg:p-16 rounded-3xl justify-between bg-cover bg-no-repeat bg-top w-full h-full"
      >
        <div className="flex flex-col items-center lg:items-start lg:gap-[2em] gap-[1em]">
          <h1 className="font-cocon text-white text-[40px] lg:text-[50px] text-center lg:text-left">
            Join our Newsletter now
          </h1>
          <p className="font-[400] text-xl text-white lg:max-w-xl text-wrap text-center lg:text-left">
            Are you ready to take the next step in your learning journey? Sign
            up now and start exploring a world of opportunities with Young and
            Skilled Initiative. Your future begins here!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-[2em] items-center lg:items-start mt-[2em]">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="bg-white p-[1em] pl-10 rounded-full lg:w-[30em] w-full"
            placeholder="Enter your Name"
            disabled={isLoading}
            required
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="bg-white p-[1em] pl-10 rounded-full lg:w-[30em] w-full"
            placeholder="Enter your Email"
            disabled={isLoading}
            required
          />
          <div className="flex flex-col md:flex-row gap-[2em] items-center lg:items-start w-full">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-black py-[1em] px-[1.5em] text-white text-manrope text-[20px] rounded-full w-full lg:w-[15em] disabled:opacity-50"
            >
              {isLoading ? 'Joining...' : 'Join Newsletter'}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Newsletter;