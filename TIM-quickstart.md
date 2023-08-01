# Timecode Indexing Module (TIM) App

## TIM App: for creating and editing OHMS XML –compatible indexed transcripts of A/V media files  

### Introduction
**TIM** is a workspace for **creating, developing, and refining timecodes and other metadata** for multimedia audio/video interfaces. Timecode indexes can be added simply by typing keyboard shortcut commands and descriptive text/keywords/synopses in the editing window at any point in the media file. 

Jump right in with the **[Quick Start Instructions](#quick-start)** below, or see the **[Wiki for full user guide and documentation](https://github.com/cartograforce/tim/wiki)** on all features.

This version of **TIM** is a React app forked from the [Centre for Contemporary and Digital History (C²DH)](https://github.com/C2DH) and is maintained by [Douglas Lambert](https://github.com/cartograforce). 

### About TIM and A/V media transcription and indexing 

**TIM** is an elegant and flexible tool for creating and enhancing text transcripts using plain text or Markdown formatting. **It is especially useful for generating transcripts and associated metadata for the [Aviary](https://www.aviaryplatform.com) and [OHMS](https://www.oralhistoryonline.org) oral history hosting platforms** where *interactive, synchronized, and searchable transcripts* for A/V media files are desired. 

**TIM** can be used to generate timecode-linked transcripts from scratch or can incorporate existing **plain-text SRT or WebVTT transcripts** which can then be built upon to include rich metadata for archival/preservation/cataloging purposes. 

* Generate oral history style indexes for display in OHMS and Aviary. 
* Create thematic access points along media timelines/playbars.
* Edit timecodes as an integral part of the text-editing process
* Formulate segments, titles, synopses, and keywords using Markdown.
* Integrate ASR to produce indexes or timecoded transcripts 
* In TIM: “Map meaning/context like a librarian, cue audio like a radio producer.” 

**TIM** facilitates annotation and indexing for individual interviews or whole collections, by non-technical users or professional archivists, and for private use or public consumption. 

* TIM is a unique environment for human listening, interpretation, and metadata refinement for a/v.
* TIM was built for oral history indexing practice, but can be applied to any long-form recorded audio or video files.
* TIM is browser-based with no username/password required (work must be actively saved to a local computer drive).
* TIM can be used as a note-taking tool, identifying and recalling precise media content points for future listening/watching.


### Quick Start Instructions for using the hosted web app (*no installation or account/login required*):  {#quick-start}

1. Go to **[https://cartograforce.github.io/tim/](https://cartograforce.github.io/tim/)** to load the web app in your browser window.

2. In the **Create** menu, click the **New project** button to begin a new TIM indexing project, or click the **Import** button to upload a saved TIM project file in JSON format.

![Web app home page](https://user-images.githubusercontent.com/44659242/231949872-f8871c0a-4ebb-4221-95aa-991e5a53fcec.png)
*The TIM web app start menu*

3. In an empty TIM project, click the *Choose* **media file** button to load an audio or video file from your local computer *OR* under *or load URL*, paste the direct URL of a media file hosted on the web and click the **Load** button. You can load any media file that has playback support in your browser. 

	* *YouTube, Vimeo, Soundcloud and various other media streaming platform page URLs can be pasted into the **URL** field as-is, others may require a direct link to the media file itself to load.*
	* *If the media file loads properly a green check mark icon will appear at the end of the URL. If TIM is not able to load a media file from the URL, a red warning icon will appear instead.*

![Blank project - load media](https://user-images.githubusercontent.com/44659242/231949945-bcfdae5c-3890-4eb7-a796-90dc4053f814.png)
*Load media files in a blank TIM project*

4. Using the playback controls in the floating media player window or the controls in the main toolbar at the top of the TIM project window, you can play/pause, skip forward or back, and control playback speed. You may also use the ESC key on yor keyboard to play/pause the media file. 

![TIM workspace](https://user-images.githubusercontent.com/44659242/231950347-f57d99a4-2bc1-48bb-a657-a6bcb141cd29.png)
*The TIM project window workspace*

5. When media is playing or paused, type **CTRL-j** (PC) or **CMD-j** (MacOS) to mark a timecode point in the default **Notes** mode.

	* The resulting timecode in **[HH:MM:SS]** format will appear in the editing window and a corresponding dot will appear in the toolbar **Timeline**.
	* A standalone timecode marker with no accompanying text represents a **Segment** heading. 
	* Typing a **text "note"** after a timecode marker changes a bold segment heading timecode into an **inline marker** in a smaller type size and highlighted in blue. In its simplest form, the text after the marker can be a transcript or tags/keywords for indexing the content of the media.
	* Clicking on any timecode marker in the text editing area will jump to the corresponding time in the media file loaded into the viewer window. 

| Keyboard Command  | TIM Function | Notes |
| ------------- | ------------- | ----------- |
|**ESC**| Play/Pause media file | A local or remote media file must be loaded |
|**CMD/CTRL + j**| Insert single timecode marker | Timecode marker appears at current media playback location |
|**CMD/CTRL + SHIFT + j**| Insert multiple timecode markers | Inserts 4 timecode markers at one second intervals; interval between markers adjustable in Settings |
|**CTRL + [**|Skip media file backward|Skip backward one second; interval adjustable in Settings. CTRL key for both Mac/Windows|
|**CTRL + ]**|Skip media file forward|Skip forward one second; interval adjustable in Settings. CTRL key for both Mac/Windows|

7. Clicking on the **Preview** button at the top of the text editing window switches from Notes mode to **Preview mode** where Segment titles, Synopsis, Keywords, and Notes fields can be edited. 

![TIM Preview mode](https://user-images.githubusercontent.com/44659242/231961514-74c4403b-c1e0-4b58-a040-4f25b18e23ba.png)
*Editing metadata fields in the TIM Preview mode*

These fields are needed if OMHS XML compatible indexing metadata export is desired. These fields can also be quickly completed by typing *Markdown-formatted text in the Notes mode*:


| TIM Notes View Markdown Format | TIM / OHMS XML Metadata Schema Field | Markdown Syntax Example |
| ------------- | ------------- | ----------- |
|**A single timecode on its own line with no space before or after**| Segment Break* | ```[00:03:33]``` |
|**A single hashtag symbol followed by text**| Section Title* | ```#Section Title ``` |
|**A single right carat symbol followed by text**| Synopsis | ```>Synopsis text block``` |
|**A word or words enclosed by two asterisks**| Keyword or list of keywords |```**Keyword One, Keyword Two, Keyword Three**```|
|**Any text not formatted in Markdown**|Partial transcript|```Any freeform text without Markdown formatting added with "Export Notes as Partial Transcript in OHMS XML" option checked in Settings```|
|**Any text not formatted in Markdown**|TIM freeform notes/comments|```Any freeform text without Markdown formatting added without "Export Notes as Partial Transcript in OHMS XML" option unchecked in Settings (freeform text is not exported to OHMS)```|

***Note:** Only the Segment Break timecode and Section Title text are required fields for OHMS XML export*

![TIM Markdown formatting](https://user-images.githubusercontent.com/44659242/231952602-a2396e3f-de98-4a97-a941-92c9c7432a44.png)
*Markdown formatting in TIM Notes view*

![OHMS XML metadata schema fields](https://user-images.githubusercontent.com/44659242/231952192-ebca5326-3fe1-493b-a2bb-0dc542eb9b86.png)
*Corresponding OHMS metadata schema fields*

8. TIM can also be used to create, edit, and refine text-based caption files in .vtt or .srt format (such as text transcripts generated by *automatic speech recognition*, or *ASR*) for video media. WebVTT text captions/transcripts can be copy/pasted directly into the TIM Notes view for editing and refinement, and TIM freeform text notes can be formatted using Markdown to create and export WebVTT caption files. WebVTT is an HTML5 compatible caption format and enables rich visual formatting of text captions for display on the Web. 

| TIM Notes View Markdown Format  | WebVTT Output | Markdown Syntax Example | 
| ------------- | ------------- | ----------- |
|**A single timecode on its own line with no space before or after, optionally including miliseconds**| Beginning Timecode Marker* | ```[00:03:33.000]``` |
|**A single hashtag symbol followed by text**| Caption Heading | ```#Caption Heading ``` |
|**A single right carat symbol followed by text**| Text of caption | ```>Text caption for the portion of video in-between timecode markers``` |

***Note:** WebVTT captions are displayed during the duration of the media file in between timecode markers. It is not necessary in TIM to add an ending timecode marker. The ending is assumed to be at the start of the next timecode marker. If no miliseconds suffix is added in TIM, the caption will begin at .000 by default when exported to WebVTT*

9. To save your TIM project, click the "floppy disk" **Save** icon at the top right of the project window. This will save your work as a JSON file on your local computer which can then be loaded and edited again later. ***Note:*** Because TIM works with files stored on your local computer and does not upload your work to a server, it's important that local media and JSON files are not moved or renamed within your computer's file system. If files are moved or renamed, opening a saved TIM project from a JSON file will display an error. 

10. TIM can export your work to one of several different formats for use in other applications. Click the "right arrow" **Export** icon at the top right of the project window. A pop-up will display the current export options in a drop-down menu including:
	* Text (Markdown)
	* CSV
	* XML (OHMS)
	* VTT
	* JSON
	
    Select an option and click the blue **Export** button. Your browser will initiate a file download to your local computer. 
    
### Local Installation

	
	