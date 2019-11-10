// This module loads the system settings (a single document)

const Settings = require('../models/settings');

let settings;

const defaultSettings = {
  pollLeaderboardSeconds: 30,
};


module.exports = {
  get
};

async function get() {
  return new Promise(resolve => {
    if (settings) {
      resolve(settings);
    } else {
      Settings.findOne({})
        .then(async settingsDoc => {
          if (settingsDoc) {
            settings = settingsDoc;
          } else {
            settings = await Settings.create(defaultSettings);
          }
          resolve(settings);
        });
    }
  });
} 