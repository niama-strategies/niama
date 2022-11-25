import {zNewsletter, zNewsletterDto, type Newsletter} from '$lib/data';
import mailchimp from '@mailchimp/mailchimp_marketing';
import {actionResultFor, sanitizeFor} from './core';

// INIT ====================================================================================================================================
const API_KEY = '457d81258862ded5511323cc5f87f45f';
const API_SERVER = 'us11';
const LIST_ID = '12a570a282';

mailchimp.setConfig({apiKey: API_KEY, server: API_SERVER});

// METHODS =================================================================================================================================
export const addSubscriber = ({email: email_address, forename: FNAME, surname: LNAME}: Newsletter) => true;
//mailchimp.lists.addListMember(LIST_ID, {email_address, merge_fields: {FNAME, LNAME}, status: 'subscribed'});

export const pingMail = () => (mailchimp as any).ping.get();

// ACTIONS =================================================================================================================================
export const actionResult = actionResultFor(addSubscriber, {debug: true, normalizer: zNewsletterDto, sanitizer: zNewsletter});
export const sanitize = sanitizeFor({debug: true, normalizer: zNewsletterDto, sanitizer: zNewsletter});