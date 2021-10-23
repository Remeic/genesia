export const MAIL_SERVICES = {
  YOPMAIL: "YOPMAIL",
  MAILNESIA: "MAILNESIA",
  DISPOSTABLE: "DISPOSTABLE",
  MAILPOOF: "MAILPOOF",
};

export const ALL_MAIL_SERVICES = [
  MAIL_SERVICES.MAILNESIA,
  MAIL_SERVICES.YOPMAIL,
  MAIL_SERVICES.DISPOSTABLE,
  MAIL_SERVICES.MAILPOOF,
];

export const MAIL_SERVICE_NAMES = {
  YOPMAIL: "Yopmail",
  MAILNESIA: "Mailnesia",
  DISPOSTABLE: "Dispostable",
  MAILPOOF: "Mailpoof",
};

export const MAIL_SERVICES_DOMAINS = {
  [MAIL_SERVICES.MAILNESIA]: "mailnesia.com",
  [MAIL_SERVICES.YOPMAIL]: "yopmail.com",
  [MAIL_SERVICES.DISPOSTABLE]: "dispostable.com",
  [MAIL_SERVICES.MAILPOOF]: "mailpoof.com",
};

export const MAIL_SERVICES_HOMEPAGES = {
  [MAIL_SERVICES.MAILNESIA]: "https://mailnesia.com/",
  [MAIL_SERVICES.YOPMAIL]: "https://www.yopmail.com/",
  [MAIL_SERVICES.DISPOSTABLE]: "https://www.dispostable.com/",
  [MAIL_SERVICES.MAILPOOF]: "https://mailpoof.com/",
};

export const MAIL_SERVICES_MAILBOX_PATH_CONFIG = {
  [MAIL_SERVICES.MAILNESIA]: {
    prefix: "https://mailnesia.com/mailbox/",
    suffix: "",
  },
  [MAIL_SERVICES.YOPMAIL]: {
    prefix: "http:s//www.yopmail.com/?",
    suffix: "",
  },
  [MAIL_SERVICES.DISPOSTABLE]: {
    prefix: "https://www.dispostable.com/inbox/",
    suffix: "",
  },
  [MAIL_SERVICES.MAILPOOF]: {
    prefix: "https://mailpoof.com/mailbox/",
    suffix: "@mailpoof.com",
  },
};
