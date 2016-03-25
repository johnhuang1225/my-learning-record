// setDefault() sets a value for a key only if the key is undefined.
Session.setDefault("key", "default value");
// Returns default value
Session.get("key");
// Assigns a new value to a key
Session.set("key","new value");
// Translates to Session.get("key") === "expression" but is more efficient
Session.equals("key","expression");
