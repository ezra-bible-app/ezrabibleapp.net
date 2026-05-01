<p id="navigation">
  <a href="#usage--howto--screenshots">Features</a> |
  <a href="#installation">Installation</a> |
  <a href="#discussions">Discussions</a> |
  <a href="#development">Dev.</a>
</p>

*"For Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel."* Ezra 7:10

Ezra Bible App is a modern and user-friendly Bible app focussing on topical study based on keywords/tags. This program can help you to easily manage your topical verse lists and verse-based notes on your desktop, tablet or mobile. Ezra Bible App works with [SWORD Bible translation modules](http://www.crosswire.org/sword) and thus enables Bible study in many languages. It runs on Windows, macOS and Linux desktop computers, as well as on Android devices and Chromebooks. The user interface has been localized to English, Spanish, German, French, Dutch, Brazilian Portuguese, Romanian, Slovakian, Ukrainian and Russian. Click [here]({{ site.github.repository_url }}/releases/latest) to download the latest release for your desktop pc. For mobile devices, you can install the [app from the Play Store]({{ site.playstore_url }}) on your Android device or Chromebook. Furthermore, you can install the [app from the App Store](https://apps.apple.com/us/app/ezra-bible-app/id6757127895) on your iPhone or iPad.

<div class="feature-campaign">
  <p class="feature-campaign__eyebrow">Looking for beta testers</p>
  <h2>Help test automatic commentary and dictionary translation</h2>
  <p>
    I am considering a new Ezra Bible App feature that would automatically translate commentary and dictionary content into your chosen user interface language when those resources are not available in your native language.
  </p>
  <p>
    The sample below shows English commentary module content translated into German. The idea is to use Google Cloud Translation, which means this feature would require internet access and access tokens provided through a separate service.
  </p>
  <p class="feature-campaign__cta">
    Would you be interested in this feature and in beta testing it? Please join the <a href="https://github.com/ezra-bible-app/ezra-bible-app/discussions/1379">GitHub discussion about automatic translation beta testing</a>.
  </p>
</div>

<figure class="feature-campaign__figure">
  <img alt="Ezra Bible App commentary panel with English module content automatically translated into German" src="/assets/screenshots/commentary-auto-translation-german.png" />
  <figcaption>
    Example: commentary resources in English automatically translated to German in the commentary panel.
  </figcaption>
</figure>

<!--<div id="rotatingScreenshot" class="simpleBanner">
	<div class="bannerListWpr">
		<ul class="bannerList">
			<li class="default">
        <img alt="Ezra Bible App" src="/assets/screenshots/ezra_project_0_14_0_compact.png"/>
      </li>
			<li>
        <img alt="Ezra Bible App Night Mode" src="/assets/screenshots/ezra_project_night_mode_mac_compact.png"/>
      </li>
		</ul>
	</div>
</div>-->
<div class="demo">
  <img src="/assets/recordings/1.0.0_demo.gif">
</div>

<a name="usage--howto--screenshots"></a>

## Usage / Howto / Screenshots

Watch [this video](https://www.youtube.com/watch?v=b8gScfa0MqM) to understand how to use Ezra Bible App.

You can also browse through some screenshots and photos on a separate [gallery page](/gallery).

If you have specific questions on how to use Ezra Bible App, feel free to participate in the [discussions on GitHub]({{ site.github.repository_url }}/discussions).

<a name="features"></a>

## Vision and Features

The vision behind Ezra Bible App is to support the user in creating and organizing content (tagged verse lists, notes, sermon manuscripts) right in the context of the Bible text without the need to create separate files/documents.    

Ezra Bible App comes with the following features:

* Bible browsing with access to all translations from [CrossWire's](http://www.crosswire.org) repositories 
* Tagging (topical verse lists) with two topical hierarchy levels (tag groups, tags)
* Note taking (for verses and Bible books)
* Search in Bible modules and in the currently opened Bible browsing window
* Strongs Dictionary support
* Bible Commentary support
* User-friendly interface with tabs
* Switchable light/dark color theme
* Export of user data (tags and notes) to CSV file
* Export of verse lists and notes to Word documents
* User data can be synchronized across multiple devices based on Dropbox integration
* Localizations for English, Spanish, German, Dutch, French, Slovakian, Slovenian, Ukrainian, Russian, Romanian, Brazilian Portuguese

A detailed list of features can be found [on a separate page](/features).

An overview of changes per release is available in the [Change Log]({{ site.github.repository_url }}/blob/master/CHANGELOG.md). 

## Upcoming Features

The next release [1.20](https://github.com/orgs/ezra-bible-app/projects/15) is planned for May 2026.

Planned features:

* Render morphological info in word study panel.
* Show number of occurrences per Strong's number in Word Study panel.
* Allow editing/configuration of additional SWORD repositories.

<a name="installation"></a>

## Installation
The latest installation packages for Windows, macOS and Linux can be found on [GitHub][latest]. The Android app is available [in the Play Store]({{ site.playstore_url }}). Specific install instructions can be found [on a separate page](/installation).

[latest]: {{ site.github.repository_url }}/releases/latest

<a name="discussions"></a>

## Discussions on GitHub
To give feedback and discuss about Ezra Bible App feel free to participate in the [discussions on GitHub]({{ site.github.repository_url }}/discussions). If you are interested in the proposed automatic translation feature for commentary and dictionary resources, please join the [beta testing discussion](https://github.com/ezra-bible-app/ezra-bible-app/discussions/1379).

## Issues
To file issues (bug reports, feature requests, etc.) please use the Github issue system.
Click [here]({{ site.github.repository_url }}/issues/new) to file a new Issue for Ezra Bible App.

<a name="development"></a>

## Development
Have a look at [Ezra Bible App's GitHub repository]({{ site.github.repository_url }}#development) to find out more about its development.
