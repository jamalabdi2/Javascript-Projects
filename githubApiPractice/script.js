// JavaScript
const searchInput = document.getElementById("searchInput");
const displayUsers = document.getElementById("displayData");

const searchUsers = async searchText => {
  try {
    const users = await getData();
    const regex = new RegExp(`^${escapeRegex(searchText)}`, "i");
    const matches = users.filter(user => regex.test(user.login));
    displayHtml(matches);
  } catch (error) {
    console.error("Error fetching data:", error);
    displayUsers.textContent = "Failed to fetch data. Please try again later.";
  }
};

async function getData() {
  const response = await fetch("https://api.github.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch data from the GitHub API.");
  }
  return response.json();
}

function displayHtml(matches) {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
          <div class="user">
            <h4>${match.login}</h4>
            <img src="${match.avatar_url}" alt="User Avatar" width="100" height="100">
          </div>
      `
      )
      .join("");
    displayUsers.innerHTML = html;
  } else {
    displayUsers.innerHTML = "<div class='user'><h4>No matching users found.</h4></div>";
  }
}

function escapeRegex(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

searchInput.addEventListener("input", () => searchUsers(searchInput.value));
