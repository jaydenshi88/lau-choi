document.getElementById("search").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();
  const jobListings = document.getElementsByClassName("job-listing");
  Array.from(jobListings).forEach(function (listing) {
    const title = listing
      .getElementsByClassName("title")[0]
      .innerText.toLowerCase();
    if (title.includes(searchValue)) {
      listing.style.display = "block";
    } else {
      listing.style.display = "none";
    }
  });
});
document
  .getElementById("locationFilter")
  .addEventListener("change", function () {
    const locationValue = this.value;
    const jobListings = document.getElementsByClassName("job-listing");
    Array.from(jobListings).forEach(function (listing) {
      const location = listing.getElementsByClassName("location")[0].innerText;
      if (locationValue === "" || location === locationValue) {
        listing.style.display = "block";
      } else {
        listing.style.display = "none";
      }
    });
  });
document.getElementById("typeFilter").addEventListener("change", function () {
  const typeValue = this.value;
  const jobListings = document.getElementsByClassName("job-listing");
  Array.from(jobListings).forEach(function (listing) {
    const type = listing.getElementsByClassName("type")[0].innerText;
    if (typeValue === "" || type === typeValue) {
      listing.style.display = "block";
    } else {
      listing.style.display = "none";
    }
  });
});
