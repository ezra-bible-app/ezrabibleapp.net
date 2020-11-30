<p id="navigation">
  <a href="#usage--howto--screenshots">Features</a> |
  <a href="#installation">Installation</a> |
  <a href="#user--forum">User Forum</a> |
  <a href="#development">Dev.</a>
</p>

*"For Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel."* Ezra 7:10

Ezra Project is a user-friendly Bible study tool focussing on topical study based on keywords/tags. This program can help you to easily manage your topical verse lists and verse-based notes. Ezra Project works with [SWORD Bible translation modules](http://www.crosswire.org/sword) and thus enables Bible study in many languages. It runs on Windows, macOS and Linux and the user interface has been localized to English, German, French and Dutch. Click [here](https://github.com/ezra-project/ezra-project/releases/latest) to get the latest release.

<div id="rotatingScreenshot" class="simpleBanner">
	<div class="bannerListWpr">
		<ul class="bannerList">
			<li class="default">
        <img alt="Ezra Project" src="/assets/screenshots/ezra_project_0_14_0_compact.png"/>
      </li>
			<li>
        <img alt="Ezra Project Night Mode" src="/assets/screenshots/ezra_project_night_mode_mac_compact.png"/>
      </li>
		</ul>
	</div>
</div>

<script>
var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if (isMobile) {
  document.body.classList.add('mobile');
} else { 
  $('#rotatingScreenshot').simplebanner({rotateTimeout: 5000});
}
</script>

<a name="usage--howto--screenshots"></a>

## Usage / Howto / Screenshots

Watch [this video](https://www.youtube.com/watch?v=b8gScfa0MqM) to understand how to use Ezra Project.

You can also browse through some screenshots and photos on a separate [gallery page](/gallery).

If you have specific questions on how to use Ezra Project, feel free to participate in the [user forum](https://forum.ezra-project.net).

<a name="features"></a>

## Features

Ezra Project comes with the features listed below. An overview of changes per release is available in the [Change Log](https://github.com/ezra-project/ezra-project/blob/master/CHANGELOG.md). 

### Bible browsing

  * Bible books are opened entirely and you can scroll through the chapters seamlessly and quickly.
  * The text is shown with book introductions, section headers, cross references and foot notes.
  * You can compare the Bible translations of the selected verses.
  * Access to all Bible translations available from [CrossWire's](http://www.crosswire.org) repositories.
  * Ezra Project uses the local Sword directories as any other Sword frontend.

### Tagging (topical verse lists)

  * Tag within the currently opened book or verse list.
  * Lookup all verses of a tag (show verses in the main browsing window).
  * Lookup all verses of a tag in the context of a book or verse list (show verses in small popup).
  * Export a tagged verse list to a document.
  * Show tag statistics for the currently opened book.

### Note taking

  * Take notes for individual verses.
  * The notes can be formatted using Markdown syntax.
  * The note editor offers syntax highlighting and convenience features for editing Markdown
  (see this [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)).

### Search

  * Search within the currently opened book or verse list (`CTRL/CMD + f`).
  * Search within the full Bible translation.
  * Search with multiple words, exact phrase or Strong's number.
  * Search results are highlighted.

### Dictionary

  - Strong's transcriptions/original word are displayed as hint/pop-up above the word when hovering the mouse over the corresponding word while pressing `SHIFT`.
  - Detailed Strong's information is shown on the bottom left in a separate box.
  - Strong's based search with link 'Find all occurrances'.
  - Additional Strong's based dictionaries can be installed. All Strong's related dictionary entries are shown in the dictionary info box.

### User interface features

* Tabs
  * Each tab either shows a book, a tagged verse list, cross references or search results.
  * Previously opened tabs are loaded again on program start.
* Switchable light/dark color theme
  * You can easily and quickly switch between a light and a dark color theme.
  * This is configured automatically on macOS based on the system settings.
* User interface available in the following languages:
  * English, German, Dutch, French

## Upcoming Features

Ezra Project is currently on a bi-monthly release schedule. The next release [0.16.0](https://github.com/ezra-project/ezra-project/projects/4) is planned for December 2020 with the following changes:

* Notes document export ([#96][i96])
* Augment book chapter navigation with section headers ([#135][i135])
* Spanish translation ([#144][i144])
* Usability enhancements and bugfixes

[i96]: https://github.com/tobias-klein/ezra-project/issues/96
[i135]: https://github.com/tobias-klein/ezra-project/issues/135
[i144]: https://github.com/tobias-klein/ezra-project/issues/144
[i96]: https://github.com/ezra-project/ezra-project/issues/96

<a name="installation"></a>

## Installation
The latest installation packages for Windows, macOS and Linux can be found on [this page][latest]. Specific install instructions are below.

### Windows
Install Ezra Project by downloading the <a href="{{ site.github.win_url }}">installer</a>. The installer can then be executed with one click/double-click. Note that Windows will warn you that the vendor of this package could not be verified (Installer is not signed). However, you can still go ahead and install the application. Once installed, Ezra Project will open automatically and there will be a link available on your Desktop.

The minimum Windows version required for Ezra Project is *Windows 7*. Note that on Windows versions before Windows 10 you need to separately install the *Microsoft Visual C++ 2015 Redistributable* package. On the <a href="https://www.microsoft.com/en-us/download/details.aspx?id=53840">Microsoft download page</a>, please pick the file *vc_redist.x86.exe* once you're asked to choose the specific download.

### macOS
Install Ezra Project by downloading the <a href="{{ site.github.mac_url }}">DMG file</a>. After opening the DMG file from Finder you can either just test-run Ezra Project (double-click the icon), or drag-and-drop the icon to the Applications folder to install it. Note, that macOS will warn you that this is an app downloaded from the internet. That message must be acknowledged before you can run the application. Note that the minimum macOS version required for running Ezra Project is macOS *Yosemite* (10.10).

### Linux
Install Ezra Project by downloading a package for your distribution. After installing the package you will find "Ezra Project" in your application menu.

* **Ubuntu 18.04 / 19.10 / 20.04 & Debian 10 & Linux Mint 18/19/20:** Download the appropriate Debian package attached to the [latest release][latest] and install, e.g.: `sudo dpkg -i ezra-project_ubuntu1904_0.15.0_amd64.deb`. (Ubuntu 20.04 package also works on Linux Mint 20)
* **Fedora 29/31/33 & CentOS 8:** Download the appropriate RPM package package attached to the [latest release][latest] and install, e.g.: `sudo dnf localinstall ezra-project_fedora29_0.15.0_x86_64.rpm`.
* **Arch Linux:** Use your favorite AUR package manager to install *[ezra-project](https://aur.archlinux.org/packages/ezra-project)* (or *[ezra-project-git](https://aur.archlinux.org/packages/ezra-project-git)*), e.g.: `yay -S ezra-project`.

[latest]: https://github.com/ezra-project/ezra-project/releases/latest

<a name="user--forum"></a>

## User Forum
To give feedback and discuss about Ezra Project feel free to participate in the user forum: [forum.ezra-project.net](https://forum.ezra-project.net)

## Issues
To file issues (bug reports, feature requests, etc.) please use the Github issue system.
Click [here](https://github.com/ezra-project/ezra-project/issues/new) to file a new Issue for Ezra Project.

<a name="development"></a>

## Development
Have a look at [Ezra Project's GitHub repository](https://github.com/ezra-project/ezra-project) to find out more about its development.
