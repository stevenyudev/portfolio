import Input from '@/components/UI/Input';
import Textarea from './UI/Textarea';
import emailjs from '@emailjs/browser';
import styles from '@/styles/contact.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

/**
 * Contact form component
 *
 * This component renders a contact form with fields for
 * name, email, company, LinkedIn, and message.
 * When the form is submitted, it will send an email using EmailJS.
 *
 * @returns {JSX.Element} The contact form component
 */
const Contact = () => {
  // State for whether the form has been submitted or not
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State for whether there was an error when submitting the form or not
  const [formSubmissionError, setFormSubmissionError] = useState(false);

  // Zod schema for the contact form
  const contactFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email('Invalid email address'),
    company: z.string().optional(),
    linkedIn: z
      .union([
        z.literal(''), // Allow for optional empty strings
        z.url({
          protocol: /^https$/,
          hostname: /^(www\.)*linkedin.com$/,
          error: 'Must be a LinkedIn URL',
        }),
      ])
      .optional(),
    message: z.string().min(1, 'Message is required'),
  });

  // Use Form from react-hook-form and set resolver and default schema
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  /**
   * Handle form submission
   * @param {z.infer<typeof contactFormSchema>} data - The form data
   * @returns {Promise<void>} A promise that resolves when the form is submitted
   */
  const onSubmitHandler = handleSubmit(async (data) => {
    // Clear any previous errors
    if (formSubmissionError) setFormSubmissionError(false);

    // Send email
    const response = await emailjs.send(
      process.env.PUBLIC_EMAILJS_SERVICE_ID,
      process.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      data,
      {
        publicKey: process.env.PUBLIC_EMAILJS_KEY,
      },
    );

    // Handle response
    if (response.status === 200) setFormSubmitted(true);
    else {
      // Handle error
      console.error(response);
      setFormSubmissionError(true);
    }
  });

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      {/* Success message when form is filled */}
      {formSubmitted ? (
        <div
          className={`flex flex-column flex-center ${styles['contact-form-success']}`}
        >
          <h3>Your message was submitted successfully.</h3>
          <p>
            Thank you for taking the time to read through my portfolio and send
            a message. I will be in touch soon.
          </p>
        </div>
      ) : (
        // Contact Form
        <form onSubmit={onSubmitHandler} className={styles['contact-form']}>
          {/* Loading or submitting message */}
          {(isLoading || isSubmitting) && (
            <div className={styles['contact-form-submitting']}>
              <span className="position-center">
                {isSubmitting ? 'Submitting' : 'Loading'}...
              </span>
            </div>
          )}

          {/* Input fields, half the width of the form */}
          <div
            className={`flex flex-column-to-row ${styles['contact-inputs']}`}
          >
            <Input
              label="Full Name"
              inputProps={register('name')}
              error={errors.name}
              required
            />
            <Input
              label="Email"
              inputProps={register('email')}
              error={errors.email}
              required
            />
            <Input
              label="Company"
              inputProps={register('company')}
              error={errors.company}
            />
            <Input
              label="LinkedIn"
              inputProps={register('linkedIn')}
              error={errors.linkedIn}
            />
          </div>

          {/* Message field and button, full width of the form */}
          <div className={`flex flex-column ${styles['contact-full-width']}`}>
            <Textarea
              label="Message"
              inputProps={register('message')}
              error={errors.message}
              required
            />
            <button type="submit" disabled={isLoading || isSubmitting}>
              Send Message
            </button>
          </div>

          {/* Error message */}
          {formSubmissionError && (
            <p className={styles['contact-form-error']}>
              There was an error when trying to submit the form
            </p>
          )}
        </form>
      )}
    </section>
  );
};
export default Contact;
