let featuresDropdownActive = false;
let companyDropdownActive = false;

export function featuresDropdown() {

    let features_dropdown_element = document.getElementById("features-dropdown-section");

    if (!featuresDropdownActive) {
        //console.log("It's active");
        featuresDropdownActive = true;

        features_dropdown_element.style.display = "grid";
    } else {
        //console.log("It's not active");
        featuresDropdownActive = false;

        features_dropdown_element.style.display = "none";
    }
}

export function companyDropdown() {

    let company_dropdown_element = document.getElementById("company-dropdown-section");

    if (!companyDropdownActive) {
        //console.log("It's active");
        companyDropdownActive = true;

        company_dropdown_element.style.display = "block";
    } else {
        //console.log("It's not active");
        companyDropdownActive = false;

        company_dropdown_element.style.display = "none";
    }
}
