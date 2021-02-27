<p id="navigation">
  <a href="https://ezra-project.net">Home</a>
</p>

## Synchronizing the database on multiple devices

The Ezra Project database is stored as SQLite database in one file (ezra.sqlite) in the app's user data directory. You can use a service like Dropbox (or Nextcloud or ...) to synchronize the Ezra Project database across multiple devices.

### Step 1: Find out where your database and configuration are stored

To find out where the database and configuration are stored exactly, press the **i button** and then click on Application Info.

The dialog will then show you where the database and the configuration file is stored.

![Application Info](/assets/screenshots/ezra_db_and_config_path.png "Application info dialog showing db and configuration path")

### Step 2: Copy the Ezra Project database to the synchronization folder

In order to start with the synchronization, you need to put the Ezra Project database into a folder that is synchronized. This could for example simply be your Dropbox root folder.

So - browse to the location of the Ezra Project database file (The app info dialog shows this) and copy the file to the destination folder that is setup for synchronization. Do not rename the database file, but keep the name ezra.sqlite.

### Step 3: Setup a custom database directory in Ezra Project

To make Ezra Project aware of the new database location, you need to edit Ezra Project's config file. The path of the config file is visible in the app info dialog you have opened (see screenshot above).

Open the configuration file `config.json` in a text editor and add a line like this, after the initial parenthesis, do not forget the comma at the end:

`"customDatabaseDir": "/Users/tobi/Dropbox",`

Note that the exact path may be different based on your platform (Windows, macOS, Linux, Android).

After making the adjustment your configuration file should like like this (important part is the customDatabaseDir):

    {
      "customDatabaseDir": "/Users/tobi/Dropbox",     <== This is what you need to add/adjust!
      "selectedRepositories": [
        "CrossWire"
      ],
      "selectedLanguages": [
        "en"
      ],
      "bibleTranslation": "GerNeUe",
      "tagListWidth": 561.57118,
      "lastSwordRepoUpdate": "2020-11-18T18:01:03.149Z",
      "showTags": false,
      "showSectionTitles": false,
      "useTagsColumn": true,
      "showToolBar": false,
      "showBookIntro": false,
      "showStrongs": false,
      "configMigrationDone": true,
      "lastUsedVersion": "0.17.0-Beta5",
      "showHeaderNavigation": false
    }

### Step 4: Start Ezra Project with new configuration

Now (re)start Ezra Project. It should detect the new custom database configuration and load the database from your synchronization directory.

You can verify this by checking the info dialog once more:

![Application Info](/assets/screenshots/ezra_dropbox_database_path.png "Application info dialog showing db and configuration path")

From now on, changes to the database should be picked up by your synchronization service and automatically synced to all other devices where you have installed that synchronization service. If you then make this Ezra Project configuration adjustment on all your devices you can seemlessly switch back and forth between your devices and always work with the same database!

Important: Whenever you switch devices, ensure that the database file has been synced successfully. You need to re-start Ezra Project on the device that has received a new synced database file, so that the app picks up the freshly synced database.