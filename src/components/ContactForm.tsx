import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_sonbeel',  // Create this service ID in EmailJS
        'template_contact', // Create this template ID in EmailJS
        formRef.current,
        'public_key'       // Your EmailJS public key
      );
      toast.success('Thank you for your message! We will get back to you soon.');
      formRef.current.reset();
    } catch (error) {
      toast.error('Unable to send message. Please try again or contact us directly.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
          Your Email
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={11}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}