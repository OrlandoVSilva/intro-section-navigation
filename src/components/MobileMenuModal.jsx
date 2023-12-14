//-----------------------------
export default function MobileMenuModal(props) {

    let featuresDropdownActive = false;
    let companyDropdownActive = false;

    function featuresDropdown() {

        let features_dropdown_element = document.getElementById("features-dropdown-section");

        if (!featuresDropdownActive) {
            console.log("It's active");
            featuresDropdownActive = true;

            features_dropdown_element.style.display = "grid";
        } else {
            console.log("It's not active");
            featuresDropdownActive = false;

            features_dropdown_element.style.display = "none";
        }
    }

    function companyDropdown() {

        let company_dropdown_element = document.getElementById("company-dropdown-section");

        if (!companyDropdownActive) {
            console.log("It's active");
            companyDropdownActive = true;

            company_dropdown_element.style.display = "block";
        } else {
            console.log("It's not active");
            companyDropdownActive = false;

            company_dropdown_element.style.display = "none";
        }
    }


    return (
        <div id="mobile-menu-modal">
            <div className="mobile-menu-modal-section"> {/* - 1 - */}
                <div id="mobile-menu-modal-close-icon" onClick={props.clickModal}></div>
            </div>
            <div className="mobile-menu-modal-section"> {/* - 2 - */}
                <span>Features</span>
                <div className="mobile-menu-modal-dropdown-arrow" onClick={featuresDropdown}></div>
            </div>
            <div className="mobile-menu-modal-section" id="features-dropdown-section">
                <div id="mobile-menu-features-icon-todoList"></div>
                <div id="mobile-menu-features-label-todoList">
                    <span>Todo List</span>
                </div>
                <div id="mobile-menu-features-icon-calendar"></div>
                <div id="mobile-menu-features-label-calendar">
                    <span>Calendar</span>
                </div>
                <div id="mobile-menu-features-icon-reminders"></div>
                <div id="mobile-menu-features-label-reminders">
                    <span>Reminders</span>
                </div>
                <div id="mobile-menu-features-icon-planning"></div>
                <div id="mobile-menu-features-label-planning">
                    <span>Planning</span>
                </div>
            </div> {/* - 3 - */}
            <div className="mobile-menu-modal-section"> {/* - 4 - */}
                <span>Company</span>
                <div className="mobile-menu-modal-dropdown-arrow" onClick={companyDropdown}></div>
            </div>
            <div className="mobile-menu-modal-section" id="company-dropdown-section">
                <div className="mobile-menu-company-label">
                    <span>History</span>
                </div>
                <div className="mobile-menu-company-label">
                    <span>Our Team</span>
                </div>
                <div className="mobile-menu-company-label">
                    <span>Blog</span>
                </div>
            </div> {/* - 5 - */}
            <div className="mobile-menu-modal-section"> {/* - 6 - */}
                <span>Careers</span>
            </div>
            <div className="mobile-menu-modal-section"> {/* - 7 - */}
                <span>About</span>
            </div>
            <div className="mobile-menu-modal-section">
                <span>Login</span>
                <span>Register</span>
            </div> {/* - 8 - */}
        </div>
    )
}