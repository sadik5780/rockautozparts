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
  year: '',
  make: '',
  model: '',
  trim: '',
  engineSize: '',
  vin: '',
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

  const yearNum = Number(values.year);
  if (!values.year) errors.year = 'Year is required.';
  else if (!Number.isInteger(yearNum) || yearNum < 1950 || yearNum > currentYear + 1) {
    errors.year = `Enter a year between 1950 and ${currentYear + 1}.`;
  }

  if (!values.make.trim()) errors.make = 'Vehicle make is required.';
  if (!values.model.trim()) errors.model = 'Vehicle model is required.';
  if (!values.trim.trim()) errors.trim = 'Trim is required.';
  if (!values.engineSize.trim()) errors.engineSize = 'Engine size is required.';

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
              <h3 className={styles.successTitle}>Part Request Received</h3>
              <p className={styles.successText}>
                Thanks{values.fullName ? `, ${values.fullName.split(' ')[0]}` : ''}. A specialist will respond within <strong>5 minutes</strong> with part availability, pricing, and shipping details.
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
                <span className={styles.eyebrow}>Part Request Form</span>
                <h2 className={styles.title}>Find Your Part in Minutes</h2>
                <p className={styles.sub}>
                  No spam. No pressure. Just a real part specialist.
                </p>
                <div className={styles.responseBadge} aria-label="Response time">
                  <span className={styles.responseDot} aria-hidden="true" />
                  Responses within <span className={styles.responseAccent}>5 minutes</span>
                </div>
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
              </div>

              <div className={styles.row3}>
                <Field
                  label="Trim"
                  name="trim"
                  required
                  value={values.trim}
                  error={touched.trim && errors.trim}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="XLT"
                />
                <Field
                  label="Engine Size"
                  name="engineSize"
                  required
                  value={values.engineSize}
                  error={touched.engineSize && errors.engineSize}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="5.0L V8"
                />
                <Field
                  label="VIN"
                  name="vin"
                  optional
                  value={values.vin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="17 characters"
                  maxLength={17}
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
                    Submit Part Request
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
