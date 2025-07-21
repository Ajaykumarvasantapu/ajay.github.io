// script.js

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const tabs = document.querySelectorAll("[data-tab]");
  const tabContents = document.querySelectorAll(".tab-content");
  const pageTitle = document.getElementById("pageTitle");

  // Mobile Menu Toggle
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Tab Navigation
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = tab.getAttribute("data-tab");

      // Update active tab link
      tabs.forEach(t => t.parentElement.classList.remove("active"));
      tab.parentElement.classList.add("active");

      // Show correct tab content
      tabContents.forEach(content => {
        content.classList.remove("active");
      });
      document.getElementById(tabId).classList.add("active");

      // Update page title
      pageTitle.textContent = tab.textContent.trim();
    });
  });

  // Dark Mode Toggle
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const icon = darkModeToggle.querySelector("i");
    if (body.classList.contains("dark")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });

  // Schedule Post Button Alert
  document.getElementById("postBtn").addEventListener("click", () => {
    alert("Post scheduled successfully!");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  async function fetchTwitterData() {
  const response = await fetch('https://api.twitter.com/2/users/me ', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const data = await response.json();
  console.log(data);
}
// Backend (Express.js)
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Validate user credentials
  const token = jwt.sign({ userId: user.id }, 'secretKey');
  res.json({ token });
});

// Frontend (JavaScript)
const login = async () => {
  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  localStorage.setItem('token', data.token);
};
document.getElementById('postBtn').addEventListener('click', () => {
  const postContent = document.querySelector('textarea').value;
  if (postContent.trim()) {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push(postContent);
    localStorage.setItem('posts', JSON.stringify(savedPosts));
    alert('Post scheduled!');
  } else {
    alert('Please enter a post.');
  }
});
const ctx = document.getElementById('analytics-chart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Engagement',
      data: [10, 20, 15, 25, 30, 20, 35],
      borderColor: '#4e73df',
      fill: false
    }]
  }
});
// Save user's social media handles
document.getElementById("accountForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const twitter = document.getElementById("twitterHandle").value.trim();
  const facebook = document.getElementById("facebookUser").value.trim();
  const instagram = document.getElementById("instaHandle").value.trim();
  const linkedin = document.getElementById("linkedinSlug").value.trim();

  // Store in localStorage so it saves between visits
  localStorage.setItem("socialAccounts", JSON.stringify({ twitter, facebook, instagram, linkedin }));

  alert("Accounts updated! Links are now active.");

  // Refresh the links
  updateAccountLinks();
});

// Update the clickable icons with saved usernames
function updateAccountLinks() {
  const saved = JSON.parse(localStorage.getItem("socialAccounts"));

  if (!saved) return;

  document.querySelector(".account.twitter")?.setAttribute("href", `https://twitter.com/ ${saved.twitter}`);
  document.querySelector(".account.facebook")?.setAttribute("href", `https://facebook.com/ ${saved.facebook}`);
  document.querySelector(".account.instagram")?.setAttribute("href", `https://instagram.com/ ${saved.instagram}`);
  document.querySelector(".account.linkedin")?.setAttribute("href", `https://linkedin.com/in/ ${saved.linkedin}`);
}

// Run on page load
document.addEventListener("DOMContentLoaded", function () {
  updateAccountLinks(); // Load saved links
  // ... other existing code (tabs, dark mode, etc.)
});