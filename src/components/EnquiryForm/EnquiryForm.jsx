'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../Icon/Icon';
import { submitQuote } from '@/lib/submitQuote';
import styles from './EnquiryForm.module.scss';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  make: '',
  model: '',
  year: '',
  partNumber: '',
  message: '',
};

const currentYear = new Date().getFullYear();

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  else if (values.fullName.trim().length < 2) errors.fullName = 'Name is too short.';

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (!values.phone.trim()) errors.phone = 'Phone number is required.';
  else if (phoneDigits.length < 10) errors.phone = 'Enter a valid phone number.';

  if (!values.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email.';

  if (!values.make.trim()) errors.make = 'Vehicle make is required.';
  if (!values.model.trim()) errors.model = 'Vehicle model is required.';

  const yearNum = Number(values.year);
  if (!values.year) errors.year = 'Year is required.';
  else if (!Number.isInteger(yearNum) || yearNum < 1950 || yearNum > currentYear + 1) {
    errors.year = `Enter a year between 1950 and ${currentYear + 1}.`;
  }

  return errors;
}

export default function EnquiryForm() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      const next = { ...errors };
      delete next[name];
      setErrors(next);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const fieldErr = validate(values)[name];
    setErrors((prev) => (fieldErr ? { ...prev, [name]: fieldErr } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched(
      Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    );
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    setSubmitError('');

    const result = await submitQuote(values);
    if (result.success) {
      setSuccess(true);
    } else {
      setSubmitError(result.message || 'Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  const reset = () => {
    setValues(initialForm);
    setErrors({});
    setTouched({});
    setSuccess(false);
    setSubmitError('');
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              className={styles.success}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.successIcon} aria-hidden="true">
                <Icon name="check" size={36} stroke={3} />
              </div>
              <h3 className={styles.successTitle}>Quote Request Received</h3>
              <p className={styles.successText}>
                Thanks{values.fullName ? `, ${values.fullName.split(' ')[0]}` : ''}. One of our specialists will reach out within 24 hours with a tested-part quote and shipping timeline.
              </p>
              <button type="button" className={styles.successBtn} onClick={reset}>
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              className={styles.form}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <header className={styles.header}>
                <span className={styles.eyebrow}>Get a Free Quote</span>
                <h2 className={styles.title}>Find Your Part in Minutes</h2>
                <p className={styles.sub}>
                  No spam. No pressure. Just a real quote from a real specialist.
                </p>
              </header>

              <div className={styles.row}>
                <Field
                  label="Full Name"
                  name="fullName"
                  required
                  value={values.fullName}
                  error={touched.fullName && errors.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  placeholder="John Carter"
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                  value={values.phone}
                  error={touched.phone && errors.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="tel"
                  placeholder="(555) 123-4567"
                />
              </div>

              <Field
                label="Email Address"
                name="email"
                type="email"
                required
                value={values.email}
                error={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                placeholder="john@example.com"
              />

              <div className={styles.row3}>
                <Field
                  label="Make"
                  name="make"
                  required
                  value={values.make}
                  error={touched.make && errors.make}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ford"
                />
                <Field
                  label="Model"
                  name="model"
                  required
                  value={values.model}
                  error={touched.model && errors.model}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="F-150"
                />
                <Field
                  label="Year"
                  name="year"
                  type="number"
                  required
                  value={values.year}
                  error={touched.year && errors.year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="2018"
                  min="1950"
                  max={currentYear + 1}
                />
              </div>

              <Field
                label="Part Number"
                name="partNumber"
                optional
                value={values.partNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="If known — e.g. JL3Z-6007-A"
              />

              <Field
                label="Message"
                name="message"
                optional
                textarea
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us what you need — engine, transmission, brakes, etc."
              />

              {submitError && (
                <p className={styles.errorMsg} role="alert">
                  {submitError}
                </p>
              )}

              <button type="submit" className={styles.submit} disabled={submitting}>
                {submitting ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Request Quote
                    <Icon name="arrowRight" size={18} stroke={2.4} />
                  </>
                )}
              </button>

              <p className={styles.disclaimer}>
                By submitting, you agree to be contacted regarding your auto parts inquiry.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  optional,
  textarea,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  ...rest
}) {
  const id = `field-${name}`;
  return (
    <div className={`${styles.field} ${error ? styles.fieldError : ''}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required} aria-hidden="true">*</span>}
        {optional && <span className={styles.optional}>Optional</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={3}
          className={styles.input}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={styles.input}
          placeholder={placeholder}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
      )}
      {error && (
        <span id={`${id}-error`} className={styles.errorMsg}>
          {error}
        </span>
      )}
    </div>
  );
}
