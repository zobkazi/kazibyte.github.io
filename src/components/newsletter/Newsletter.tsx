import React from 'react'

const Newsletter = () => {
  return (
      <div>
          <section>     
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">    
        {/* Component */}
        <div className="grid justify-items-center gap-4 bg-gray-100 p-8 sm:p-10 md:grid-cols-[1.5fr_1fr] md:justify-items-start md:p-16">
          <div className="text-center md:text-start">
            <h2 className="mb-2 text-3xl font-bold md:text-5xl">
              Get the latest and greatest
            </h2>
            <p className="max-w-md text-sm sm:test-base text-gray-500">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="max-w-md sm:max-w-full">
            <form
              name="email-form"
              method="get"
              className="relative mx-auto mb-4 flex w-full flex-col items-center justify-center sm:flex-row"
            >
              <input
                type="email"
                className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                placeholder="Enter your email"
              />
              <input
                type="submit"
                value="Notify me"
                className="relative right-0 w-full cursor-pointer rounded-md bg-black px-3 py-2 text-sm font-semibold text-white top-2 sm:top-auto sm:absolute sm:right-2 sm:w-24 lg:w-28 lg:text-base"
              />
            </form>
            <p className="text-sm text-gray-500 sm:text-base">
              Join a community of over <span>5000+ Webflow Developers</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Newsletter