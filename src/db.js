const data = {
  workMain: { title: 'A nifty, free app for paid dates', subtitle: 'Case study', bg: 'images/bordellio-work-bg.png' },
  work: [
    { title: 'UI Work', subtitle: 'Dribbble', bg: 'images/dribbble-bg.png' },
    { title: 'WebVR - coming soon', subtitle: 'Experiments', bg: 'images/vr.jpg' },
    { title: 'Redesigning Mixcloud’s login form with Framer JS', subtitle: 'Framer', bg: 'images/medium-bg.png' },
    { title: 'Building the UI for Bordellio', subtitle: 'Case study', bg: 'images/code.png' },
  ],
  workExperience: [
    { employer: 'Levo', jobTitle: 'Junior designer', datesWorked: 'February 2013 - February 2014' },
    { employer: 'SilverStripe', jobTitle: 'Designer', datesWorked: 'February 2014 - October 2015' },
    { employer: 'Reapit', jobTitle: 'Designer', datesWorked: 'February 2016-March 2017' },
    { employer: 'Bordellio', jobTitle: 'Designer', datesWorked: 'August 2017-Current' }
  ],
  skills: [
    {
      title: 'Visual',
      content: 'I enjoy creating simple and intentional user interfaces for a variety of mediums, including web, mobile and virtual reality.'
    },
    {
      title: 'UX',
      content: 'I constantly seek validation of my work by testing it with users as much as possible.  I try to keep my testing lean.'
    },
    {
      title: 'Code',
      content: 'Programming is just another medium to explore ideas. I have years of experience with Framer and React.'
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
          { title: 'Browse listings', content: 'Bordellio finds you the nearest escorts to you, showing the highest rated ones first. A button at the bottom of the page allows you to filter.', video: '/images/case-study/bordellio/1.png' },
          { title: 'Select your requirements', content: 'You are able to filter by location, age, price, whether it’s an incall or outcall, along with what you’d like to happen on the date. A filter is always applied prior to the date request. This is so we’re able to send the details of the request prior to the advertiser before they decide whether to accept the message request.', video: '/images/case-study/bordellio/2.png' },
          { title: 'Booking a date', content: 'Booking a date is simple. Once you’ve filtered your requirements, simply select any profile and tap on the ‘book now’ button. This will send a message request to your date. If the advertiser accepts this request you’ll be notified and able to communicate directly with them. In the meantime you’re able to leave the app!', video: '/images/case-study/bordellio/3.png' },
          { title: 'Messaging', content: 'Messaging between advertiser and client is completely encrypted using the Signal API. It is here the two parties are able to discuss the details of their date, as well as send / request identification and / or deposits.', video: '/images/case-study/bordellio/4.png' },
          { title: 'Requesting ID', content: 'Advertisers are now able to request ID. Simply select the ‘request ID’ button and an automated request will be sent to the client. The client will then be able to securely send an image to the advertiser, verifying who they are. Because of the encrypted messaging.', video: '/images/case-study/bordellio/5.png' },
          { title: 'Self-destructing messaging', content: 'Once accepted, message requests will expire after 1 hour unless both parties have confirmed the booking, after which the messages will self-destruct 12 hours after the date has completed. We hope this will decrease the likelihood of failed bookings.If your date is a no-show then give them a negative rating, explain the reason, and we’ll work towards making sure it doesn’t happen again.', video: '/images/case-study/bordellio/6.png' },
          { title: 'Confirming date', content: 'After the advertiser has accepted the message request, they will then have to confirm the date request itself. Once done, the client will be able to confirm the date!', video: '/images/case-study/bordellio/7.png' },
          { title: 'Declining a date', content: 'After the advertiser has accepted the message request, both parties will have the option to decline the date request. Once done, the conversation will instantly self-destruct.Neither party will be rated.', video: '/images/case-study/bordellio/8.png' },
          { title: 'Rating your date', content: 'After your date has ended, both advertiser and client can rate how the experience went, although only a star rating will be revealed publicly. We hope this satisfies the clients desire to understand the quality of an advertiser, while also respecting an advertisers privacy. Over time, we will continue to work on ratings to help ensure a better experience for everyone.', video: '/images/case-study/bordellio/9.png' },
        ],
      }}
  ]
}

export default data