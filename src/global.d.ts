type EnMessages = typeof import("./messages/en.json");
type UkMessages = typeof import("./messages/uk.json");

declare interface IntlMessages extends EnMessages, UkMessages {}
