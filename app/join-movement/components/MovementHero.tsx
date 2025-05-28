"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Group } from "@/public";
import toast from 'react-hot-toast';

export const MovementHero = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/movement/join-movement`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim()
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Success toast
      toast.success('🚀 Welcome to the movement! Your journey begins now!', {
        duration: 4000,
        style: {
          background: '#10B981',
          color: 'white',
          fontWeight: '500',
        },
      });
      
      // Reset form
      setFormData({ name: "", email: "" });
      
    } catch (error) {
      // Error toast
      toast.error('😞 Something went wrong. Please try again later.', {
        duration: 4000,
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-7 sm:gap-12 items-center justify-center w-full sm:w-[742px] font-manrope pt-4">
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <span className="pb-2 flex gap-4 items-center font-lato font-semibold text-xs sm:text-lg">
          <Image
            src={Group}
            alt=""
            className="w-[92px] h-8 sm:w-auto sm:h-auto"
          />{" "}
          Join 600+ others
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl text-center font-medium font-cocon">
          Join The Young and Skilled{" "}
          <span className="bg-movement-gradient text-black text-transparent bg-clip-text">
            Movement
          </span>
        </h1>
        <p className="w-[24em] text-center text-xs sm:text-base text-dark-ash leading-6 sm:leading-8">
          Take the next step in your learning journey, start exploring a world
          of opportunities!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-[0.75em] w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="bg-white px-[1.5em] sm:px-[2em] py-[1em] text-xs sm:text-base border border-gray-300 rounded-full placeholder:text-xs sm:placeholder:text-base placeholder:font-manrope placeholder:leading-8 w-full sm:w-[30em] focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
          placeholder="Enter your Name"
          disabled={isLoading}
          required
        />
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="bg-white px-[1.5em] sm:px-[2em] py-[1em] text-xs sm:text-base border border-gray-300 rounded-full placeholder:text-xs sm:placeholder:text-base placeholder:font-manrope placeholder:leading-8 w-full sm:w-[30em] focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
          placeholder="Enter your Email"
          disabled={isLoading}
          required
        />
        
        <button
          type="submit"
          disabled={isLoading}
          className={`py-[1em] px-[2.5em] lg:w-[20em] text-white text-manrope text-sm font-semibold rounded-full duration-300 transition-all ${
            isLoading 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-black hover:bg-black/80 active:scale-95'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="32" strokeDashoffset="32">
                  <animate attributeName="strokeDashoffset" dur="1s" values="32;0" repeatCount="indefinite"/>
                </circle>
              </svg>
              Joining...
            </span>
          ) : (
            'Join Movement'
          )}
        </button>
      </form>
    </div>
  );
};

export default MovementHero;