export async function submitQuote(values) {
  const endpoint = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT;
  const key = process.env.NEXT_PUBLIC_QUOTE_KEY;

  if (!endpoint || !key) {
    return { success: false, message: 'Quote endpoint is not configured.' };
  }

  const lines = [
    `Full Name: ${values.fullName}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Make: ${values.make}`,
    `Model: ${values.model}`,
    `Year: ${values.year}`,
    `Part Number: ${values.partNumber || '—'}`,
    '',
    'Message:',
    values.message || '—',
  ].join('\n');

  const fd = new FormData();
  fd.append('access_key', key);
  fd.append('subject', `New Quote Request — ${values.fullName}`);
  fd.append('from_name', 'Rockautozparts.com');
  fd.append('name', values.fullName);
  fd.append('email', values.email);
  fd.append('phone', values.phone);
  fd.append('message', lines);

  try {
    const res = await fetch(endpoint, { method: 'POST', body: fd });
    const data = await res.json();
    if (data.success) return { success: true };
    return { success: false, message: data.message || 'Submission failed.' };
  } catch (err) {
    return { success: false, message: 'Network error. Please try again.' };
  }
}
