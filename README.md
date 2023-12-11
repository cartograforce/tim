# Timecode Indexing Module (TIM): App for creating and editing OHMS XML (and other A/V index formats)

## Introduction

**TIM** is a workspace for **creating, developing, and refining timecodes and other metadata** for multimedia audio/video interfaces. Timecode indexes can be added simply by typing keyboard shortcut commands and descriptive text/keywords/synopses in the editing window at any point in the media file. 

Jump right in with the **[Quick Start Instructions](#quick-start-instructions)** below, or see the **[wiki for full user guide and documentation](https://github.com/cartograforce/tim/wiki)** on all features.

This version of **TIM** is a React app forked from the [Centre for Contemporary and Digital History (C²DH)](https://github.com/C2DH) and is maintained by [Douglas Lambert](https://github.com/cartograforce). 

## About TIM and A/V media transcription and indexing 
**TIM is a workspace for refining timecodes and other metadata for  audio/video (A/V) index interfaces.** It allows users to create custom indexes by defining thematic access points along media timelines/playbars. Working in TIM’s free-form text and timecode editor, indexers can work iteratively to listen, type summaries, draw from Automatic Speech Recognition (ASR) transcripts, and establish timestamps for sequential segments.  Establishing the appropriate metadata in TIM, timecoded indexes can be displayed in the [OHMS](https://www.oralhistoryonline.org/) platform, designed for archival oral histories online, or on the [Aviary Platform](https://www.aviaryplatform.com/), a content management system (CMS) for oral history or other index formats. For OHMS’ oral history style indexes, as defined in the OHMS.xsd metadata schema, **users can**:

* **Generate OHMS.xml files from scratch**
* **Formulate title, synopsis, keywords and partial transcript fields for each segment/timestamp using [Markdown](https://en.wikipedia.org/wiki/Markdown)**
* **Bypass OHMS/Aviary editing tools and publish OHMS.xml indexes directly**

For establishing and refining timecodes in TIM, **users can**:

* **Insert timecodes in the TIM Editor from the media timeline**
* **Hand-edit timecodes in-text**
* **Use keyboard shortcuts to control the media play whilst typing**

**TIM facilitates indexing for individual interviews or whole collections, by non-technical users or professional archivists, and for private use or public consumption.** TIM was built for oral history indexing practice but can be applied to any long-form recorded audio or video files. Once in a multimedia environment like OHMS/Aviary or other CMS, indexes and timecode transcripts are interactive, synchronized, and searchable.

**TIM is browser-based with no username/password required.** However, this means work must be actively saved to a local computer drive before closing the active browser tab.

**TIM facilitates integration of ASR outputs to produce indexes, or to refine and complete transcripts.** This capability to integrate ASR is particularly relevant to oral history content, where word-for-word transcripts are highly valued. ASR transcripts also can facilitate the creation of indexes by providing an initial timecoded text map of the material. (See [Oral History Indexing](https://www.tandfonline.com/doi/abs/10.1080/00940798.2023.2235000).)

**TIM is an ideal environment for editing indexes and timecode transcripts using the WebVTT data format.** WebVTT can be generated using [TIM’s Markdown syntax] (link internal]) (only timestamp, title, synopsis) or by editing an existing WebVTT file as text.  When displayed in Aviary, a WebVTT index can be formulated with a two-layer “parent/child” arrangement, creating unique options for representing recorded events as an index. See an example for an online conference session, created in TIM: [Zoom Video from OHA roundtable discussion, 2021](https://oralhistory.aviaryplatform.com/collections/1682/collection_resources/53215/index).

**TIM is a one-of-a-kind environment for close engagement with A/V, where one can map the meaning of media contexts like a librarian indexes a book, and cue timecodes precisely like a radio or video producer.** TIM is ideal for oral historians and other content stewards who understand that, despite the increasing convenience of ASR-created transcripts, human listening and interpretation is central to creating quality access to A/V. **As a tool for index creation or transcript refinement, TIM facilitates the involvement of natural human intelligence throughout the process of multimedia A/V document publication.** 

## Quick Start Instructions 

**Using the hosted web app (*no installation or account/login required*):**

1. **App Location:** Go to **[https://cartograforce.github.io/tim/](https://cartograforce.github.io/tim/)** to load the web app in your browser window.

2. **Establish/Load/Save JSON Project File:** In the **Create** menu, click the **New project** button to begin a new TIM indexing project, or click the **Import** button to upload a saved TIM project file in JSON format. To save your TIM project, click the "floppy disk" **Save** icon at the top right of the project window. This will save your work as a JSON file on your local computer which can then be loaded and edited again later. ***Note:*** Because TIM works with files stored on your local computer and does not upload your work to a server, it's important that local media and JSON files are not moved or renamed within your computer's file system. If files are moved or renamed, opening a saved TIM project from a JSON file will display an error.

![Web app home page](https://github.com/cartograforce/TIM-Wiki-images/blob/d4168ce7db32bc685a2165bde1425803f0253a31/TIM-web-app-homepage.png?raw=true)\
_The TIM web app start menu_

3. **Load Media:** In an empty TIM project, click the *Choose* **media file** button to load an audio or video file from your local computer *OR* under *or load URL*, paste the direct URL of a media file hosted on the web and click the **Load** button. You can load any media file that has playback support in your browser. 

	* *YouTube, Vimeo, Soundcloud and various other media streaming platform page URLs can be pasted into the **URL** field as-is, others may require a direct link to the media file itself to load.*
	* *If the media file loads properly a green check mark icon will appear at the end of the URL. If TIM is not able to load a media file from the URL, a red warning icon will appear instead.*

![Blank project - load media](https://github.com/cartograforce/TIM-Wiki-images/blob/103358cae460c496bc754c0ec9e92effcc23e3d1/TIM-blank-project.png?raw=true)\
_Load media files in a blank TIM project_

4. **Media Player Features:** Using the playback controls in the floating media player window or the controls in the main toolbar at the top of the TIM project window, you can play/pause, skip forward or back, and control playback speed. You may also use the ESC key on yor keyboard to play/pause the media file. 

![TIM workspace](https://github.com/cartograforce/TIM-Wiki-images/blob/d0aee69343bccda841ad89859f28da68a172182e/TIM-workspace.png?raw=true)\
_The TIM project window workspace_

5. **Essential Keyboard Controls:** In the default **Notes** mode (next to **Preview** tab), you can type freely. Whether the media is playing or paused, add a timecode point to the text by typing  **CTRL-j** (PC) or **CMD-j** (MacOS) at any time.

    * Clicking on any timecode marker in the text editing area (blue, pink, or black/bold) will jump to the corresponding time in the media file loaded into the viewer window.
	
	* When occupying its own line with no other text, a timecode with appear in black, bold, and enlarged in **[HH:MM:SS]** format. This demarks a prospective segment in OHMS.xml and maps to OHMS' "time" field for a particular segment--called a "tag" in OHMS.
	
	* General timecodes can be placed anywhere in the text and will appear with a blue highlight, and a corresponding blue dot will appear in the toolbar **Timeline**.
	* Timecodes highlighted with a **pink background** are not correctly formated for inclusion on the TIM timeline and need to be put in [HH:MM:SS] format.
	
	* When actively developing an index or timecoded transcription in TIM, keystrokes are particularly convenient to use for controlling the media player and pulling media timecodes into the Notes/Editor area. See shortcuts below:


| Keyboard Command  | TIM Function | Notes |
| ------------- | ------------- | ----------- |
|**ESC**| Play/Pause media file | A local or remote media file must be loaded |
|**CMD/CTRL + j**| Insert single timecode marker | Timecode marker appears in-text at current media playback location |
|**CMD/CTRL + SHIFT + j**| Insert multiple timecode markers | Inserts 4 timecode markers at one second intervals; interval between markers adjustable in Settings |
|**CTRL + [**|Skip media file backward|Skip backward one second; interval adjustable in Settings. CTRL key for both Mac/Windows|
|**CTRL + ]**|Skip media file forward|Skip forward one second; interval adjustable in Settings. CTRL key for both Mac/Windows|

6. **OHMS.xml fields and Markdown Syntax:** Clicking on the **Preview** button at the top of the text editing window switches to **Preview** mode, where the OHMS.xml segment times and the **Notes** area [Markdown](https://en.wikipedia.org/wiki/Markdown) can be checked. Here, the title, synopsis, keywords, and partial transcript fields for each OHMS tag/segment appear in distinct input boxes for editing or new composition.

![TIM Preview mode](https://github.com/cartograforce/TIM-Wiki-images/blob/b187077c6381ed51ed5e2ee44801e1a5c6f2a5b8/TIM-preview-mode.png?raw=true)\
_Editing metadata fields in the TIM Preview mode_

These fields are needed if OMHS XML compatible indexing metadata export is desired. These fields can also be quickly completed by typing ***Markdown-formatted text in the Notes mode***:

| TIM / OHMS XML Metadata Field | TIM Notes View Markdown Format | Comments <br/>```Markdown Syntax Example```|
| ------------- | ------------- | ----------- |
| **Segment Break*** |Single timecode, on its own line, no space before or after| ```[00:03:33]``` |
| **Section Title*** |Single hashtag symbol followed by text| ```#Section Title ``` |
| **Synopsis** |Single right carat symbol followed by text| ```>Synopsis text block``` |
| **Keyword or list of keywords** |A word or words enclosed by two asterisks|```**Keyword One, Keyword Two, Keyword Three**```|
|**Partial transcript**|Text not formatted in Markdown (in between Segment Breaks)|*"Export Notes as Partial Transcript in OHMS XML"* **checked in Settings**|
|**Comments / free form text in TIM Notes**|Text not formatted in Markdown|*"Export Notes as Partial Transcript in OHMS XML"* **unchecked in Settings**|

****Note: Only the Segment Break timecode and Section Title text are required fields for OHMS XML export***

![TIM Markdown formatting](https://github.com/cartograforce/TIM-Wiki-images/blob/eb32c537450a0f9340195571240e637b2782154e/TIM-markdown-formatting.png?raw=true)\
_Markdown formatting in TIM Notes view_

7. **WebVTT with TIM:** TIM can also be used to create, edit, and refine text-based caption files in .vtt or .srt format (such as text transcripts generated by *automatic speech recognition*, or *ASR*) for video media. WebVTT text captions/transcripts can be copy/pasted directly into the TIM Notes view for editing and refinement, and TIM free-form text notes can be formatted using Markdown to create and export WebVTT caption files. WebVTT is an HTML5 compatible caption format and enables rich visual formatting of text captions for display on the Web. 

| TIM Notes View Markdown Format  | WebVTT Output | Markdown Syntax Example | 
| ------------- | ------------- | ----------- |
|**A single timecode on its own line with no space before or after, optionally including miliseconds**| Beginning Timecode Marker* | ```[00:03:33.000]``` |
|**A single hashtag symbol followed by text**| Caption Heading | ```#Caption Heading ``` |
|**A single right carat symbol followed by text**| Text of caption | ```>Text caption for the portion of video in-between timecode markers``` |

****Note: WebVTT captions are displayed during the duration of the media file in between timecode markers. It is not necessary in TIM to add an ending timecode marker. The ending is assumed to be at the start of the next timecode marker. If no milliseconds suffix is added in TIM, the caption will begin at .000 by default when exported to WebVTT***

9. To save your TIM project, click the "floppy disk" **Save** icon at the top right of the project window. This will save your work as a JSON file on your local computer which can then be loaded and edited again later. ***Note:*** Because TIM works with files stored on your local computer and does not upload your work to a server, it's important that local media and JSON files are not moved or renamed within your computer's file system. If files are moved or renamed, opening a saved TIM project from a JSON file will display an error. 

10. TIM can export your work to one of several different formats for use in other applications. Click the "right arrow" **Export** icon at the top right of the project window. A pop-up will display the current export options in a drop-down menu including:
	* Text (Markdown)
	* CSV
	* XML (OHMS)
	* VTT
	* JSON
	
    Select an option and click the blue **Export** button. Your browser will initiate a file download to your local computer. 
    
## Local Installation

To install **TIM** on your local computer and run the web app in your browser without the need for a network connection, please refer to the local installation instructions in the **[Wiki for full user guide and documentation](https://github.com/cartograforce/tim/wiki)**

## Technology Stack

TIM is a simple browser-based application built using the following technologies:

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces

* [React Router](https://reactrouter.com/en/main) - A standard library for routing in React

* [Node Package Manager](https://www.npmjs.com/) - For dependency management

To run the application locally (via command line) the following are also required:

* [Git](https://git-scm.com/)[ ](https://git-scm.com/)- Tool used for source code management
* [Node.js](https://nodejs.org/en/)[ ](https://nodejs.org/en/)- A runtime environment that’s used to run JavaScript

## License

Usage of TIM is allowed under the [MIT License](https://opensource.org/licenses/MIT). See TIM’s [LICENSE](https://github.com/cartograforce/tim/blob/master/LICENSE) for the full details.

## Versions

The most current browser-based version of the TIM application, with updated documentation and links, can be run from here: [cartograforce.github.io/tim/#/new](https://cartograforce.github.io/tim/#/new). As of Spring 2023, the “cartograforce” GitHub account holds the most active open-source repository for TIM ([github.com/cartograforce](http://github.com/cartograforce)). Douglas Lambert at the University at Buffalo (contact: <bert@buffalo.edu>) continues to take leadership to expand TIM’s capacities and usage, and welcomes proposals for new partnerships to explore further TIM research and development.

The cartografoce repository the Lambert hosts was forked from the first TIM repository (<https://github.com/C2DH/tim>), which was part of a project sponsored by the [University of Luxembourg](https://www.c2dh.uni.lu/) in July - December 2020. Lambert was the project manager of that original [TIM release](https://www.c2dh.uni.lu/thinkering/timecode-indexing-module-creating-multimedia-access-oral-history) (Version 0.1.0). Inspiration for that project included an open source project called [oTranscribe](https://otranscribe.com/).

A parallel version of TIM has been developed in the [TheirStory](https://theirstory.io/) (TS) platform, beginning in 2021. It has added functions and features and is actively maintained by TS (as of May 2023). This indexing module within TS is based on the original release of TIM mentioned above (c2dh, Version 0.1.0), and is available primarily to TS customers or project collaborators. For more information contact Zack Ellis (<zack@theirstory.io>).

## Full user guide and software documentation

Please refer to the **[wiki for full user guide and documentation](https://github.com/cartograforce/tim/wiki)**
	
	




