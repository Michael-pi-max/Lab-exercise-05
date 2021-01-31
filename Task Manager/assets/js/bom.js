/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

// Define UI Variables  here 
const displayArea = document.querySelectorAll(".badge");
const [hrefSection, protocolSection, hostSection, portSection, hostNameSection,appNameSection ,appVersionSection,platformSection, languageSection, cookieEnabledSection, heightSection, widthSection, pixelDepthSection, lengthSection, stateSection] = displayArea;

// Display the BOM Information on the innerHTML of the elements
hrefSection.innerHTML = location.href;
protocolSection.innerHTML = location.protocol;
hostSection.innerHTML = location.host;
portSection.innerHTML = location.port;
hostNameSection.innerHTML = location.hostname;

appNameSection.innerHTML = navigator.appName;
appVersionSection.innerHTML = navigator.appVersion;
platformSection.innerHTML = navigator.platform;
languageSection.innerHTML = navigator.language;
cookieEnabledSection.innerHTML = navigator.cookieEnabled;

heightSection.innerHTML = screen.height;
widthSection.innerHTML = screen.width;
pixelDepthSection.innerHTML = screen.pixelDepth;

lengthSection.innerHTML = window.length;
stateSection.innerHTML = window.status;
