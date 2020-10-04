export const MAIL_SERVICES = {
  YOPMAIL: "YOPMAIL",
  MAILNESIA: "MAILNESIA",
  DISPOSTABLE: "DISPOSTABLE",
};

export const ALL_MAIL_SERVICES = [
  MAIL_SERVICES.MAILNESIA,
  MAIL_SERVICES.YOPMAIL,
  MAIL_SERVICES.DISPOSTABLE,
];

export const MAIL_SERVICE_NAMES = {
  YOPMAIL: "Yopmail",
  MAILNESIA: "Mailnesia",
  DISPOSTABLE: "Dispostable",
};

export const MAIL_SERVICES_DOMAINS = {
  [MAIL_SERVICES.MAILNESIA]: "mailnesia.com",
  [MAIL_SERVICES.YOPMAIL]: "yopmail.com",
  [MAIL_SERVICES.DISPOSTABLE]: "dispostable.com",
};

export const MAIL_SERVICES_HOMEPAGES = {
  [MAIL_SERVICES.MAILNESIA]: "https://mailnesia.com/",
  [MAIL_SERVICES.YOPMAIL]: "http://www.yopmail.com/",
  [MAIL_SERVICES.DISPOSTABLE]: "https://www.dispostable.com/",
};

export const MAIL_SERVICES_MAILBOX_PATH_CONFIG = {
  [MAIL_SERVICES.MAILNESIA]: {
    prefix: "http://mailnesia.com/mailbox/",
    suffix: "",
  },
  [MAIL_SERVICES.YOPMAIL]: {
    prefix: "http://www.yopmail.com/?",
    suffix: "",
  },
  [MAIL_SERVICES.DISPOSTABLE]: {
    prefix: "https://www.dispostable.com/inbox/",
    suffix: "",
  },
};
