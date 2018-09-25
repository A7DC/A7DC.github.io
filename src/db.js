const data = {
  workMain: { title: 'A digitial transformation of the sex industry', subtitle: 'Bordellio', bg: 'images/bordellio-work-bg.png' },
  work: [
    { title: 'UI Work', subtitle: 'Dribbble', bg: 'images/dribbble-bg.png' },
    { title: 'UI Work', subtitle: 'Dribbble', bg: 'images/dribbble-bg.png' },
    { title: 'Medium.com', subtitle: 'Writing', bg: 'images/medium-bg.png' }
  ],
  workExperience: [
    { employer: 'Levo', jobTitle: 'Junior designer', datesWorked: 'February 2013 - February 2014' },
    { employer: 'SilverStripe', jobTitle: 'Designer', datesWorked: 'February 2014 - October 2015' },
    { employer: 'Reapit', jobTitle: 'Designer', datesWorked: 'February 2016-March 2017' },
    { employer: 'Bordellio', jobTitle: 'Founder', datesWorked: 'August 2017-Current' }
  ],
  skills: [
    {
      title: 'Visual',
      content: 'I enjoy creating simple and intentional user interfaces for a variety of mediums, including web, mobile and virtual reality.'
    },
    {
      title: 'UX',
      content: 'I involve end users throughout the design and development process of my projects to ensure we’re always creating value for our customers. I aim to test assumptions early to minimise risk.'
    },
    {
      title: 'Code',
      content: 'I am a component developer, with experience using React and Framer. I enjoy trying out new things. One of the recent things I have tried is virtual reality development.'
    },
  ],
  skillsExpanded: [
    { content: ['UI design', 'Research', 'Testing', 'Interviewing', 'Competitor research'] },
    { content: ['UX design', 'reactjs', 'Animation', 'Javascript', 'Framer'] },
    { content: ['HTML / CSS', 'SASS / LESS', 'Grunt / Gulp', 'Babel', 'Social'] }
  ],
  caseStudy: [
    {
      bordellio: {
        features: [
          { title: 'Browse listings', content: 'Bordellio finds you the nearest escorts to you, showing the highest rated ones first. A button at the bottom of the page allows you to filter.', video: '/videos/browse-listings.mp4' },
          { title: 'Select your requirements', content: 'You are able to filter by location, age, price, whether it’s an incall or outcall, along with what you’d like to happen on the date. A filter is always applied prior to the date request.This is so we’re able to send the details of the request prior to the advertiser before they decide whether to accept the message request.', video: '/videos/browse-listings.mp4' },
          { title: 'Booking a date', content: 'Booking a date is simple. Once you’ve filtered your requirements, simply select any profile and tap on the ‘book now’ button. This will send a message request to your date.If the advertiser accepts this request you’ll be notified and able to communicate directly with them. In the meantime you’re able to leave the app!', video: '/videos/browse-listings.mp4' },
          { title: 'Messaging', content: 'Messaging between advertiser and client is completely encrypted using the Signal API. It is here the two parties are able to discuss the details of their date, as well as send / request identification and / or deposits.', video: '/videos/browse-listings.mp4' },
          { title: 'Requesting ID (optional)', content: 'Advertisers are now able to request ID. Simply select the ‘request ID’ button and an automated request will be sent to the client. The client will then be able to securely send an image to the advertiser, verifying who they are.Because of the encrypted messaging.', video: '/videos/browse-listings.mp4' },
          { title: 'Self-destructing messaging', content: 'Message requests (once accepted) will expire after 1 hour unless both parties have confirmed the booking, after which the messages will self-destruct 12 hours after the date has completed. We hope this will decrease the likelihood of failed bookings.If your date is a no-show then give them a negative rating, explain the reason, and we’ll work towards making sure it doesn’t happen again.', video: '/videos/browse-listings.mp4' },
          { title: 'Confirming date', content: 'After the advertiser has accepted the message request, they will then have to confirm the date request itself. Once done, the client will be able to confirm the date!', video: '/videos/browse-listings.mp4' },
          { title: 'Declining a date', content: 'After the advertiser has accepted the message request, both parties will have the option to decline the date request. Once done, the conversation will instantly self-destruct.Neither party will be rated.', video: '/videos/browse-listings.mp4' },
          { title: 'Rating your date', content: 'After your date has ended, both advertiser and client can rate how the experience went, although only a star rating will be revealed publicly. We hope this satisfies the clients desire to understand the quality of an advertiser, while also respecting an advertisers privacy. Over time, we will continue to work on ratings to help ensure a better experience for everyone.', video: '/videos/browse-listings.mp4' },
          { title: 'Measuring success', content: 'We’re currently conducting usability testing, and we expect to launch the first release in Q2 of this year. So far we’ve completed a single round of usability tests with several clients.These tests were done remotely, using live, moderated testing using Hangouts or LookBack for mobile. In instances where the users screen recording has failed, we’ve reverted to doing the tests ‘blind’ - which has worked out surprisingly well. ', video: '/videos/browse-listings.mp4' },
        ],
      }}
  ]
}

export default data