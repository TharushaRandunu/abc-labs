import React from 'react'

const Contact = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-md">
      <h2 className="heading text-center">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text__para">
        Send us your problems and feedback
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label htmlFor="email" className="form__label">Your Email</label>
          <input type="email" id="email" placeholder="exampleemailaddress@gmail.com" className="form__input mt-1 rounded-md" />
        </div>
        <div>
          <label htmlFor="subject" className="form__label">Subject</label>
          <input type="text" id="subject" placeholder="How can we help you" className="form__input mt-1 rounded-md" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="form__label">message</label>
          <textarea rows='6' type="text" id="message" placeholder="Your problem or Feedback" className="form__input mt-1 rounded-md" />
        </div>
        <button type="submit" className="btn rounded sm:w-fit">Submit</button>
      </form>
    </div>
  )
}

export default Contact