import React from 'react';

function ContactIcons() {
  const contactLinks = [
    {
      "name": "email",
      "url": "mailto:w.jake.fullmer@gmail.com@gmail.com",
      "classes": "far fa-envelope"
    },
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/jake-fullmer-b9963a93/",
      "classes": "fab fa-linkedin"
    },
    {
      "name": "github",
      "url": "https://github.com/FullmerJake",
      "classes": "fab fa-github"
    },
    {
      "name": "facebook",
      "url": "https://www.facebook.com/jake.fullmer.3",
      "classes": "fab fa-facebook"
    },
  ]

  return (
    <div className="mt-2 mt-lg-0">
      {contactLinks.map((contactLink) => {
        return (
          <a href={contactLink.url}
            key={contactLink.name}
            target="_blank"
            rel="noopener noreferrer"
            className="m-3">
            <span><i className={contactLink.classes}></i></span>
          </a>
        )
      })}
    </div>
  )
}

export default ContactIcons;