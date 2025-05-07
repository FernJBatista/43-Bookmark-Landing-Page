/////////////////////////////////////////////////
// Mobile Menu Toggle Functionality
const mobileMenuButton = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const closeMenuButton = document.querySelector('.close-menu-button');
const logo = document.querySelector('.logo');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.add('hidden');
    navList.classList.remove('hidden');
    closeMenuButton.classList.remove('hidden');
    logo.classList.add('active');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.remove('hidden');
    navList.classList.add('hidden');
    closeMenuButton.classList.add('hidden');
    logo.classList.remove('active');
});

/////////////////////////////////////////////////
// Feature Tabs Functionality
//First select the tab navigation
const simpleBookmarkingTab = document.querySelector('#simple-bookmarking')
const speedySearchingTab = document.querySelector('#speedy-searching')
const easySharingTab = document.querySelector('#easy-sharing')
const featureTabs = document.querySelectorAll('.feature-tab');
//Then select the content that will be shown when the tab is clicked
const simpleBookmarkingContent = document.querySelector('#simple-bookmarking-content')
const speedySearchingContent = document.querySelector('#speedy-searching-content')
const easySharingContent = document.querySelector('#easy-sharing-content')
const featureContents = document.querySelectorAll('.feature-content');

// Add event listeners to each tab
simpleBookmarkingTab.addEventListener('click', () => {
    featureTabs.forEach(tab => tab.classList.remove('active'));
    featureContents.forEach(tab => tab.classList.remove('active'));
    simpleBookmarkingContent.classList.add('active');
    simpleBookmarkingTab.classList.add('active');
});

speedySearchingTab.addEventListener('click', () => {
    featureTabs.forEach(tab => tab.classList.remove('active'));
    featureContents.forEach(tab => tab.classList.remove('active'));
    speedySearchingContent.classList.add('active');
    speedySearchingTab.classList.add('active');
});

easySharingTab.addEventListener('click', () => {
    featureTabs.forEach(tab => tab.classList.remove('active'));
    featureContents.forEach(tab => tab.classList.remove('active'));
    easySharingContent.classList.add('active');
    easySharingTab.classList.add('active');
});

/////////////////////////////////////////////////
// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        if (item.classList.toggle('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });      
})