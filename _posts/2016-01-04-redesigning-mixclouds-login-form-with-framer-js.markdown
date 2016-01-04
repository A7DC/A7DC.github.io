---
layout: post
title:  "Redesigning Mixcloud’s login form with Framer JS"
date:   2015-08-08 18:29:19
categories: jekyll update
---

As part of an interview process with Mixcloud.com, I was asked to redesign their sign-in process. This article describes the thought behind various decisions made throughout the course of the redesign, and gives links to [the final prototype made in Framer JS](http://share.framerjs.com/684h3iedv0z1/){:target="_blank"} and the [Github repo](https://github.com/A7DC/Mixcloud.com-login-form){:target="_blank"} for anyone interested in seeing how it was built (disclosure: I’m a designer, not a programmer — the code will reflect that!).

## The current form

![The current modal design for the Mixcloud.com login form](/images/blog/mixcloud-signin/mixcloud-current-signin.png)

The current design of the form isn’t perfect, but it isn’t horrible either. Everything you’d expect a login form to do is in the current solution, including:

* Sign in with email, username or social accounts
* Receive help signing in
* Sign up for an account
* Return to their previous screen, once successfully signing in

So the core functionality is there. What’s the problem?

## Things I believe could be improved

* Placeholder text disappears once ‘input.value > 0’
* The login button is disproportionately sized compared to its Facebook counterpart
* No feedback for email entry until the entire process is completed (i.e the user enters email, password, and presses ‘log in’)
* The error feedback is constructive, however, it is not empathetic (see in the solution)
* It isn’t “friendly”: the lack of microinteractions to reinforce positive feedback (again, see below)

## The solution

Overall, the functionality of the current design does everything you’d expect of a signin form. It allows the user to complete the task of logging in with their choice of account, and returns them to the previous state of the application prior to signing in.

![The current modal design for the Mixcloud.com login form](/images/blog/mixcloud-signin/mixcloud-new-signin.gif)

Because the core functionality of the process was sound, I wanted to focus on what could be improved with the design which related mostly to feedback and awareness.

### Labels

I started off by wanting the user to better understand what information was required to fill in the input. In the current design the input works as expected: the placeholder text is removed once a user begins entering content.

![Mixcloud.com label interaction](/images/blog/mixcloud-signin/mixcloud-labels.gif)

User testing consistently shows that [placeholder text is detrimental to the user experience of forms](https://www.nngroup.com/articles/form-design-placeholders/){:target="_blank"}, when not accompanied by an input label. Placeholders without labels forces the user to remember what the input is for — something which appears trivial, but considering the distractions of modern life and the shortcomings of our short-term memory, something that needs to be considered in our UI.

With that said, I do appreciate the minimal design of inputs which contain only placeholder text, with the label absent. To counteract usuability issues which would arise with the lack of labels, I decided to include them, but only once the user begins to enter content in the input.

### Hey, is that you?

The current solution does not give feedback on the validity of the email address, until you enter a password and attempt to login. This is frustrating for a user when an error occurs, and it enforces them to think harder than what is necessary; “Was my email spelt wrong, or my password incorrect?”.
To avoid this, I wanted to articulate to the user that they had made a successful entry of their username (or not, as the case may be) by showing them their display picture and cover photo once their username had been validated.

![Mixcloud.com label interaction](/images/blog/mixcloud-signin/mixcloud-two-step-signin.gif)

Spliting up the process into two steps also helps to achieve focus, and greater awareness of what is needed by the user. The downside of increased focus, of course, is an extra-step in the process for the user (having to click return if they have entered the wrong email address).

### Shake on error

It is frustrating when things do not work, and although a lot of us [will only have a couple of email addresses](http://www.zettasphere.com/how-many-email-addresses-people-typically-use/){:target="_blank"} or usernames for every application we use, sometimes we enter details incorrectly.

While the standard solution to this is to give feedback for the error, both by way of describing to the user what went wrong (“Hey, there is no user known by that alias), and a negative colour to accompany the text, we can also use animations to articulate states to the user.

![Mixcloud.com shake animation](/images/blog/mixcloud-signin/mixcloud-shake.gif)

> It simultaneously alleviates the frustration users might feel with its quirkiness while also highlighting that something went wrong. — Michaël Villar

In Michaël Villar’s Medium post, he discusses [the various design decisions](https://medium.com/bridge-collection/improve-the-payment-experience-with-animations-3d1b0a9b810e#.wh2fr6vyn){:target="_blank"} around micro-interactions for Stripe Checkout, and how you can use animations that “alleviates the frustration users might feel with its quirkiness” — and he’s right. What is simply an error that tells you what went wrong and how to fix it, is now an error which appears to empathise with your own frustration.

### Yay, success!

Leading on from the previous point regarding empathy; a process should also appear positive, and share in your successes — not just your failures. I decided to expand on the button state by giving it an animation to show positive feedback to the users.

![Mixcloud.com shake animation](/images/blog/mixcloud-signin/mixcloud-button-animation.gif)

Once a successful login attempt has been made, the button will turn circular, and a tick will bounce up from a spring which is negatively positioned below its parent container, appearing to jump with joy at the successful login attempt! :)

---

# Things I’d like to have done

If given the time, it would’ve been nice to:

* Change the button text to ‘next’ for the username view, and ‘confirm’ for the password to show there’s an extra step in the process
* Use the Mixcloud API to have real users

Thank you for reading. If you have any comments or queries, please feel free to get in touch!

[Like the shot on Dribbble](https://dribbble.com/shots/2435671-Mixcloud-login-redesign-idea){:target="_blank"}

[Follow me on Dribbble](https://dribbble.com/dcaine){:target="_blank"}

[Tweet me](https://twitter.com/A7DC){:target="_blank"}
