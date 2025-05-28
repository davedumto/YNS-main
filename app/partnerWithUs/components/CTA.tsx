const CTA: React.FC = () => {
  return (
    <section className="pt-[10.5rem] pb-[7.063rem] hidden lg:grid place-content-center">
      <main className="w-[33.625rem]">
        <h1 className="font-lato font-bold text-[46px] xl:text-[64px] leading-[62.6px] xl:leading-[76.8px] text-center ">
          Partnerships that Drive Innovation
        </h1>
        <p className="font-manrope pt-4 text-center text-[#00000099]">
          Partnerships empower us to expand our impact and deliver rich learning
          experiences.
        </p>
        <div className="flex justify-center">
        <button className="mt-7 lg:mt-12 px-10 py-[14px] xl:py-5 font-lato text-sm lg:text-xl rounded-[44.98px] text-[#FFFFFF] bg-[#1A1A1A]">
            Become a partner today
          </button>
        </div>
      </main>
    </section>
  )
}

export default CTA
