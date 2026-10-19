import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatUsPhone,
  validateUsPhone,
  validateEmail,
  validateInquiryForm,
  getConciergeResponse,
  sanitizeInquiryText,
} from './pure_logic.ts';

test('formatUsPhone formats 10 digits into US phone pattern', () => {
  assert.equal(formatUsPhone('2299387291'), '(229) 938-7291');
  assert.equal(formatUsPhone('229'), '(229');
  assert.equal(formatUsPhone('229938'), '(229) 938');
  assert.equal(formatUsPhone(''), '');
});

test('validateUsPhone checks for exactly 10 digits', () => {
  assert.equal(validateUsPhone('(229) 938-7291'), true);
  assert.equal(validateUsPhone('2299387291'), true);
  assert.equal(validateUsPhone('12345'), false);
  assert.equal(validateUsPhone(''), false);
});

test('validateEmail validates proper email addresses', () => {
  assert.equal(validateEmail('client@example.com'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('test@domain'), false);
});

test('validateInquiryForm rejects missing or invalid inputs', () => {
  const invalidResult = validateInquiryForm({
    fullName: '',
    phone: '123',
    email: 'bad',
    interest: '',
    message: 'hi',
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.interest);
  assert.ok(invalidResult.errors.message);

  const validResult = validateInquiryForm({
    fullName: 'Sarah Jenkins',
    phone: '(229) 938-7291',
    email: 'sarah@example.com',
    interest: 'Boutique',
    message: 'Looking for a floral wrap dress for an upcoming wedding!',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('getConciergeResponse provides rule-grounded answers without inventing data', () => {
  const locRes = getConciergeResponse('Where are you located?');
  assert.ok(locRes.includes('902 S MLK Jr Blvd'));
  assert.ok(locRes.includes('Americus'));

  const salonRes = getConciergeResponse('How much is balayage color?');
  assert.ok(salonRes.includes('+1 229-938-7291'));
  // Never invents prices
  assert.ok(!salonRes.includes('$'));

  const hoursRes = getConciergeResponse('What are your hours on Saturday?');
  assert.ok(hoursRes.includes('+1 229-938-7291'));

  const boutiqueRes = getConciergeResponse('What do you carry in the boutique?');
  assert.ok(boutiqueRes.includes('clothing') || boutiqueRes.includes('dresses'));
});

test('sanitizeInquiryText strips angle brackets', () => {
  assert.equal(sanitizeInquiryText('  Hello <script>world</script>  '), 'Hello scriptworld/script');
});
