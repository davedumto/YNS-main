"use client";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TeamMember } from "@/types";
import { teamMembers } from "@/data";
import Image from "next/image";
import Section from "@/components/layout/Section";

const TeamMembers: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember>(teamMembers[0]);

  const handleHover = (member: TeamMember) => {
    setActiveMember(member);
  };

  return (
    <Section id="team">
      <div className="flex flex-col w-full gap-8 lg:py-16 pt-[5em] lg:pt-[10em] container mx-auto ">
        {/* When being added to the main page, the adding px will be removed to use the px from the page itself, but for view and reference purposes i added it*/}
        <h1 className="text-center md:text-left text-3xl md:text-[2.5rem] font-medium font-cocon">
          Meet The <span className="text-dark-orange">Dream</span> Team!
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - Active Image */}
          <div className="h-full w-full md:w-[45%]">
            <Image
              src={activeMember.image}
              alt={activeMember.name}
              width={500}
              height={400}
              className="h-auto object-cover rounded-[1.25rem]"
            />
          </div>

          {/* Right side - List of team members */}
          <div className="flex flex-col gap-y-8 w-full md:w-[55%] lg:pt-0 lg:p-4 ">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`flex justify-between px-4 py-2 md:py-3 xl:py-4 gap-5 xl:pr-12 items-center w-full border rounded-lg transition-colors duration-700 ease-linear 
              ${
                activeMember.id === member.id
                  ? "border bg-[#F2A300] text-white"
                  : "border-green-600"
              }`}
                onMouseEnter={() => handleHover(member)}
              >
                <div
                  className={`text-[1.5rem] md:text-2xl lg:text-3xl xl:text-[2.5rem] font-medium font-cocon w-1/3 ${
                    activeMember.id === member.id ? "" : "text-dark-green"
                  }`}
                >
                  {member.name}
                </div>
                <div
                  className={`text-left text-md md:text-[1.25rem] lg:text-2xl xl:text-3xl w-1/3 flex justify-center md:justify-start  ${
                    activeMember.id === member.id ? "" : "text-dark-green"
                  }`}
                >
                  {member.role}
                </div>

                <div className="flex space-x-1 w-1/3 justify-end">
                  <a
                    href={member.instagram}
                    target="_blank"
                    className={`p-2 md:p-3 xl:p-4 text-xl rounded-[0.625rem] transition-colors duration-500 ease-linear ${
                      activeMember.id === member.id
                        ? "bg-dark-green text-[#F2A300]"
                        : "bg-dark-green text-white"
                    }`}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className={`p-2 md:p-3 xl:p-4 text-xl rounded-[0.625rem] transition-colors duration-500 ease-linear ${
                      activeMember.id === member.id
                        ? "bg-dark-green text-[#F2A300] "
                        : "bg-dark-green text-white"
                    }`}
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TeamMembers;
