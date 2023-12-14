import Header from "./sub-components/Header"
import BodyMain from "./sub-components/BodyMain"
import BodyImage from "./sub-components/BodyImage"
import MobileMenuModal from "./MobileMenuModal"
//------------------------------
export default function AppContainer() {
    return (
        <div id="app-container">
            <Header />
            <BodyMain />
            <BodyImage />
        </div>
    )
}