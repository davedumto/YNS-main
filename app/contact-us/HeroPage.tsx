import Image from "next/image";

interface HeroPageProps {
    className: string;
}

const HeroPage: React.FC<HeroPageProps> = ({ className }) => {
    return (
        <div className={`bg-[url('/images/greenbackground.svg')] w-full h-[50vh] py-[1em] lg:h-[60vh] flex flex-col md:justify-center items-center justify-center md:items-center border px-8 ${className}`}>
            <h1 className="text-white text-[40px] w-[210px] md:w-full md:text-center md:text-[60px] font-cocon py-4 md:leading-[32px] mt-6 leading-[40px]">
                Let&apos;s Get In <span className="bg-touch-color-gradient text-transparent bg-clip-text">Touch</span>
            </h1>
            <p className="text-white font-manrope text-[16px] md:mt-0 md:w-[65%] lg:w-[35%] w-[335px] leading-loose tracking-wide md:text-center text-left font-light">
                We&apos;re thrilled to hear from you! Whether you have a question about Young & Skilled Initiative, need assistance, or just want to say hello, we&apos;re here and ready to help.
            </p>

            <Image
                src="/images/Star1.svg"
                width={100}
                height={100}
                alt="arrow image"
                className="absolute top-2 md:top-20 md:right-8 lg:top-10 lg:right-8 animate-spin-slow w-[56px] h-[56px] lg:w-[100px] lg:h-[100px] right-8"
            />

            <Image src="/images/male_one_illustration.svg" width={69.13} height={100} alt="arrow image" className="absolute hidden lg:block lg:bottom-10 lg:right-96 lg:w-[69.13px] lg:h-[100px] w-[48.15px] md:bottom-20 h-[48.15px] bottom-36 right-48" />
            <Image src="/images/female_one_illustration.svg" width={92.63} height={100} alt="arrow image" className="absolute hidden lg:block lg:top-48 lg:right-24 lg:w-[92.63px] lg:h-[100px] md:bottom-36 md:right-20 w-[64.51px] h-[64.51px] bottom-28 right-8" />
            <Image src="/images/male_two_illustration.svg" width={78.45} height={100} alt="arrow image" className="absolute hidden lg:block lg:bottom-24 bottom-10 left-24 lg:left-72 lg:w-[78.45] lg:h-[100px] md:left-56 md:bottom-20 w-[55.06px] h-[55.06px]" />
            <Image src="/images/female_two_illustration.svg" width={80.51} height={100} alt="arrow image" className="absolute hidden lg:block md:bottom-28 md:left-28 lg:top-32 lg:left-20 lg:bottom-8 bottom-28 left-2 md:w-[80.51] md:h-[100px] w-[56.5px] h-[56.5px]" />
        </div>
    );
};

export default HeroPage;