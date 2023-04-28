# The Timecode Indexing Module (TIM)

Oral history indexing and **audio/video indexing** more generally are critically **dependent on timecode cross-references** central to those multimedia environments. Creating such references has both technical and stylistic components that only a human indexer can balance with high quality. A/v indexers need to be able to **map meaning like librarians and cue audio like radio producers**.

TIM is a unique, system-agnostic environment **for human listening, interpretation, and metadata refinement,** for users to create, edit, manipulate, refine, and otherwise **optimize** the placement of **thematic entry-points** along media timelines (playbars), i.e., establishing appropriate and accurate timecodes from a referencing body of text.

or, more this approach:

TIM is a browser-based tool for indexing and annotation of long-form recorded audio or video files. Ideal for working with oral history interviews, TIM’s multimedia editing environment links in-text timecodes to corresponding points in a media file for access to the nearest second. As a note-taking tool with timecodes, users can identify and recall specific media content for future listening/watching. TIM’s “Notes” workspace can be formulated into structured fields (i.e., timecodes, titles, synopses, and keywords) and then imported for display in a timecode index environment like [OHMS](https://www.oralhistoryonline.org/) and [Aviary](https://www.aviaryplatform.com/). TIM facilitates a level of annotation and indexing that can be used for individual interviews or whole collections, by non-technical users or professional archivists, and for private use or public consumption.

## Overview

The **Timecode Indexing Module (TIM)** is a browser-based tool for creating, editing and formatting metadata for multimedia documents, specifically **text-and-timecode-based “indexes”** for oral histories and other long-form audio or video (a/v). TIM features a flexible workspace for editing text and timecode assets in the **production of indexes and synchronized transcripts**. Users can apply markdown language to populate timecode-level metadata for the OHMS.xml or WebVTT formats. A conceptual diagram of TIM’s general capabilities is given in Figure 1.

<img width="473" alt="image7" src="https://user-images.githubusercontent.com/44659242/231949562-0693bf03-5370-4d8a-986a-8a44611fb1ae.png"><br/><em>Figure 1. Conceptual diagram of the Timecode Indexing Module (TIM).</em>

<br/>TIM includes many features ideal for indexing [oral history](https://oralhistory.org/about/) interviews and works with the indexing architecture for [OHMS](https://www.oralhistoryonline.org/)[ ](https://www.oralhistoryonline.org/)(the Oral History Metadata Synchronizer). Users parse timecodes and text in the TIM Editor into key OHMS metadata fields (i.e., timecodes, titles, synopses, keywords, and notes/partial transcript). Using OHMS’ XML file format (based on the [OHMS.xsd metadata schema](https://www.oralhistoryonline.org/documentation/)), data can be moved in and out to one or more oral history timecode index environments, most commonly the [OHMS Viewer](https://www.oralhistoryonline.org/documentation/). An OHMS.xml index can also be displayed in [Aviary](https://www.aviaryplatform.com/), an a/v [content management system](https://en.wikipedia.org/wiki/Content_management_system)(CMS) that uses the same data structure used in OHMS. See example indexes here in [OHMS](https://kentuckyoralhistory.org/ark:/16417/xt71gphswgm0q)(select the “Play Interview” tab), and in [Aviary](https://viralstoryproject.aviaryplatform.com/collections/941/collection_resources/26543/index). An index developed in TIM can also be viewed in a spreadsheet environment, via a .csv file.

TIM can also be used to refine [automatic speech recognition](https://en.wikipedia.org/wiki/Speech_recognition) (ASR) transcripts or to modify, refine, and export them. This can be formally done through the WebVTT format. Since TIM is essentially a text editor with in-text timecode functionality, data can also be moved in and out via simple copy/paste. Thus TIM facilitates unpublished, backend-oriented and free-form modes (e.g., a/v note taking), or it can be used to generate and proof timecodes in documents not electronically linked to a/v.

Figure 2 presents some different use case concepts for TIM and the major TIM functions pertaining to each. The “OHMS.xml indexers” use case is the primary scenario for which TIM was built, and the “ASR transcript editors” has been pursued by some users. The remaining two use cases are experimental scenarios for which informal examples exist. Deeper descriptions of these uses and additional use cases are discussed here.

<img width="407" alt="image3" src="https://user-images.githubusercontent.com/44659242/231949694-c51d30ad-499f-4c2c-aefc-1e6efdf34fa8.png"><br/><em>Figure 2. TIM use cases and functions.</em>

<br/>The TIM project is spearheaded by [Douglas Lambert](https://engineering.buffalo.edu/civil-structural-environmental/people/post-docs.html), currently a postdoc at the [University at Buffalo](https://www.buffalo.edu/), who previously worked with oral historian Michael Frisch developing an a/v indexing practice as a consulting firm called [The Randforce Associates](http://www.randforce.com/). Zack Ellis of [ThierStory](https://theirstory.io) partnered on the original development of TIM along with the [Centre for Contemporary and Digital History](https://www.c2dh.uni.lu/thinkering/timecode-indexing-module-creating-multimedia-access-oral-history) (see [Versions](#versions)).

## What is Indexing?

The theory and practice that led to the creation of TIM evolved primarily from the field of [oral history](https://en.wikipedia.org/wiki/Oral_history). Oral history depends on recorded media, and while source recordings have been considered valuable and essential since the 1960s, word-for-word transcripts were considered the only way to work with recorded content throughout the 20th century (see, e.g., [Larson 2019](https://doi.org/10.1093/ohr/ohw052)). The ability to consolidate and connect media on computers by the 2000s led to the digitization of oral histories, then the synchronization of text and media through timecodes–both between transcriptions and their associated media, and also via more free-form indexes. Multiple index techniques, processes, platforms, and display interfaces have emerged since the late 1990s, with early pioneers including [The Shoah Foundation](https://vha.usc.edu/home) and [Densho](https://densho.org/). Systems like [OHMS](https://www.oralhistoryonline.org/) popularized the concept and the process, and also made indexing tools available to oral historians and others. Indexing offered a faster, simpler way to map out content by linking summary text directly to media timecodes in digital environments.

**An index is an asset for its creators or public users in many ways:**

* An index provides summarizing text, more readable than a transcript

* Indexing at the timecode level offers a visual, browseable overview of long media files

* Indexing allows for improved access to specific themes across interviews/collections

* An index favors the use of practical, meaningful labeling in natural language, rather than relying only on language that is strictly literal, as is found in transcripts

* Indexing can make more interviews publically accessible with fewer resources compared to traditional transcript approaches

* Indexing is a high-impact process for interview analysis in pedagogical applications

The [Oral History Association](https://oralhistory.org/) is the primary professional organization for oral history theory and practice. Indexing was documented and discussed in a collection of essays called [Oral History in the Digital Age](https://ohda.matrix.msu.edu/) in 2012. The website is a resource for knowledge on oral history practice examined through the lens of rapidly-evolving technology. For more information, use the search term “indexing” to find essays by leaders in the field including [Michael Frisch](https://ohda.matrix.msu.edu/about/authors/frisch/), [Doug Boyd](https://ohda.matrix.msu.edu/about/authors/boyd/), [Doug Lambert](https://ohda.matrix.msu.edu/about/authors/lambert/), [Janneken Smucker](https://ohda.matrix.msu.edu/about/authors/smucker/), and [Brooke Bryan](https://ohda.matrix.msu.edu/about/authors/bryan/).

Indexing is a metaphor that **invokes back-of-the-book indexing**, where content can be highlighted, and where meaningful access is facilitated. Depending on the context, including the size of the collection, an a/v “index” (oral history or not) may look more like a table of contents, and may or may cross reference interviews in many different ways. The most elaborate indexes for collections may make use of controlled vocabularies (e.g., [The National WWII Museum](https://www.ww2online.org/browse)). Building a vocabulary for a collection establishes a meta layer of organized thematic meaning that can be applied across interview segments, yielding a powerful retrieval mechanism that is theme-based. A collection of recordings that includes taxonomies, thesauri, or any custom formatted content maps allows users to approach a collection through a thoughtfully-composed, conceptual framework, as opposed to exploring by interviewees unknown to users, or through shot-in-the dark searches of transcriptions.

In oral history, historically, indexing was a process that was an alternative to word-for-word transcription. Synchronized transcripts evolved in parallel, and the resulting interfaces and data have always been distinct. Improved ASR has added another element and possibly begins to blur the distinction [link to discussion [here](http://iwish).]. Both approaches are about making long-form a/v content more accessible to users.

## Key Features

Working with one a/v media file at a time, an indexer in TIM establishes periodic markers corresponding to themes or highlights in a recording, systematically creating better access to long-form recordings. Some key features include:

* Workspace is based on a free-form text-editing environment

* Videos/media can be loaded from a local computer or accessed via URL

* Indexing timecodes are in-text, actively linked to the media, and hand-editable

* **Timecodes** and their associated **title, synopsis** and **keyword** fields can be defined in TIM and later viewed as an index in the [OHMS](https://www.oralhistoryonline.org/) or [Aviary](https://www.aviaryplatform.com/)[ ](https://www.aviaryplatform.com/)environments.

* Using [markdown](https://www.markdownguide.org/getting-started/), described below, users define the index fields in TIM and transfer them to OHMS/Aviary via an xml file.

* Users can add notes or transcripts, automated or professional, and when available, the system will recognize any timecodes in those texts.

* Users can be non-technical or professional archivists, and the indexes for private use or public display.

* In-progress work can be saved and retrieved in various formats (i.e., text, CSV, VTT), or as a project-level JSON file.

**No login or account is needed to use TIM.** It is strictly browser-based, meaning it also has no central data server to save projects. **Projects must be saved manually using the “Project JSON” option in the “Export” menu or by using the “Save project as JSON” icon.** An active TIM project saved in JSON format retains the location of the active media file, of any transcript active in the transcript area, and of the contents of the notes field and its markdown code.

Index data can be sent to OHMS or Aviary as OHMS-formatted .xml files. Data can also be formulated as closed captioning or subtitle formats (.vtt files) or in generic formats (.txt and .csv) for a variety of uses.

## Demonstration Video

Zack Ellis of [ThierStory](https://theirstory.io) demonstrates TIM in a video he made, hosted by TheirStory on the Aviary platform. The video includes a timecode index for those who wish to read summaries of the themes in the video, and to browse the content non-linearly: [An introduction to TIM](https://theirstory.aviaryplatform.com/collections/926/collection_resources/32558/index).

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

## Contacts

Join our mailing list at <timecode.indexing.module@gmail.com>. To be a partner in the next phase of TIM, contact Douglas Lambert <bert@buffalo.edu>.

# Modes of working in TIM

## Building timecode linkage

* Users have the option to rely primarily on listening to map out a/v content. Simply start typing and add timecodes from scratch.

* Users can copy/paste any and all text and timecode assets that may exist to help build the index.

* Timecode-linked transcripts can be brought into a neighboring pane to navigate the media, or parts of it (with timecodes) can be copy/pasted as part of building an index.

## Markdown

To mark up the different fields for recognition as OHMS.xml or WebVTT files, TIM indexers use [markdown](https://www.markdownguide.org/getting-started/) language to establish the eventual metadata fields. As is generally the case with markdown, TIM’s markdown syntax is simple and does not require any significant programming knowledge or training to use. The specific syntax for marking down OHMS’ fields in TIM can be found [below](#markdown-for-ohmsxml-fields).

## Workflow for an OHMS/Aviary index

TIM allows for an entire interview to be indexed **in non-linear** ways, including a “rough pass,” or iterative, approach. The equivalent tools in OHMS and Aviary have individual dialogues for each index point/timecode that make it cumbersome to build, rearrange, or edit across points in an index. In TIM, an indexer can comfortably establish timecodes/segments for an entire interview before refining and defining (through markdown) all the other metadata files (titles, synopses, keywords, notes/partial transcript). The TIM Editor concept allows for quick scrolling for easy access to all in-progress metadata.

An exported “XML (OHMS)” file from TIM can be viewed on a custom web page or in a content management system (CMS) that incorporates an [OHMS Viewer](https://www.oralhistoryonline.org/). It can be viewed and edited in the [OHMS Application](https://www.oralhistoryonline.org/), a freely available repository environment for managing OHMS-style indexes. An OHMS.xml index can also be displayed in [Aviary](https://www.aviaryplatform.com/), a CMS that uses the same data structure used in OHMS, but displays the fields associated with each timecode in a different way.

An index developed in TIM can also be viewed in a spreadsheet environment, via a .csv file.

## TIM beyond oral history

TIM has capabilities for indexing media beside oral history interviews. For example, TIM can function as a **free-form personal note taking tool** simply by saving and retrieving the JSON at the TIM project level. TIM can also be used to create timecoded transcripts, subtitle / closed caption files, or other custom **3-field indexes (timecode, title, description)**, by saving as VTT files. (WebVTT files, which are text-based, can also be generated from scratch or imported as text, and simply copy/pasted out of TIM for use elsewhere.)

# Creating and managing TIM projects

TIM is browser-based and can be run from anywhere. Assuming a user has stable internet connection, convenient and reliable access to the web-based TIM program can be found here: <https://cartograforce.github.io/tim/>. TIM can also be run offline, though still via a browser, for special cases where internet reliability is an issue (see Advanced Topics) or when a local installation is desired for other reasons.

Figure 3b is a workflow diagram for TIM that expands on the [Conceptual Diagram](#overview) for TIM presented above, indicating some additional details about creating and managing TIM projects.

<img width="752" alt="image15" src="https://user-images.githubusercontent.com/44659242/231949774-d25a35cf-1d37-4b4a-8f9e-155a39313739.png"><br/><em>Figure 3. Workflow diagram for TIM.</em>

## Starting in TIM

To work in TIM, choose an option from the “Create” menu:

* **New Project** - Provides a fresh Workspace with no media yet affiliated.

* **Sample Project** - Provides an example indexing project with markdown applied to the text and shown for 5 fields, readable in OHMS.xml. No media are attached by default for the sample project.

* **Import** (project) - For loading previously saved “Project JSON” files.

* “Choose a file format”

    * When importing a Project JSON file, you must explicitly select “**JSON**” at the very bottom of the drop-down menu.

![image11](https://user-images.githubusercontent.com/44659242/231949872-f8871c0a-4ebb-4221-95aa-991e5a53fcec.png)<br/><em>Figure 4: The Create menu allows users to start a new project or continue a previously created JSON-saved project.</em>

## Load video

To load an a/v file to work with in TIM, users can upload a local media file or provide a video URL.

<u>Upload local media file:</u>

1. Click the **media file** button

2. Navigate to and select the file you wish to upload

3. A video player will appear in the upper left part of the TIM workspace with the selected video loaded

<u>Load video via URL:</u>

1. Enter a valid video URL into the text box provided under “*or load URL*”

2. Press the **Load** button

3. A video player will appear in the TIM workspace with the video loaded

<img width="788" alt="image6" src="https://user-images.githubusercontent.com/44659242/231949945-bcfdae5c-3890-4eb7-a796-90dc4053f814.png"><br/><em>Figure 5: Options for loading media in TIM.</em>

## Saving your work in TIM

TIM is a web-based application for modern browsers, i.e., it functions entirely "client-side" with no database required, meaning **there is no available file storage**. Files auto-saved in TIM are kept within the local computer in the browser’s local, short-term storage. Users need to actively manage TIM files individually by exporting and importing “Project JSON” files. Active TIM projects can be saved in JSON format, which retains the location of the active media file, of any transcript active in the transcript area, and of the contents of the notes field of the TIM Editor and its markdown code. Projects can be saved and exported as JSON by clicking the save icon button on the top right corner of the page, or selected as an option under the “Export” icon next to it.

![image17](https://user-images.githubusercontent.com/44659242/231950236-4106e4fb-fffa-4c03-9081-3d974b27dc71.png)<br/><em>Figure 6: Location of the “Save” button, to save as “Project JSON”</em>

For creating OHMS/Aviary indexes, marked-down text in TIM needs to be saved as “XML (OHMS)” files (see “Building an OHMS or Aviary index” below). Data can also be formulated as closed captioning or subtitle formats (.vtt files) or in generic formats (.txt and .csv) for a variety of uses.

# The TIM Workspace

TIM Workspace is the entire browser page of the application that contains the tools required to produce timecode indexes for recorded audio or video files.

## Workspace components

The workspace consists of 3 components:

* **TIM Editor** - A free-form editing environment for text, with timecode insertion and recognition capabilities.

* **Media Player** - An embedded software-based element that allows playback of a/v content.

* **Timeline** - A second video progress bar for the media player, enlarged for better visualization and navigation. It displays all marked down timecodes, color-coded.

![image18](https://user-images.githubusercontent.com/44659242/231950347-f57d99a4-2bc1-48bb-a657-a6bcb141cd29.png)<br/><em>Figure 7: The TIM Workspace</em>

## The TIM Editor: workspace for affiliating text and timecodes

The most prominent area in the TIM Workspace is the TIM editor, where an indexer can type freely and insert timecodes for the current location of the playbar. In the TIM Editor, a user can build an index. The process involves establishing index time points at the beginning of a desired passage, and adding and arranging the descriptive text that will become metadata for those timecodes. Timecodes (see the **[Timecodes](#timecodes)** section, below) inserted in the text initially (typically blue in color, known as “general” timecodes) can be finalized (as black, large, bold, “segment break” timecodes). The other descriptive text related to the index points can be finalized as the timecodes are established or once all timecodes are established.

Using [markdown](#markdown-for-ohmsxml-fields) language, the TIM Editor is a workspace for refining descriptive text into annotations, summaries, synopses, etc. in the media. All the timecodes and metadata for a media file can be moved into pre-existing indexing formats such as OHMS (see below), or environments that display WebVTT.

## Keyboard shortcuts for media and timecodes

Media shortcuts/keystrokes are helpful when simultaneously listening to a recording and taking notes in TIM, allowing the user to control the player without moving the cursor out of the Notes area.

Media player controls:

* "esc" = play/pause the media

* "ctrl + [" = skip the media backward

* "ctrl + ]" = skip the media forward

With the media player at the desired point, and the cursor in the TIM Editor:

* Insert a new single timecode by pressing ctrl/cmd + j.

* **Multiple Timecodes** can be generated by pressing ctrl + shift + j.

The skip forward or back increment (in seconds) can be adjusted in “Settings”. Note that for these functions, the modifier key is "control" on both Macs and PCs.

**Modes of working (draft)**

* Left hand: Esc. key at the ready for stop start

* Cursor in TIM Editor for typing but also adding timecodes.

* If using multiple, click ctrl shift J just after the desired point (distance between the four timecodes can be edited in Settings)

## Timecodes

New timecodes in the Notes area can be created through a specific keystroke/shortcut or by hand:

* Type a timecode in one of these formats: [mm:ss] or [hh:mm:ss]

* Insert a timecode in the Notes area reflecting the current time on the playbar: "cmd/ctrl + j" = add timecode

* Insert multiple timecodes preceding the current playbar time in the Notes area: "cmd/ctrl + shift + j" = add 4 timecodes 

Whether typing or importing timecodes, there are three types of timecodes that TIM recognizes and links directly to the corresponding time point in the loaded media file. In the TIM Editor, their status is indicated by font size and color.

![image1](https://user-images.githubusercontent.com/44659242/231950569-ea140c0e-d620-41da-a19c-d266e695425c.png)
<br/><em>Figure 8: Timecode types and their display in TIM.</em>

Insert a new timecode by pressing ctrl/cmd + j. The current time location of the transport on the media progress bar will appear in the TIM Editor text wherever the cursor was located. Valid timecodes are displayed as [mm:ss], as [hh:mm:ss], or, if the Add sub-second timcodes is selected in TIM Settings, timecodes will include milliseconds: [hh:mm:ss.mmm]

<u>**General timecodes**</u>
are formattedor and are highlighted in blue. They sit in line with other text and appear as part of the text (with no highlight) when exported.

<u>**Segment break timecodes**</u>
are formatted as [hh:mm:ss] or [mm:ss] and appear in a large, bold, black font. They are
distinguished from other timecodes by appearing on their own line with no space or text next to them. Segment break timecodes are the official timecodes that establish the segment breakpoints of an index. These are the only timecodes that upon export, will be assigned to their own field in index metadata containers like WebVTT and OHMS.xml.

<u>**Ambiguous timecodes**</u>
are highlighted in pink to signify that time digits are recognized but are not formatted precisely as [mm:ss] or [hh:mm:ss], (e.g., 00:03:47] or [00:05:6.)

Three timecode types are shown in the figure below, in context with a marked down index point/segment.

![image21](https://user-images.githubusercontent.com/44659242/231950794-59226df0-5a32-4e83-aced-f1ff6426be12.png)<br/><em>Figure 9: Actively-linked timecode types in TIM: Segment Break, General, Ambiguous.</em>

<u>**Multiple Timecodes**</u>
can be generated by pressing ctrl-shift-J. This tool helps find the best timecode for a desired point in the a/v by displaying not only the timecode for the current location in the play bar, but also the timecodes for 3 seconds before that place. The spacing between the timecodes can be set in the TIM settings menu to multiple seconds, though the default 1 second interval is generally ideal. Users can click and listen to “audition” the options to see which is best, and simply delete the unwanted ones.

![image13](https://user-images.githubusercontent.com/44659242/231950816-04b7ea6e-be9e-472a-b09a-9b8cc6480895.png)
<br/><em>Figure 10. Multiple Timecode option, aka “Timecode Umbrella.”</em>

## The Timeline

The white horizontal bar spanning across the top of TIM Workspace is a second video progress bar (displayed in blue) for the TIM media player. It spans the entire width of the TIM Workspace and represents the length of the loaded media file. It can be clicked on to play points within a file, but it does not display any time scale for the file. The TIM “timeline” graphically displays, in chronological order, all the general and segment break timecodes marked within TIM Editor as blue and orange dots.

![image25](https://user-images.githubusercontent.com/44659242/231950871-a8c9faeb-e704-44ee-a5f0-91b5e48d4ec8.png)<br/><em>Figure 11: The TIM timeline spans the width of the browser window. The enlarged TIM timeline segment displays edited and in-progress index points.</em>

Hovering over the blue dots, users can see the time associated with that particular “general timecode.” Hovering over the orange “segment break timecode” dots, the marked-down “title” field associated with that time point is displayed.

## Transcript resources

The TIM Workspace provides the option to import transcripts for the loaded media. Toggle the “Transcript” slider next to the “Notes” and “Preview” buttons in the TIM Editor to reveal a new pane between the media player and the TIM Editor. A previously loaded transcript will appear, if available.

<img width="316" alt="image9" src="https://user-images.githubusercontent.com/44659242/231951118-a0e002fd-1746-4c34-93a8-42ca67094439.png"><br/><em>Figure 12: The transcript pane toggle.</em>

<img width="553" alt="image22" src="https://user-images.githubusercontent.com/44659242/231951687-d711461b-dbb3-47a0-a0c7-19354c399c80.png"><br/><em>Figure 13: The transcript pane in TIM, revealed.</em>

If no transcript has been loaded, a “No Transcript” indicator with the following menu options displays in the transcript pane:

<img width="167" alt="image4" src="https://user-images.githubusercontent.com/44659242/231951334-430d6b15-28b8-4d9a-a59a-f900a9451a95.png">&nbsp;<img width="155" alt="image12" src="https://user-images.githubusercontent.com/44659242/231951383-bf79548f-1c82-4377-a960-8dba421e3755.png"><br/><em>Figure 14: Menus for adding a transcript to the transcript pane in TIM.</em>

Choose a file in a standard transcription format, including Google, Amazon, IBM, Speechmatics in JSON format. These, along with SRT or WebVTT files, provide transcripts with timecodes embedded.

# Building an OHMS or Aviary index

## The OHMS’ Metadata Model

The [Oral History Media Synchronizer](https://www.oralhistoryonline.org/) (OHMS) is a web-based application for oral history archival management and features capabilities for multimedia display of synchronized transcripts and timecode indexes. OHMS operates around a particular metadata scheme (OHMS.xsd) and associated xml files (referred to as “OHMS.xml”) for storing and transferring all interview metadata. Instructions for creating a synchronized transcript in OHMS can be found in OHMS documentation at [oralhistoryonline.org](http://oralhistoryonline.org).

The **OHMS indexing module** allows users to index interviews one timecode entry at a time, and add 7-10 fields of metadata to each time point. Required fields include only establishing a **Timestamp** and composing a **Segment Title**. Additional fields, **Partial Transcript, Keywords, Subjects, Segment Synopsis** are commonly used, and **GPS** and **Hyperlink** data can also be added (3 and 5 fields, respectively).

TIM can be used to populate up to 5 of the above fields in its editing environment including:

<u>**Timecode:**</u> Establishes the beginning point of the segment.

<u>**Title:**</u> Short characterization of the indexed segment.

<u>**Synopsis:**</u> Space for an annotation, description, summary, etc. of the segment.

<u>**Keywords:**</u> Simple terms or phrases that summarize or represent the segment.

<u>**Partial Transcript:**</u> An *optional* field used in **OHMS-style indexing**, to transcribe the first few words of a segment for identification/confirmation purposes. This field can also be used for full-segment transcripts, or any form of text or notes helpful to the indexing process.

To populate fields in OHMS display environments, TIM can create its own OHMS.xml with OHMS metadata, and move it to environments capable of displaying an OHMS index. Files can be brought into the OHMS editor for viewing, for adding or editing metadata, or for proofing an index created in TIM. Other viewing options include the OHMS Viewer, which can be set up for an individual interview on a server or be added via extension modules to content management systems like CONTENTdm and Omeka. OHMS.xml indexes created or edited anywhere can be viewed in the Aviary content management platform (a paid service).

## Markdown for OHMS.xml fields

TIM uses [markdown](https://www.markdownguide.org/getting-started/) language to establish the eventual metadata fields for an index. TIM’s markdown syntax is simple and does not require any programming knowledge or special training to use. Using markdown is akin to formatting elements of a Word document, like headings, figure labels or for emphasizing text in bold or italics. Markdown can be applied manually by an indexer in the TIM editor “Notes” area. (See the screenshot of “Workspace components” above.)

The markdown syntax for 4 OHMS.xml fields includes:

<u>**Segment Break Timecode:**</u>  Isolate a **timecode on its own line** with no space before or after. It will appear enlarged and in bold.

<u>**Title:**</u> **Add a hashtag character “#”** at the beginning of a line. All the words entered after the hashtag on that line will be used as the title of the segment.

<u>**Synopsis:**</u> Add **the right arrow character, “>”,** at the beginning of a line or paragraph. All the words entered after a right arrow before the next hard carriage return will be used as the synopsis of the segment.

<u>**Keywords:**</u> **Enclose** a keyword or list of keywords **with two asterisks, \*\*.**

<u>**Partial Transcript:**</u> Any text **not** marked down in the TIM editor is assigned by default to appear in the <u>Partial Transcript</u> field, viewable in the Preview option. If the appropriate option is checked in TIM settings, text that is not marked down on *any line or lines anywhere in between two Segment Break Timecodes* will be labeled and displayed as “Partial Transcript” for that timecode in OHMS or Aviary. In OHMS, **Partial Transcript** data, if available, appears before the Segment Synopsis, in Aviary after.

To use the same no-markdown “partial transcript” field as general notes, export the work as a CSV file instead of an XML (OHMS).

The figure below shows an example of a single segment of an oral history index, marked down using TIM’s markdown syntax in the TIM editor under the “Notes” text editing area:

<img width="473" alt="image16" src="https://user-images.githubusercontent.com/44659242/231952602-a2396e3f-de98-4a97-a941-92c9c7432a44.png"><br/><em>Figure 15: Markdown for four fields for a single timecode point of an index in the TIM Editor Notes area.</em>

The Figures below show how the fields marked down in TIM appear in OHMS and Aviary:

![image23](https://user-images.githubusercontent.com/44659242/231952192-ebca5326-3fe1-493b-a2bb-0dc542eb9b86.png)<br/><em>Figure 16: Fields for an index marked down in TIM and migrated to an OHMS index display.</em>

![image2](https://user-images.githubusercontent.com/44659242/231952294-8ded37f3-0364-455a-9249-5b843da37ac3.png)<br/><em>Figure 17: Fields for an index marked down in TIM and migrated to an Aviary index display.</em>

The marked down segments can also be edited or filled in TIM’s “Preview” area, as long as the timecode field for each segment is established in the Notes area (i.e., as Segment Break Timecodes ). Changes made to other fields in the Preview area will be reflected with updated markdown when returning to Notes view in the TIM editor. The Preview view is ideal for proofing index fields before exporting an index out of TIM as an OHMS.xml or .csv file.

![image24](https://user-images.githubusercontent.com/44659242/231961514-74c4403b-c1e0-4b58-a040-4f25b18e23ba.png)
<br/><em>Figure 18: Preview view in the TIM Editor provides a WYSIWYG view and editor for the four fields available for each index point, associated with segment break timecodes established by markdown in the notes area.</em>

## Exporting to OHMS or Aviary via OHMS.xml

Text constructed with [markdown](#markdown-for-ohmsxml-fields) for an index in TIM editor notes can be exported as OHMS.xml by following these steps:

1. Prepare marked-down text in TIM editor notes (click the “**Preview**” button to check the populated fields of the index).

2. Press on the **export icon** located at the top right corner of the page.

3. Click on the “**Choose Format**” dropdown menu and select **XML (OHMS)**

4. To download the OHMS.xml file to your local computer, click on the blue “**Export**” button

![image14](https://user-images.githubusercontent.com/44659242/235052220-6a0e094f-b90d-430d-9aa8-6dd93d6a4755.png)
<em>Figure 19: Export menu panel in TIM.</em>

## Uploading OHMS.xml into OHMS

A TIM project that has been exported in XML format (read [Exporting to OHMS or Aviary](#exporting-to-ohms-or-aviary-via-ohmsxml) to learn how) can be uploaded to OHMS by following these steps:

1. Visit [OHMS website](https://ohms.uky.edu/) and log into your account

2. Select the **IMPORT** tab on the top navigation bar

3. Click the **Choose File** button

4. Upload the XML file that was exported from TIM

5. Press the **Save** button

The figure below highlights steps 2, 3, and 5 on OHMS Import page

![image10](https://user-images.githubusercontent.com/44659242/235052418-7b8b2ca8-7be5-4ea8-99c1-fb02dde08bb8.png)
<em>Figure 20: Import Interviews page in OHMS that allows OHMS users to import XML-indexed files.</em>

Your imported XML-indexed project file will appear under the **INTERVIEWS** tab in your OHMS repository

## Uploading OHMS.xml into Aviary

An OHMS.xml can be brought directly into Aviary from a file assembled, arranged, and exported from TIM. It is an option to bring the file into OHMS first for minor edits or to check the look of the index in that environment.

1. To import an OHMS index into Aviary, the indexer needs to have an Aviary paid account (trial periods are available) and the media file being indexed must be imported into Aviary before and independently of the index. 

2. Once the audio/video–called a “Resource” in Aviary–is in Aviary, an index from TIM can be added to the media. 

3. For the “Resource” created, you must enter a project name. This will be the name that is now associated with this specific “Resource”. In addition, there are “Resource” description metadata fields (duration, publisher, agent, date, description, keywords) that are recommended to be filled out (view figure 1 of this section).


4. The OHMS.xml can now be uploaded to this “Resource” by clicking the **Index** tab located on the right-hand panel. Within the Index content section, click on the vertical ellipsis icon to view a dropdown menu of index actions. Select the “Upload another index” option.

5. An **Index Upload** panel will appear that allows you to browse your local computer to select the OHMS.xml, provide a title for the index selected and type a description about the index. Once these fields have been populated click the blue Upload Index button to complete the process of importing the OHMS.xml file.

![image19](https://user-images.githubusercontent.com/44659242/235052619-b0cb22f3-1f83-4a1d-8486-7eee2b6e6857.png)
<em>Figure 21: A typical Aviary resource with the loaded media file, project name, and resource description.</em>

<img width="489" alt="image8" src="https://user-images.githubusercontent.com/44659242/235052726-ed863ac7-0527-4ffc-a204-c2d9bdffb794.png">

<em>Figure 22: The following dropdown menu in the Aviary resource index tab provides index action options such as upload, create, delete, and so on.</em>

<img width="540" alt="image5" src="https://user-images.githubusercontent.com/44659242/235052790-4feed780-2de1-4ffb-b126-cb237a76e68a.png">

<em>Figure 23: This form allows index files to be uploaded to an Aviary resource by selecting the file on the local device, entering a title for the index, and providing a small description.</em>

# Advanced Topics

## Settings

The Settings menu in TIM allows the users to configure the following:

<u>Add timecode when copying transcript to Notes:</u> Transferring (copy and pasting) text from the transcript panel (text must have been imported or written in acceptable transcript formats such as WebVTT or SRT ) to TIM editor Notes, TIM will recognize the starting timestamp of that specific subtitle/caption and insert a general timecode in front of the copied text. When the box is unchecked, a general timecode will not be added and only the text will be pasted.

<u>Export Notes as Partial Transcript in OHMS XML:</u> Any text not marked down will be identified and associated with the <u>Notes</u> field within the <u>Preview</u> Menu. When checked, this setting dictates that when exported in **XML (OHMS)** format, the <u>Notes</u> fields are converted as <u>Partial Transcript</u> fields. By unchecking the box, the <u>Partial Transcript</u> fields will not appear within the exported OHMS.xml file. It will be exported in a field called “Notes” when exported to a CSV file.

<u>Add sub-second timecodes:</u> Enables timecodes to be recognized in sub-second formats, e.g., to the nearest tenth of a second [hh:mm:ss.d], hundredth of a second [hh:mm:ss.cc]. Using a timecode shortcut keystroke will generate timecodes to the nearest milliseconds [hh:mm:ss.mmm].

<u>Skip forward and back increments (seconds):</u> The number entered will be the interval (in seconds) by which the media file will jump forward or backward when using the ctrl-[ and ctrl-] keystrokes.

<u>Interval between timecodes upon multi-timecode insertion (seconds):</u> The number entered will be the interval (in seconds) between timecodes that are generated by multi-timecode insertion.

![image20](https://user-images.githubusercontent.com/44659242/235053047-cd044f7a-faa7-4172-8239-a581827e5d88.png)

<em>Figure 24: The default setting on the Settings menu panel in TIM</em>

## TIM via command line

### <u>Local Installation</u>

You can clone a copy of TIM and install and run it locally on a PC or mac using the following tools and instructions through the command line. (PC: run > cmd; Mac: via Terminal app)

Install the following prerequisite on your computer. 

* [Node Package Manager](https://www.npmjs.com/) (includes Node.js)
* [Git](https://git-scm.com/)

In your command line terminal, navigate to a preferred directory for the local installation of the TIM repository. ($ = command line in the current directory, comments in grey.)

<em>Command snippet: Commands for TIM installation</em>

```python
# Clone the TIM repository
$ git clone https://github.com/cartograforce/tim.git 
# Go into the repository (i.e., into the new “tim” folder) 
$ cd tim 
# Install dependencies 
$ npm install
```

### <u>Running the application</u>

Before proceeding make sure that you have followed the [Installation](#local-installation) steps.

<em>Command snippet: Command to run TIM application locally</em>

```python
# Within the tim directory, start the application 
$ npm start
```

This will run the application locally on your computer. Visit http://localhost:3000 to view it in the browser.

## Structure of TIM’s JSON file

The code snippet below displays the structure of the TIM Project JSON, as exported from TIM for the “Interview with Steve Zahn” project. (For reference, the same indexed interview can be seen in OHMS, here: https://ohms.uky.edu/preview/?id=109967)

<em>Code snippet: Structure of TIM Project JSON file</em>



```python
{
  "id": "f3e74d2e-7b17-4a0d-b318-9469b32d0e53",# Unqiue ID generated by Tim
  "title": "Interview with Steve Zahn", # The name that the project is saved as
  "url": "https://www.youtube.com/watch?v=gyJk1UfWrRs", # Video URL

# The notes array contains a dictionary for each line used in TIM Notes. Per dictionary, there is a field named 'children' and within that there is a field named 'text'. The contents of the corresponding TIM notes line is then mapped to the 'text' field.
  "notes": [
    {
      "children": [
        {
          "text": "[00:03:24]"
        }
      ]
    },
    {
      "children": [
        {
          "text": "# Moving to Kentucky"
        }
      ]
    },
    {
      "children": [
        {
          "text": ">Talks about meeting his wife Robyn Peterman and moving their family to Kentucky and his interest in Kentucky history."
        }
      ]
    },
    {
      "children": [
        {
          "text": ""
        }
      ]
    },
    {
      "children": [
        {
          "text": "**Historical markers** **Kentucky history**"
        }
      ]
    }
  ],


# The metadata array contains a dictionary for each index created in TIM Notes
  "metadata": [
    {
      "index": 0, # Index number
      "timecode": "00:03:24", # The timestamp of the index
      "time": 204, # Timestamp converted to the number of seconds

# List of all the lines used for this specific index. Each line gets stored in dictionary
      "lines": [
        {
          "index": 1, # Line index number
          "line": "# Moving to Kentucky", # Contents of the line
          "empty": false, # States whether the line is empty or not
          "timecodes": [], # Collects any timecodes recognized within the line
          "times": [],
          "matches": [],
          "keywords": [] # Collects any keywords recognized within the line
        },
        {
          "index": 2,
          "line": ">Talks about meeting his wife Robyn Peterman and moving their family to Kentucky and his interest in Kentucky history.",
          "empty": false,
          "timecodes": [],
          "times": [],
          "matches": [],
          "keywords": []
        },
        {
          "index": 3,
          "line": "",
          "empty": true,
          "timecodes": [],
          "times": [],
          "matches": [],
          "keywords": []
        },
        {
          "index": 4,
          "line": "**Historical markers** **Kentucky history**",
          "empty": false,
          "timecodes": [],
          "times": [],
          "matches": [],
          "keywords": [
            [
              "**Historical markers**",
              "",
              "**"
            ],
            [
              " **Kentucky history**",
              " ",
              "**"
            ]
          ]
        },
        {
          "index": 5,
          "line": "",
          "empty": true,
          "timecodes": [],
          "times": [],
          "matches": [],
          "keywords": []
        }
      ],
      "timecodes": [], # List of timecodes recognized within the index
      "title": "Moving to Kentucky", # Title field for this this specific index
      "synopsis": "Talks about meeting his wife Robyn Peterman and moving their family to Kentucky and his interest in Kentucky history.", # Synopsis field for this specific index
      "notes": "", # Any text within this specific index that is not using markup is stored as notes
      "keywords": "Historical markers, Kentucky history" # Keywords field for this specific index
    }
  ],
  "created": 1673560438173,
  "updated": 1673579715996
}
```

# Future Expansions

## Timecoded notes for live calls

Use TIM to take timecoded notes during a live call that is being recorded by you or someone else.

* Load the following 3-hour count-up timer video into the media player: https://www.youtube.com/watch?v=62cQan4o_Vc
* Synchronize the timer by playing it when the recording begins (or close to it).
* Mark timecodes and take notes during the live call.
* Replace the timer file in TIM with the recorded call file, continue refining the index.
